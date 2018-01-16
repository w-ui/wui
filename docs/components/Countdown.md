# Countdown 倒计时

+ 支持自定义格式和样式

### 基本用法

```html
<w-countdown :time="time1" @finish=""></w-countdown>
```

###  Countdown 属性介绍 props

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| time          | 毫秒数       | Number    |              |           |
| format        | 格式         | 时间格式   |  详见格式字符  |           |


###  Countdown 事件介绍 event

| 名称           | 说明        |
|---------------|-------------|
| finish        | 倒计时完成    |


###  Countdown 插槽介绍 slot

| 名称           | 说明        |
|---------------|-------------|
| default       | 自定义显示样式 |


###  format 格式字符
| 名称           | 说明        |
|---------------|-------------|
| %Y            | 年    |
| %m            | 月    |
| %w            | 周    |
| %D            | 天    |
| %H            | 小时    |
| %M            | 分钟    |
| %S            | 秒      |

###  自定义格式字符
| 名称           | 说明        |
|---------------|-------------|
| %_D1          | 天, 第一位字符    |
| %_D2          | 天, 第二位字符    |
| %_D3          | 天, 第三位字符    |
| %_H1          | 小时, 第一位字符  |
| %_H2          | 小时, 第二位字符  |
| %_M1          | 分钟, 第一位字符  |
| %_M2          | 分钟, 第二位字符  |
| %_S1          | 秒, 第一位字符    |
| %_S2          | 秒, 第二位字符    |


### Demo
```html
<template>
    <div>
        <div class="paragraph">
            <h3>按钮</h3>
            秒杀倒计时：
            <w-countdown :time="time1" ></w-countdown>
        </div>

        <div class="paragraph">
            <h3>按钮</h3>
            距离世纪杯开幕还剩：
            <w-countdown :time="time2"></w-countdown>
        </div>

        <div class="paragraph">
            <h3>按钮</h3>
            距离世纪杯开幕还剩：
            <w-countdown :time="time2">
                <span class="style1">%_D1</span>
                <span class="style1">%_D2</span>
                <span class="style1">%_D3</span>天
                <span class="style1">%_H1</span>
                <span class="style1">%_H2</span>时
                <span class="style1">%_M1</span>
                <span class="style1">%_M2</span>分
                <span class="style1">%_S1</span>
                <span class="style1">%_S2</span>秒
            </w-countdown>
        </div>
    </div>
    
    
</template>


<script>
import {Countdown} from 'packages/countdown'

export default {
  components: {
    'w-countdown': Countdown
  },
  data() {
      return {
          time1: Date.now() + 3*24*60*60*1000,
          time2: new Date(2018, 6, 14).getTime()
      }
  }
}
</script>

<<style lang="less">
    .style1 {
        color: dodgerblue;
        font-weight: bold;
        font-size: 0.4rem;
    }
</style>

```

