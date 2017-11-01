/*
  提供了自动监控占用大小
  设置卸除策略的缓存工具
*/

// key的前缀
let prefix = 'supermarket-'
// 卸除策略 先进先出 FIFO 最近最少使用 LRU
let dropStrategy = 'FIFO'
// 最大占用阈值 单位kb 2500 是2.5M
let maximum = 2500
// 清除开始时间点 默认为7天
let timePoint = 1000 * 60 * 60 * 24 * 7

function occupySize () {
  var size = 0
  for (let item in window.localStorage) {
    if (window.localStorage.hasOwnProperty(item)) {
      // console.info(window.localStorage.getItem(item))
      size += window.localStorage.getItem(item).length
    }
  }
  // console.log('当前localStorage剩余容量为' + (size / 1024).toFixed(2) + 'KB')
  return (size / 1024).toFixed(2)
}

function autoClear () {
  if (occupySize() < maximum) {
    // console.info('暂时不需要清除缓存，空间还有')
    return
  }
  clearItems(dropStrategy)
}

function clearItems (strategy) {
  let timeInterval = timePoint
  while (occupySize() >= maximum && timeInterval > 1000) {
    for (let item in window.localStorage) {
      if (window.localStorage.hasOwnProperty(item) && item.indexOf(prefix) === 0) {
        let valStr = window.localStorage.getItem(item)
        try {
          let valObj = JSON.parse(valStr)
          if (strategy === 'FIFO' && (valObj.createTime + timeInterval < Date.now())) {
            window.localStorage.removeItem(item)
          } else if (strategy === 'LRU' && (valObj.lastUsedTime + timeInterval < Date.now())) {
            window.localStorage.removeItem(item)
          }
        } catch (e) {
          console.warn('error occur during clear opertion: ' + e)
        }
      }
    }
    // 以3倍率逼近当前时间
    timeInterval = Math.round(timeInterval / 3)
  }
}

setTimeout(autoClear, 2000)

// 在任何一个值对象中都包装了两个属性 createTime 和 lastUsedTime
// 真实的值对象在val属性中
export function setItem (key, value) {
  let wrapper = {
    createTime: Date.now(),
    lastUsedTime: 0,
    val: value
  }
  window.localStorage.setItem(prefix + key, JSON.stringify(wrapper))
}

export function getItem (key) {
  let wrapper = window.localStorage.getItem(prefix + key)
  let result = ''
  try {
    result = JSON.parse(wrapper)
    // 写入最近访问时间
    result.lastUsedTime = Date.now()
    window.localStorage.setItem(prefix + key, JSON.stringify(result))
  } catch (e) {
    console.warn('localStorage parse data error : ' + e)
  }
  return result && result.val
}
