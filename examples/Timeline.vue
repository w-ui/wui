<template>
  <div style="text-align: left">
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
  import Timeline from 'packages/timeline'
  import TimelineItem from 'packages/timeline-item'
    export default {
      components: {
        'w-timeline': Timeline,
        'w-timeline-item': TimelineItem
      }
    }
</script>