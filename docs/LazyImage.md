 ## 图片懒加载

  ```
  说明：
  传入参数只有src，图片的宽、高都是100%，需要设置大小在外面包div

  特性：
  - 从全局角度分析图片的加载优先级
  - 优先保证可见屏幕区域内的图片
  - 可见区域图片都加载完成后，缓慢加载不可见图片
 ```


### 基本用法
```html

  <template>
    <lazy-image src="https://img.waimai.baidu.com/pb/d9cd8c9ed62c502ea5fb29009d725bf6ec"></lazy-image>
  </template>

  <script>
  import LazyImage from 'packages/lazy-image'

  export default {
    components: {
      LazyImage
    }
  }

```
