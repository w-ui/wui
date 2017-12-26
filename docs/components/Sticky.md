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

### Sticky 模拟实现
> 在`chrome`等一些浏览器下面，如果父元素有`transform`属性，子元素的`position:fixed`就会失效，为了更好的兼容性，Sticky组件在模拟实现的时候，会在document.body在添加一个元素，然后把组件里slots添加到这个元素中，从而正常的使用`position:fixed`，当不需要吸顶时，将slots又添加到组件中。这种实现的兼容性较好。
