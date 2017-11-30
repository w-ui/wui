# Select 多级联动选择列表 

支持多级联动选择, 例如省市区选择

```javascript
let columns = ['province', 'city', 'district'];

let items = {
  'province': [
    {
      name: '北京',
      value: 10001
    },
    {
      name: '上海',
      value: 289
    }
  ],
  'city': [
    {
      name: '北京',
      value: 10001
    }
  ]
  'district': [
    {
      name: '海淀区',
      value: 10001
    },
    {
      name: '朝阳区',
      value: 289
    }
  ]
}
```

### demo
```javascript
<template>
  <div>
    <w-cell title="请选择书名：">
      <w-select :columns="columns" :items="items" v-model="vals"></w-select>
    </w-cell>
  </div>
</template>


<script>
import Select from 'packages/select'
import Cell from 'packages/cell'

export default {
  components: {
    'w-select': Select,
    'w-cell': Cell
  },
  data(){
    return {
      columns: ['books'],
      items: {
        books: [
          {
            name: '月亮与六便士',
            value: 'BN3423-44311'
          },
          {
            name: '送你一颗子弹',
            value: 'BN8927-5319'
          },
          {
            name: '追风筝的人',
            value: 'BN2677-1854'
          },
          {
            name: '摆渡人',
            value: 'BN2081-7326'
          }
        ]
      },
      vals: {books: 'BN2081-7326'}
    }
  }
}
</script>

```

###  Select 插槽介绍 slot

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| columns       | 列          | Array     |              |       |
| items         | 数据        | Object     |             |          |
| v-model       | 初始值      | String     |              |          | 

###  Select 事件介绍  event

|  名称          | 说明        | 参数       | 
|---------------|-------------|-----------|
| change        | 选择项改变    | {column: '', value: ''}     |