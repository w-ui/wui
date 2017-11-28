# Cell 

### 项目源码地址


#### 基础用法：
```html
  <w-cell title="标题文字"></w-cell>
  <w-cell title="标题文字" value="说明文字"></w-cell>
```

#### 链接：

```html
  <w-cell title="标题文字" to="//github.com" is-link value="带链接">
  </w-cell>
```

#### 图标：

```html
  <w-cell title="标题文字" icon="more" value="带 icon">
  </w-cell>
```

#### 自定义图标：

```html
  <w-cell title="标题文字" icon="more" value="带 icon">
    <img slot="icon" src="/assets/wui.png" width="24" height="24">
  </w-cell>
```

#### 自定义内容：

```html
  <w-cell title="标题文字" is-link>
    <span style="color: green">这里是元素</span>
  </w-cell>
```

#### 描述：

```html
  <w-cell title="标题文字" label="描述信息" is-link>
  </w-cell>
```

### 属性介绍 Attributes

|参数         | 说明      | 类型       | 可选值      | 默认值    |
|------------|-----------|-----------|------------|----------|
| type       | 类型       | String    | text, input, password, number, email, mobile    |  text |
| icon       | 图标       | String    |            |          |
| title      | 标题       | String    |            |          |
| value      | 显示的文字  | String    |            |          |
| link       | 链接       | String    |            |   false  |
| label      | 描述       | String    |            |          |


### Slot介绍

| 参数       | 说明     | 类型      | 可选值       | 默认值      |
|-----------|---------|-----------|-------------|------------|
| icon      | 图标     | String    |             |            |
| title     | 标题     | String    |             |            |


