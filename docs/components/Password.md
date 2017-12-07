#  Password 密码输入框

### 概述

密码输入框组件

```html
<w-password v-model="password" @finish="onFinish"></w-password>

```


### Demo

```html
<template>
  <div>
      <w-password v-model="password" @finish="onFinish"></w-password>
      <br/><br/>
      密码为：{{password}}
  </div>
</template>

<script>
    import Password from 'packages/password'
    import { Alert } from 'packages/dialog'

    export default {
      components: {
        'w-password': Password
      },
      data(){
        return {
          password: '123'
        }
      },
      methods: {
        onFinish(val){
          Alert({content: val});
        }
      }
    }
</script>

```

###  Password 属性介绍 Attributes

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| 无        |         |      |     |      |


###  Password 事件介绍 Event

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| finish        |  输入完成事件       |  Function    |    |      |


