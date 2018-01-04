#  Timeline 时间轴

垂直时间轴组件
+ 左侧图标支持定制
+ 图标尺寸不超过40px

### Demo

```html
<template>
  <div>
    <w-timeline>
        <w-timeline-item>
            <p>【南宁市】您的订单正在配送途中，请您准备签收，感谢您的耐心等待。京东扫码付，单单享立减。</p>
            <p style="margin-top: 10px;">2017-08-18 08:24:18</p>
        </w-timeline-item>
        <w-timeline-item>
            <p>【南宁市】您的订单已到达【南宁安吉站】</p>
            <p style="margin-top: 10px;">2017-08-18 07:25:08</p>
        </w-timeline-item>
        <w-timeline-item>
            <p>【南宁市】您的订单在京东【南宁分拨中心】发货完成，准备送往京东【南宁安吉站】</p>
            <p style="margin-top: 10px;">2017-08-17 21:44:08</p>
        </w-timeline-item>
    </w-timeline>
  </div>
</template>

<script>
    export default {
    }
</script>

```

###  Timeline 插件介绍 slots

| 名称           | 说明            |
|---------------|-----------------|
| icon          | 左侧icon         |