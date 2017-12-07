# Search 搜索框 

### 基本用法

search搜索框是升级后的input组件，能够提供搜索参照项
参照项通过result属性传入，是数组类型
数组里的对象需要有两个属性，一个是caption用于显示，一个是key用于进行搜索提交参数
下面的简单例子展示了如何使用search组件

```html
<template>
  <div :style="{position: 'relative', width: '450px'}">
    <search :searchCb="search" placeholder="placeholder" :onChangeCb="onChange" :onChangeCallInterval="1000" :result="array"></search>
  </div>
</template>
```
<pre>
  data () {
    return {
      array: []
    }
  },
  methods: {
    search (keywords) {
      // 此处调用服务端接口进行表单提交
      console.log(keywords)
    },
    onChange (keywords) {
      // 此处一般可以进行ajax请求，从服务端取数据，然后按照规定的格式放入array中传给search组件
      console.log(keywords)
      this.array = [{
        caption: 'aaa',
        key: 'aaakey'
      }, {
        caption: 'bbb',
        key: 'bbbkey'
      }, {
        caption: 'ccc',
        key: 'ccckey'
      }, {
        caption: 'ddd',
        key: 'ddddkey'
      }]
    }
  }
</pre>


详细的使用api见下表


### 属性介绍 Attributes

| 参数      | 说明    | 类型      |  默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| placeholder     | 输入框未输入内容时展示的提示信息   | String  |    请输入关键字        |
| value     | input的value值  | String  |     ''    |
| result     | 搜索框的参照项内容格式如 [{caption: 'caption', key: 'key'}, ...]   | array    |  null   |
| searchCb     |  点击搜索按钮调用的函数  | Function    |   null    |
| onChangeCb     | onChange的回调，用于取参照数据   | Function    |   null    |
| onChangeCallInterval     | 用于对onChangeCb的节流，防止接口调用次数过多，在用于输入后的设置毫秒数后触发onChangeCb   | Number    |  500  |

