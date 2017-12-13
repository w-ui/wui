# Cell 


### 用法

#### 基础用法

```html
  <w-cell title="标题文字"></w-cell>
  <w-cell title="标题文字" value="说明文字"></w-cell>
```

#### 链接：

```html
  <w-cell title="标题文字" link="//github.com" value="链接">
  </w-cell>
```

#### 图标：

```html
  <w-cell title="标题文字" icon="more" value="icon">
    <w-icon name="user" slot="icon" size="0.24rem" color="dodgerblue"></w-icon>
  </w-cell>
```

#### 自定义内容：

```html
  <w-cell title="标题文字">
    <span style="color: green">这里是元素</span>
  </w-cell>
```

#### 描述：

```html
  <w-cell title="标题文字" label="描述信息">
  </w-cell>
```

#### 输入框：

```html
  <w-cell title="标题文字" type="input">
  </w-cell>
```

#### 输入框，必填

```html
  <w-cell title="用户名" type="input" required>
  </w-cell>
```

#### 输入框，数字

```html
  <w-cell title="数字" type="number">
  </w-cell>
```

#### 输入框，密码

```html
  <w-cell title="数字" type="password">
  </w-cell>
```

#### 输入框，正则验证

```html
  <w-cell title="数字" type="input" regex="^[a-z0-9-]*$">
  </w-cell>
```

#### 自定义

```html
  <w-cell>
    <w-icon slot="icon" name="user"></w-icon>
    <div slot="title">自定义样式title</div>
    <div>右侧内容自定义</div>
  </w-cell>
```


### Demo

```html
<template>
  <div>
    <w-cell title="标题文字" value="说明文字"></w-cell>
    <w-cell title="标题文字" link="//github.com" value="链接"></w-cell>
    <w-cell title="标题文字" label="描述信息" value="描述"></w-cell>
    <w-cell title="标题文字" value="icon">
      <w-icon name="user" slot="icon" size="0.24rem" color="dodgerblue"></w-icon>
    </w-cell>
    <w-cell title="标题文字">
      <span style="color: red">自定义内容</span>
    </w-cell>
    <w-cell title="开关">
      <w-switch v-model="switch1"></w-switch>
    </w-cell>
    <w-cell title="用户名：" type="input" v-model="name" placeholder="用户名" required></w-cell>
    <w-cell title="密码：" type="password" v-model="password"  placeholder="密码"></w-cell>
    <w-cell title="验证码：" type="input" v-model="varycode"  readonly placeholder="readonly"></w-cell>
    <w-cell title="邮箱：" type="input" v-model="email"  placeholder="邮箱"></w-cell>
    <w-cell title="电话：" type="input" v-model="tel" placeholder="电话"></w-cell>
    <w-cell title="数字：" type="number" v-model="num"  :min='10' :max="100" placeholder="数字"></w-cell>
    <w-cell title="正则：" type="input" v-model="reg" regex="^[a-z0-9-]*$" placeholder="正则"></w-cell>
  </div>
</template>
  
<script>
import Cell from 'packages/cell'
import Icon from 'packages/icon'
import Switch from 'packages/switch'

export default {
  components: {
    'w-cell': Cell,
    'w-icon': Icon,
    'w-switch': Switch
  },
  data() {
    return {
      switch1: true,
      name: '',
      password: '',
      num: 10,
      tel: '',
      email: '',
      varycode: '',
      reg: ''
    }
  }
}
</script>
```


### Cell 属性介绍 props

|参数         | 说明      | 类型       | 可选值      | 默认值    |
|------------|-----------|-----------|------------|----------|
| type       | 类型       | String    | text, input, password, number |  text  |
| title      | 标题       | String    |            |          |
| link       | 链接       | String    |            |   false  |
| label      | 描述       | String    |            |          |
| regex      | 正则验证    | String    |            |          |
| min        | 数字类型最小值  | Number    |            |          |
| max        | 数字类型最大值  | Number    |            |          |
| placeholder | placeholder  | String    |            |          |
| readonly    | 是否只读  | Boolean    |            |   false       |
| disabled    | 是否禁用  | Boolean    |            |   false       |
| required    | 是否必填  | Boolean    |            |   false       |
| showClearIcon      | 是否显示清除icon  | Boolean    |            |   true       |
| showErrorIcon      | 是否显示错误icon  | Boolean    |            |   true       |
| showSuccessIcon    | 是否显示成功icon  | Boolean    |            |   true       |
| showRequiredIcon   | 是否显示必填icon  | Boolean    |            |   true       |


### Cell Slot 介绍

| 名称       | 说明     | 
|-----------|---------|
| icon      | 图标     |
| title     | 标题     |
| default   | 默认     |

