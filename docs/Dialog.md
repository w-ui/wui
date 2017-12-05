#  Dialog 提示框


### 概述

提供confim、alert、notify, toast三个组件

```javascript

import { Alert } from 'packages/dialog';
Alert('您确认要删除吗？')

```


```javascript

import { Confirm } from 'packages/dialog';
Confirm('您确认要删除吗？', {
  title: '确认',
  callback(val){
    alert(val);
  }
})
```

```javascript

import { Notify } from 'packages/dialog';
Notify('您确认要删除吗？')
```

```javascript

import { Toast } from 'packages/dialog';
Toast('您确认要删除吗？')
```

### Demo

```html
<template>
  <div>
    <w-button @click.native="doConfirm">确认</w-button>
    <w-button @click.native="doAlert">确定</w-button>
    <w-button @click.native="doNotify">通知</w-button>
    <w-button @click.native="doToast">toast</w-button>
  </div>
</template>

<script>
    import { Confirm, Alert, Notify, Toast } from 'packages/dialog';
    import Button from 'packages/button';

    export default {
      components: {
        'w-button': Button
      },
      methods: {
        doConfirm(){
          Confirm('您确认要删除吗？', {
            title: '确认',
            callback(val){
              alert(val);
            }
          })
        },
        doAlert(){
          Alert('您确认要删除吗？')
        },
        doNotify(){
          Notify('您确认要删除吗？')
        },
        doToast(){
          Toast('您确认要删除吗？')
        }
      }
    }
</script>

```

###  Alert 属性介绍 Attributes

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| content    | 内容         | String   |            |      |
| option.callback    | 回调         | Function   |            |      |


###  Confirm 属性介绍 Attributes

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| option.title      | 标题         | String   |            |      |
| content    | 内容         | String   |            |      |
| option.callback    | 回调         | Function   |            |      |

###  Notify 属性介绍 Attributes

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| content    | 内容         | String   |            |      |
| option.timeout    | 显示时常         | Number   |            |   5000   |
| option.callback    | 回调         | Function   |            |      |


###  Toast 属性介绍 Attributes

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| content    | 内容         | String   |            |      |
| option.icon       | icon         | String   |            |      |
| option.timeout    | 显示时常         | Number   |            |   5000   |
| option.callback    | 回调         | Function   |            |      |