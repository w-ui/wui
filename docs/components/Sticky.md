# Sticky 吸顶

`Sticky`组件对不支持css sticky属性的浏览器做了兼容，完全模拟原生Sticky效果

### 使用
```html
<w-sticky>
  <div>sticky everything</div>
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

###  Sticky 属性介绍 props

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| name          | 组件名       | String    |              |           |
| top           | 定位时距离顶部的距离 | [Number, String]   |      |  0px |


### Tips
> sticky属性支持检测

```javascript
function checkSupport () {
    let el = document.createElement('a')
    let mStyle = el.style
    mStyle.cssText = 'position:sticky; position:-webkit-sticky;'
    return mStyle.position.indexOf('sticky') !== -1
}
```