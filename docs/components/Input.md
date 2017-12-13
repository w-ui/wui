# Input 输入框 


### 用法


#### 输入框：

```html
  <w-input></w-input>
```

#### 输入框，必填

```html
  <w-input required></w-input>
```

#### 输入框，数字

```html
  <w-input type="number"></w-input>
```

#### 输入框，密码

```html
  <w-input type="password"></w-input>
```

#### 输入框，正则验证

```html
  <w-input regex="^[a-z0-9-]*$"></w-input>
```

#### 验证码

```html
  <w-input type="varycode" @post="doPost" wait></w-input>
```


### Demo

```html
<template>
  <div>
    <w-input placeholder="用户名" required>
      <w-icon size="16px" name="user" slot="icon"></w-icon>
    </w-input>
    <w-input type="password" placeholder="密码">
      <w-icon size="16px" name="key" slot="icon"></w-icon>
    </w-input>
    <w-input v-model="email" readonly placeholder="readonly">
      <w-icon size="16px" name="email" slot="icon"></w-icon>
    </w-input>
    <w-input type="number" v-model="num"  :min='10' :max="100" placeholder="数字"></w-input>
    <w-input type="input" v-model="reg" regex="^[a-z0-9-]*$" placeholder="正则"></w-input>
    <w-input type="varycode" v-model="varycode" placeholder="手机号">
      <w-icon size="16px" name="mobile" slot="icon"></w-icon>
    </w-input>
  </div>
</template>
  
<script>
import Input from 'packages/input'
import Icon from 'packages/icon'

export default {
  components: {
    'w-input': Input,
    'w-icon': Icon
  },
  data() {
    return {
      switch1: true,
      name: '',
      password: '',
      num: 10,
      tel: '',
      email: 'robin@baidu.com',
      varycode: '',
      reg: ''
    }
  }
}
</script>

```


### Input 属性介绍 props

|参数         | 说明      | 类型       | 可选值      | 默认值    |
|------------|-----------|-----------|------------|----------|
| type       | 类型       | String    | input, password, number, varycode |  input  |
| regex      | 正则验证    | String    |            |          |
| min        | 数字类型最小值  | Number    |            |          |
| max        | 数字类型最大值  | Number    |            |          |
| wait        | 验证码等待时间  | Number    |            |    60      |
| placeholder | placeholder  | String    |            |          |
| readonly    | 是否只读  | Boolean    |            |   false       |
| disabled    | 是否禁用  | Boolean    |            |   false       |
| required    | 是否必填  | Boolean    |            |   false       |
| showClearIcon      | 是否显示清除icon  | Boolean    |            |   true       |
| showErrorIcon      | 是否显示错误icon  | Boolean    |            |   true       |
| showSuccessIcon    | 是否显示成功icon  | Boolean    |            |   true       |
| showRequiredIcon   | 是否显示必填icon  | Boolean    |            |   true       |


### Input 事件介绍 events

|名称         | 说明          | 参数         |
|------------|---------------|-------------|
| post       | 验证码发送事件  | phone 手机号   |


