<template>
  <div>
    <Input type="input" @click.native="openByDrop($event)" v-model="calendar2.display" readonly>
        <Icon size="0.4rem" name="calendar" slot="icon"></Icon>
    </Input>
    <Input type="input" @click.native="openByDialog($event)" v-model="calendar4.display" readonly>
        <Icon size="0.4rem" name="calendar" slot="icon"></Icon>
    </Input>
    <Popup v-model="calendar2.show">
      <Calendar
        ref="calendar1"
        :lunar="calendar2.lunar" 
        :zero="calendar2.zero" 
        :value="calendar2.value" 
        @select="calendar2.select">
      </Calendar>
    </Popup>

    <transition name="fold">
      <Popup v-model="calendar4.show">
        <Calendar :range="calendar4.range" :zero="calendar4.zero" :lunar="calendar4.lunar" :value="calendar4.value"  @select="calendar4.select"></Calendar>
      </Popup>
    </transition>
    
  </div>
</template>

<script>
import { Calendar } from 'packages/calendar'
import { Popup } from 'packages/popup'
import { Input } from 'packages/input'
import { Icon } from 'packages/icon'

export default {
  name: 'demo-calendar',
  components: {
    Calendar,
    Popup,
    Input,
    Icon
  },
  data() {
    return {
      calendar2: {
        display: '2018/02/16',
        show: false,
        zero: true,
        value: [2018, 2, 16], //默认日期
        lunar: true, //显示农历
        select: value => {
          this.calendar2.show = false
          this.calendar2.value = value
          this.calendar2.display = value.join('/')
        }
      },
      calendar4: {
        display: '2018/02/16 - 2019/02/16',
        show: false,
        range: true,
        zero: true,
        value: [[2018, 2, 16], [2019, 2, 16]], //默认日期
        lunar: false, //显示农历
        select: (begin, end) => {
          this.calendar4.show = false
          this.calendar4.value = [begin, end]
          this.calendar4.display = begin.join('/') + ' - ' + end.join('/')
        }
      }
    }
  },
  methods: {
    openByDrop(e) {
      this.calendar2.show = true
      this.calendar2.left = e.target.offsetLeft + 19
      this.calendar2.top = e.target.offsetTop + 70

      e.stopPropagation()
      window.setTimeout(() => {
        document.addEventListener(
          'click',
          e => {
            this.calendar2.show = false
            document.removeEventListener('click', () => {}, false)
          },
          false
        )
      }, 1000)
    },
    openByDialog() {
      this.calendar4.show = true
    }
  }
}
</script>
<style lang="less">
.fold-enter-active {
  animation-name: fold-in;
  animation-duration: 0.5s;
}
.fold-leave-active {
  animation-name: fold-out;
  animation-duration: 0.5s;
}
@keyframes fold-in {
  0% {
    transform: translate3d(0, 100%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fold-out {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, 100%, 0);
  }
}
</style>

