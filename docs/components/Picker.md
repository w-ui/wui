# Picker 多级联动选择列表 

+ 支持多级联动选择, 例如省市区选择


### Demo
```html
<template>
  <div>
    <Cell title="请选择书名：">
      <Picker :columns="columns" :items="books" v-model="vals"></Picker>
    </Cell>
    <Cell title="请选择城市：">
      <Picker ref="addr" :columns="columnsAddress" :items="address" v-model="pcd" @change="selectChange"></Picker>
    </Cell>
  </div>
</template>


<script>
import { Picker } from 'w-ui/lib/picker'
import { Cell } from 'w-ui/lib/cell'

const citys = {
  '1001': [
    {
      name: '北京',
      value: '1001'
    }
  ],
  '136': [
    {
      name: '武汉市',
      value: '137'
    }
  ]
};

const districts = {
  '1001': [
    {
      name: '海淀区',
      value: '1021'
    },
    {
      name: '朝阳区',
      value: '1031'
    }
  ],
  '137': [
    {
      name: '汉口区',
      value: '1237'
    },
    {
      name: '汉阳区',
      value: '1216'
    },
    {
      name: '武昌区',
      value: '1262'
    },
    {
      name: '江夏区',
      value: '1264'
    }
  ]
};

export default {
  components: {
    Picker,
    Cell
  },
  data(){
    return {
      columns: ['book'],
      books: {
        book: [
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
      vals: {book: 'BN2081-7326'},
      columnsAddress: ['province', 'city', 'district'],
      address: {
        province: [
          {
            name: '北京',
            value: '1001'
          },
          {
            name: '湖北省',
            value: '136'
          }
        ],
        city: [],
        district: []
      },
      pcd: {
        province: '1001',
        city: '',
        district: ''
      }
    }
  },
  methods: {
    selectChange(data){
      if(data.column == 'province'){
        this.address.city = citys[data.value] || [];
        this.$refs.addr.updateColumn('city');
      } else if(data.column == 'city') {
        this.address.district = districts[data.value]  || [];
        this.$refs.addr.updateColumn('district');
      }
    }
  }
}
</script>

```

###  Select 属性介绍 props

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| columns       | 列          | Array     |              |       |
| items         | 数据        | Object     |             |          |
| v-model       | 初始值      | String     |              |          | 

###  Select 事件介绍  event

|  名称          | 说明        | 参数       | 
|---------------|-------------|-----------|
| change        | 选择项改变    | {column: '', value: ''}     |


###  Select 方法介绍  api

|  名称          | 说明        | 参数       | 
|---------------|-------------|-----------|
| updateColumn    | 更新列    | String   列名  |