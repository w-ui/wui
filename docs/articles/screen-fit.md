# 移动端适配

w-ui组件库使用了rem作为单位，实现移动端布局自适应。

如果你对rem不是很了解，可以看看下面章节

## w-ui响应式布局方案
```javascript

!function (window) {
    /* 设计图文档宽度 */
    var docWidth = 750;

    var doc = window.document,
        docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

    var recalc = (function refreshRem () {
        var clientWidth = docEl.getBoundingClientRect().width;

        /* 8.55：小于320px不再缩小，11.2：大于420px不再放大 */
        docEl.style.fontSize = Math.max(Math.min(20 * (clientWidth / docWidth), 11.2), 8.55) * 5 + 'px';

        return refreshRem;
    })();

    /* 添加倍屏标识，安卓为1 */
    docEl.setAttribute('data-dpr', window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1);

    if (/iP(hone|od|ad)/.test(window.navigator.userAgent)) {
        /* 添加IOS标识 */
        doc.documentElement.classList.add('ios');
        /* IOS8以上给html添加hairline样式，以便特殊处理 */
        if (parseInt(window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8)
            doc.documentElement.classList.add('hairline');
    }

    if (!doc.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);

}(window);

```

## rem是什么？
rem是相对根元素html的字体大小变化而变化的css单位

例如： 
```html
html{
  font-size: 16px;
}
header{
  height: 10rem;
}
```
header的高度就是 `10*16 = 160px`

根据终端不同屏幕大小，调整根元素html的字体大小，所有以rem为单位的元素的尺寸也会随着变化。

动态调整html字体大小，一般都两种方式，一种是通过js计算去控制，另一种是通过css媒体查询去设置，考虑到android设备的分辨率太多，一般在实际生产中，比较多的是用js控制实现。

## 如何使用rem？
我们实际上表示任何尺寸的宽度都是以px作为单位，既然rem是一个css单位，那在实际编程中，如何将px转化成rem呢？

我们先从设计图说起

假设UE同学设计的设计稿是`750px`

设计稿在iphone7`750*1334`上，假设我么html根节点的字体为`16px`，那设计稿上的100px就等于 `100 / 16 = 6.25rem`

业界常用的rem适配方案

+ 淘宝 flexable.js，
[flexable原理](https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html)

总结一下,flexable核心思想就是用rem实现vm。

淘宝把视觉稿分成100份来看待，`1rem = 屏幕宽度 * dpr / 10`

例如：设计图文档宽度为750px，元素宽度为100px

在ihpone7上，屏幕宽度为375px，dpr（设备像素比）为2，物理像素为750px, html元素的`font-size`为`375*2/10 = 75px`， 元素100px对应rem则为`100/75 ≈ 1.3333333333rem`,所以值是实际值的2倍，还需要设置initial-scale为0.5，缩小一倍。

在ihpone7p上，屏幕宽度为414px，dpr（设备像素比）为3，物理像素为1242px, html元素的`font-size`为`414*3/10 = 124.2px`，元素对应rem则为 `100/124.2 ≈ 0.80515297906rem`。 所以值是实际值的3倍，还需要设置initial-scale为0.33333333，缩小1/3。

可能你已经感受到了这样计算，太过复杂，实际上是可以简化的。实际工程中可以使用PostCSS的插[postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport)，开发的时候直接写像素，编译完之后会将像素转成rem

+ 第二种方案

设置html根结点`font-size`为： `屏幕宽度 * 100 ／ 设计稿宽度`, 这样设计稿上的100px就是1rem。

例如：设计图文档宽度为750px，宽度为100px

在ihpone7上，屏幕宽度为375px，dpr（设备像素比）为2，html元素的`font-size`为`375 * 100/750 = 50px`， 元素对应rem则为 `100/100 ≈ 1rem`，`1rem = 1 * 50 = 50px`, 符合预期，不用设置initial-scale，initial-scale仍然为1.

在ihpone7p上，屏幕宽度为414px，dpr（设备像素比）为3，html元素的`font-size`为`414 * 100/750 = 55.2px`， 元素对应rem则为 `100/100 ≈ 1rem`，`1rem = 1 * 55.2 = 55.2px`, 符合预期，initial-scale仍然为1。

第二种方案在计算上有绝对的优势，不需要工具也能手动计算。

## 1px问题

在dpr为2的设备上，border：1px #000 solid; 最终被渲染成了2px。

rem适配的两种方案对1px都需要特殊处理，
[再谈Retina下1px的解决方案](https://www.w3cplus.com/css/fix-1px-for-retina.html)

文中提到，1px常用的解决方案：`background-image` 和 `transform`，w-ui采用的是transform

transform 方案
```css
  .hairlines li{ 
    position: relative; 
    border:none; 
  } 
  .hairlines li:after{ 
    content: ''; 
    position: absolute; 
    left: 0; 
    background: #000; 
    width: 100%; 
    height: 1px; 
    transform: scaleY(0.5); 
    transform-origin: 0 0; 
  }
```

