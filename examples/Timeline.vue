<template>
  <div style="text-align: left">
    <w-timeline>
        <w-timeline-item>
          <a class="self-icon2" slot="icon"><span></span></a>
          <p> 您的订单已签收。</p>
          <p style="margin-top: 10px;">2018-01-05 10:30:41</p>
        </w-timeline-item>
        <w-timeline-item>
          <p> 您的订单正在派送途中，请您准备签收。</p>
          <p style="margin-top: 10px;">2018-01-05 09:19:41</p>
        </w-timeline-item>
        <w-timeline-item>
          <a class="self-icon" slot="icon"><w-icon name="shopping-cart"></w-icon></a>
          <p>【北京市】您的订单已到达【上地站】</p>
          <p style="margin-top: 10px;">2018-01-05 06:07:33</p>
        </w-timeline-item>
        <w-timeline-item>
          <p>【北京市】您的订单在京东【宿迁分拨中心】发货完成。</p>
          <p style="margin-top: 10px;">2018-01-03 15:22:52</p>
        </w-timeline-item>
    </w-timeline>
  </div>
</template>

<script>
  import Timeline from 'packages/timeline'
  import TimelineItem from 'packages/timeline-item'
  import Icon from 'packages/icon'
    export default {
      components: {
        'w-icon': Icon,
        'w-timeline': Timeline,
        'w-timeline-item': TimelineItem
      }
    }
</script>

<<style lang="less">
  .self-icon{
    height: 0.6rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .self-icon2{
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 100%;
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
      width: 0.2rem;
      height: 0.2rem;
      border-radius: 100%;
      background-color: dodgerblue;
    }
  }
</style>
