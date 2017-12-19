# Calendar 日历

### demo

```html
<template>
  <div>
    <w-input type="input" @click.native="openByDrop($event)" v-model="calendar2.display" readonly>
        <w-icon size="0.4rem" name="calendar" slot="icon"></w-icon>
    </w-input>
    <w-input type="input" @click.native="openByDialog($event)" v-model="calendar4.display" readonly>
        <w-icon size="0.4rem" name="calendar" slot="icon"></w-icon>
    </w-input>
    <w-popup v-model="calendar2.show">
      <w-calendar
        ref="calendar1"
        :lunar="calendar2.lunar" 
        :zero="calendar2.zero" 
        :value="calendar2.value" 
        @select="calendar2.select">
      </w-calendar>
    </w-popup>

    <transition name="fade">
        <w-popup v-model="calendar4.show">
        <w-calendar :range="calendar4.range" :zero="calendar4.zero" :lunar="calendar4.lunar" :value="calendar4.value"  @select="calendar4.select"></w-calendar>
        </w-popup>
    </transition>
    
  </div>
</template>

<script>
 
import Calendar from 'packages/calendar'
import Popup from 'packages/popup'
import Input from 'packages/input'
import Icon from 'packages/icon'

export default {
    name: 'demo-calendar',
    components: {
      'w-calendar': Calendar,
      'w-popup': Popup,
      'w-input': Input,
      'w-icon': Icon
    },
    data(){
        return {
            calendar2:{
                display: "2018/02/16",
                show: false,
                zero: true,
                value:[2018,2,16], //默认日期
                lunar: true, //显示农历
                select:(value)=>{
                    this.calendar2.show=false;
                    this.calendar2.value=value;
                    this.calendar2.display=value.join("/");
                }
            },
            calendar4:{
                display:"2018/02/16 - 2019/02/16",
                show: false,
                range: true,
                zero: true,
                value: [[2018,2,16], [2019,2,16]], //默认日期
                lunar: false, //显示农历
                select:(begin,end)=>{
                    this.calendar4.show=false;
                    this.calendar4.value=[begin,end];
                    this.calendar4.display=begin.join("/")+" - "+end.join("/");
                }
            },
        }
    },
    methods:{
        openByDrop(e){
            this.calendar2.show=true;
            this.calendar2.left=e.target.offsetLeft+19;
            this.calendar2.top=e.target.offsetTop+70;
           
            e.stopPropagation();
            window.setTimeout(()=>{
                document.addEventListener("click",(e)=>{
                    this.calendar2.show=false;
                    document.removeEventListener("click",()=>{},false);
                },false);
            },1000)
        },
        openByDialog(){
            this.calendar4.show=true;
        }
    }
}
</script>

```

###  Calendar 属性介绍  props

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| multi         | 多选模式     | Boolean    |             |   false   |
| range         | 范围模式     | Boolean    |             |  false    |
| begin         | 开始日期      | Array     |              |          | 
| end           | 结束日期      | Array     |              |          | 
| zero          | 是否小于10补零 | Boolean   |              |  false   | 
| disabled      | 屏蔽的日期     | Array    |              |          | 
| lunar         | 是否显示农历   | Boolean    |              |  false  | 
| weeks         | 自定义星期名称  | Array    |              |          | 
| months        | 自定义月份      | Array    |              |          | 
| events        | 自定义事件      | Array    |              |          | 


### Calendar 事件介绍 events

|名称           | 说明          | 参数         |
|--------------|---------------|-------------|
| select       | 日期选择       | values       |
| selectMonth  | 月切换         | month, year  |
| selectYear   | 年切换         | year         |