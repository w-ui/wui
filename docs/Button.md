#  Button 按钮

### 概述

常用按钮样式组件，提供2种尺寸，5种状态颜色和2种形状，支持自定义颜色。

```html
<w-button type="primary" @click.native="doClick">主要</w-button>
<w-button size="large" type="primary"></w-button>
```

### Demo

```html
<template>
    <div>
      <p>
        <h3>按钮</h3>
        <w-button type="primary">主要</w-button>
        <w-button type="danger">危险</w-button>
        <w-button type="warning">警告</w-button>
        <w-button type="hollow">空</w-button>
      </p>
      <p>
        <h3>尺寸</h3>
        <w-button size="large" type="primary"></w-button>
        <w-button size="large" type="danger"></w-button>
        <w-button size="large" type="warning"></w-button>
        <w-button size="large" type="disabled" disabled></w-button>
      </p>
      <p>
        <h3>自定义颜色</h3>
        <w-button size="large" bgcolor="#000" color="#FFF"></w-button>
      </p>
      <p>
        <h3>按钮组</h3>
          <w-button-group>
            <w-button>左</w-button>
            <w-button>居中</w-button>
            <w-button>右</w-button>
          </w-button-group>
      </p>
    </div>

</template>

<script>
    export default {

    }
</script>

```

###  Audio 属性介绍 Attributes

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| type          | 按钮类型         | String   | primary, danger, warning, hollow, disabled           |  primary  |
| size          | 按钮大小	       | String   | small, large  |    small   |
| bgcolor       | 按钮背景颜色	    | String    |            |           |
| color         | 按钮字体颜色	    | String   |            |  true |
| disabled      | 是否禁用	       | Boolean    |            |  false  |
| shape         | 形状（分为直角square和大圆角circle）      | String  | square, circle | square |