<template>
  <div>
    <div class="paragraph">
      <h3>日期时间选择</h3>
      <Datetime v-model="datetime0" />
    </div>
    <div class="paragraph">
      <h3>时间选择</h3>
      <Datetime type="time" v-model="datetime1"/>
    </div>
    <div class="paragraph">
      <h3>日期选择</h3>
      <Datetime type="date" v-model="datetime2"/>
    </div>
    <div class="paragraph">
      <h3>自定义模板</h3>
      <Datetime type="date" :yearFormat="yearFormat" :monthFormat="monthFormat" :dayFormat="dayFormat" v-model="datetime3"/>
    </div>
    <div class="paragraph">
      <h3>限制时间范围</h3>
      <Datetime startDate="2012-03-16 15:13" endDate="2019-10-21 22:21" v-model="datetime4"/>
    </div>
  </div>
</template>

<script>
import { Datetime } from 'packages/datetime'
export default {
  components: {
    Datetime
  },
  data() {
    return {
      datetime0: '',
      datetime1: '',
      datetime2: '',
      datetime3: '',
      datetime4: '',
      yearFormat: '<span>{value}<i>年</i></span>',
      monthFormat: '<span>{value}<i>月</i></span>',
      dayFormat: '<span>{value}<i>日</i></span>'
    }
  }
}
</script>


