  # Carousel 轮播组件 

  ### 基本用法

  把想要渲染的dom直接放入carousel标签内即可
  通过responsive设置宽高比例
  auto属性设置是否自动轮播
  indicators设置是否加入屏点, 可以自己设置class覆盖默认样式

  ```html
    <w-carousel :auto="3000" :responsive="40" :indicators="true">
        <div :style="{backgroundColor: 'red', width: '300px', height: '120px'}" >
        </div>
        <div :style="{backgroundColor: 'yellow', width: '300px', height: '120px'}">
        </div>
        <div :style="{backgroundColor: 'grey', width: '300px', height: '120px'}" >
        </div>
        <div :style="{backgroundColor: 'blue', width: '300px', height: '120px'}">
        </div>
    </w-carousel>
  ```
  
  ### 属性介绍 Attributes

  | 参数      | 说明    | 类型      | 可选值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | loop     | 是否循环播放   | Boolean  |            |    true     |
| auto     | 是否自动播放，0不自动播放，其他值则自动播放，值为其自动播放的interval   | Number    |    |     3000    |
  | indicators     | 是否添加屏点，不带任何样式，样式可参考demo写   | Boolean    |    |     false    |
  | responsive     | 是否开启响应式高度，若为0则不开启，其他正整数表示 高度是宽度的百分之多少   | Number    |    |     40    |
  | flickThreshold     | 轻弹的最小速度   | Number    |    |     0.6    |
  | delta     | 滚动时触发滚动到下一张的最小值   | Number    |    |     100    |
  | onSlidEnd     | 轮播切换完成时的回调   | Function    |    |     —   |
  | preventDefault     | 取消touchmove事件的默认动作   | Boolean    |    |     false    |
