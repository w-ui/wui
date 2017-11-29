# Cell 


### 用法：

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



### 属性介绍 Attributes

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


### Slot 介绍

| 名称       | 说明     | 
|-----------|---------|
| icon      | 图标     |
| title     | 标题     |
| default   | 默认     |

