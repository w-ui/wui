#  DateTime 时间选择控件

### 概述

日期时间选择器

```html
<template>
    <div>
      <p>
        <h3>日期时间选择</h3>
        <w-datetime v-model="datetime0"></w-datetime>
      </p>
      <p>
        <h3>时间选择</h3>
        <w-datetime type="time" v-model="datetime1"></w-datetime>
      </p>
      <p>
        <h3>日期选择</h3>
        <w-datetime type="date" v-model="datetime2"></w-datetime>
      </p>
      <p>
        <h3>自定义模板</h3>
        <w-datetime type="date" :yearFormat="yearFormat" :monthFormat="monthFormat" :dayFormat="dayFormat" v-model="datetime3"></w-datetime>
      </p>
      <p>
        <h3>限制时间范围</h3>
        <w-datetime startDate="2012-03-16 15:13" endDate="2019-10-21 22:21"v-model="datetime4"></w-datetime>
      </p>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                datetime0: '',
                datetime1: '',
                datetime2: '',
                datetime3: '',
                datetime4: '',
                yearFormat: '<span>{value}<i>年</i></span>',
                monthFormat: '<span>{value}<i>月</i></span>',
                dayFormat: '<span>{value}<i>日</i></span>',
            }
        }
    }
</script>

```

###  Audio 属性介绍 Attributes

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| type          | 类型         | String   | datetime, date, time  |  datetime  |
| startDate     | 限制开始时间	    | String   |    |      |
| endDate       | 限制结束时间	    | String    |            |       |
| startYear     | 限制“年”的开始值	 | Number   |            |   |
| endYear       | 限制“年”的结束值	 | Number    |            |    |
| startHour     | 限制“时”的开始值    | String  |   |   |
| endHour       | 限制“时”的开始值    | String  |   |   |
| yearFormat    | 自定义“年”模板      | String  |   |   |
| monthFormat   | 自定义“月”模板      | String  |   |   |
| dayFormat     | 自定义“日”模板      | String  |   |   |
| hourFormat    | 自定义“小时”模板    | String  |   |   |
| minuteFormat  | “分钟”模板     | String  |   |   |
| value         | 值      | String  |   |   |
| cancelText    | 取消文字	      | String  |   | 取消 |
| confirmText   | 确定文字     | String  |   | 确定 |
| readonly      | 是否只读     | Boolean  |   | false |