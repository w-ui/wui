<template>
    <div>
        <div class="paragraph">
            <h3>秒杀倒计时：</h3>
            <w-countdown :time="time1" ></w-countdown>
        </div>

        <div class="paragraph">
            <h3>距离世纪杯开幕还剩：</h3>
            <w-countdown :time="time2"></w-countdown>
        </div>

        <div class="paragraph">
            <h3>距离世纪杯开幕还剩：（自定义）</h3>
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
import { Countdown } from 'packages/countdown'

export default {
  components: {
    'w-countdown': Countdown
  },
  data() {
    return {
      time1: Date.now() + 3 * 24 * 60 * 60 * 1000,
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
