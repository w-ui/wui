## 2. scroll 滚动组件
* 采用quadratic 、circular 、back等缓动算法，基于translate & cubic-bezier曲线实现的一款移动端轻量级滚动插件。

### 项目源码地址

### 基本用法
```html
<template>
    <div class="example-wrap">
        <scroll>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </scroll>
    </div>
</template>

<script>
    // * 引入
    import Scroll from 'packages/scroll/src/Scroll'
    export default {
        components: {
            Scroll
        }
    }
```

### 使用示例

### 属性介绍 Attributes:
name            |           type |  default   |                        description
--------------- | :-------------: | :--------: | :--------------------------------------------------------:
scrollDirection |         string | horizontal |                 滚动方向(horizontal/vertical)
refreshStatus   |Boolean, Number |            |                 判断是否需要重新更新组件
scrollToEle     | HTMLDivElement | undefined  |             滚动列表特定元素的domevent(activeEvent： '')
activeTargetPos |         String |   center   | 所传入的滚动DOM的位置(水平滚动center/left/right, 垂直滚动center/top/bottom)
moveCallback    |       Function |   i => 0   |                         滚动过程中的回调函数
moveEndback     |       Function |   i => 0   |                         滚动过程中的回调函数
afterRelease    |       Function |   i => 0   |                    列表尾部滚动完成释放touch的回调函数
beforeRelease   |       Function |   i => 0   |                    列表头部滚动完成释放touch的回调函数
beyondFn        |       Function |   i => 0   |                         滚动时超出更多时回调
cancelBeyondFn  |       Function |   i => 0   |                        滚动时取消超出更多时回调
moreShadow      |        Boolean |   false    |                  滚动至尾部是否展示阴影效果（仅对水平滑动有效）
