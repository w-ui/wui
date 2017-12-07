# Sticky 吸顶

### 概述

sticky组件

```html
<w-sticky>
  <div style="height: 50px; background-color: dodgerblue">sticky</div>
</w-sticky>
```

### Demo
```html
<template>
    <div>
        <div style="height: 200px; background-color: lightgreen"></div>
        <w-sticky>
            <div style="height: 50px; background-color: dodgerblue">sticky</div>
        </w-sticky>
        <div style="height: 800px; background-color: lightgreen"></div>
    </div>
</template>

<script>
    import Sticky from 'packages/sticky'
    export default {
        components: {
            'w-sticky': Sticky
        }
    }
</script>

```

### 使用示例
```
    <sticky>
        <div class="stickyed">sticky</div>
    </sticky>
    <script>
        import Sticky from 'vue-sticky-position'
        export default {
            components: {
                Sticky
            }
        }
    </script>
```

### 属性介绍 Attributes:
name            |           type     |  default   |                        description
--------------- | -------------:     | :--------: | :--------------------------------------------------------:
top             |   [Number, String] | 0     |                 定位时距离顶部的距离，默认保持跟firefox的实现一致
z-ndex          |         Number     |  10        |                 css中的z-index值
