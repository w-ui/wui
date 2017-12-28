
# Tree 树


### Demo

```html
<template>
  <div>
    <w-tree ref='tree' @node-click='nodeClick' :data='treeData' :multiple='true' :halfcheck='true'></w-tree>
  </div>
</template>


<script>
import Tree from 'packages/tree'

export default {
  components: {
    'w-tree': Tree
  },
  data () {
    return {
      treeData: [
        {
          title: '业务一区',
          expanded: true,
          nocheck: true,
          children: [
            {
              title: '南京',
              expanded: true,
              children: [
                {
                  title: '江宁大学城',
                  value: 'A000001',
                  children: [
                    {
                      title: '中国药科大学',
                      value: 'B000001',
                      checked: true
                    },
                    {
                      title: '河海大学',
                      value: 'B000002'
                    }, 
                    {
                      title: '南京工程学院',
                      value: 'B000003'
                    }
                  ]
                }, 
                {
                  title: '五糖广场',
                  value: 'A000002'
                }, 
                {
                  title: '南航后街',
                  value: 'A000003',
                  checked: true,
                  disabled: true
                }
              ]
            }, 
            {
              title: '无锡',
              children: [
                {
                  title: '南湖家园',
                  value: 'C000001'
                },
                {
                  title: '万象城',
                  value: 'C000002'
                }, 
                {
                  title: '江南大学',
                  value: 'C000003'
                }
              ]
            }
          ]
        },
        {
          title: '业务二区',
          expanded: true,
          nocheck: true,
          children: [
            {
              title: '东阳市',
              expanded: true,
              children: [
                {
                  title: '横店商圈',
                  value: 'D000001'
                }, 
                {
                  title: '江北商圈',
                  value: 'D000002'
                }
              ]
            }, 
            {
              title: '柳州市',
              value: 'D000003',
              children: [
                {
                  title: '鱼峰区',
                  value: 'E000001'
                },
                {
                  title: '柳南区',
                  value: 'E000002'
                }, 
                {
                  title: '城东区',
                  value: 'E000003'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    nodeClick (node) {
      console.log(node.title + ' : ' + node.value)
    }
  }
}
</script>

```

###  Tree 属性介绍 props

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| data          | 数据         | Object    |              |           |
| multiple      | 背景颜色      | String    |              |          |


###  Tree 事件介绍 event

| 名称           | 说明        | 参数              | 
|---------------|-------------|------------------|
| node-click    | 节点点击事件  | node 节点数据     | 