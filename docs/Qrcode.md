#  Qrcode 二维码组件

### 概述

生成二维码

```html
<w-qrcode url="https://github.com/w-ui" size="128"></w-qrcode>

```


### Demo

```html
<template>
  <div>
    <h3>url: https://github.com/w-ui</h3>
    <w-qrcode url="https://github.com/w-ui" :size="128"></w-qrcode>
  </div>
</template>

<script>
    import Qrcode from 'packages/qrcode'

    export default {
      components: {
        'w-qrcode': Qrcode
      }
    }
</script>

```

###  Qrcode 属性介绍 Attributes

| 参数        | 说明        | 类型        | 可选值      |   默认值   |
|------------|-------------|------------|------------|-----------|
| type       | 类型         |  String    |  default／mix |  default    |
| url        | 地址         |  String    |            |      |
| image      | 融合图片地址  | String     |            |      |
| filter     | 图片处理器    | String／Function  |  threshold    |   threshold   |
| size       | 二维码尺寸    | String     |      |  128    |