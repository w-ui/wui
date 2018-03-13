<template>
    <section class="page-log">
         <div class="title">更新日志</div>
        <w-timeline>
            <w-timeline-item>
          <p class="time">2018-03-01</p>
          <p class="item">修复checkbox的props value的类型</p>
          <p class="item">修复tab组件change事件和文档</p>
          <p class="item" style="color: dodgerblue">发布1.0.8</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2018-02-28</p>
          <p class="item">官网更新</p>
          <p class="item">修复checkbox的change事件</p>
          <p class="item">修改所有组件导出</p>
          <p class="item" style="color: dodgerblue">发布1.0.7</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2018-01-15</p>
          <p class="item">video组件优化于bug修复</p>
          <p class="item">新增添加数字加减组件</p>
          <p class="item">新增countdown组件及文档</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2018-01-12</p>
          <p class="item">video组件优化于bug修复</p>
          <p class="item">新增添加数字加减组件</p>
          <p class="item">新增countdown组件及文档</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2018-01-12</p>
          <p class="item">新增table组件及文档</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2018-01-09</p>
          <p class="item">添加InfiniteScroll 上拉下拉提示功能</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2018-01-08</p>
          <p class="item">整体组件导出修改，兼容babel-plugin-import-fix</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2018-01-07</p>
          <p class="item">新增noticebar组件及文档</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2018-01-05</p>
          <p class="item">scrolltab组件优化对头部分类sticky的支持</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2018-01-04</p>
          <p class="item">InfiniteScroll，scrolltab鼠标滑动方向锁定与优化</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2018-01-02</p>
          <p class="item">scrolltab从鼠标滚动事件改为touchmove+transform</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2018-01-01</p>
          <p class="item">InfiniteScroll性能优化</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-12-28 18:27:47</p>
          <p class="item">新增tree组件及文档</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-12-27 18:27:47</p>
          <p class="item">scrollTree，浏览器兼容性bug修复</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-12-26 18:27:47</p>
          <p class="item">Sticky组件bug修复，父组件有transition时，position：fixed无效</p>
          <p class="item">组合示例3 bug修复</p>
          <p class="item">InfiniteScroll组件bug修复, checkScroll不严谨</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-12-25 18:27:47</p>
          <p class="item">Time-line 支持自定义图标 </p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-12-22 18:27:47</p>
          <p class="item">ScrollTree组件bug修复 </p>
        </w-timeline-item>
        
        <w-timeline-item>
          <p class="time">2017-12-21 18:27:47</p>
          <p class="item">markdown文档样式优化 </p>
          <p class="item">代码块高亮添加 </p>
          <p class="item">Sticky组件bug修复  </p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-12-19 18:47:40</p>
          <p class="item">组合示例3 bug修复 </p>
          <p class="item">换了新的全面屏的手机界面，开发更带劲了 </p>
          <p class="item">所有demo界面优化，更好看了  </p>
          <p class="item">Qrcode组件优化，精简代码，修复模糊的问题，添加带logo的二维码功能  </p>
          <p class="item">优化文档打包编译，logo图片不加hash  </p>
          <p class="item">滑动一系列组件边缘阻尼效果添加  </p>
          <p class="item">错误信息显示  </p>
          <p class="item">打包bug修复，之前包含了bundle中包含了vue，已经去除  </p>
          <p class="item">webpack-bundle-analyzer添加，可以通过npm run analyse 查看bundle文件  </p>
          <p class="item" style="color: dodgerblue">发布1.0.2  </p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-12-19 18:47:40</p>
          <p class="item">新增range组件及文档 </p>
          <p class="item">scroll-tab组件优化及bug修复 </p>
          <p class="item">InfiniteScroll组件优化及bug修复  </p>
          <p class="item">组合示例3 bug修复  </p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-12-18 18:47:40</p>
          <p class="item">新增scroll-tab组件及文档 </p>
          <p class="item">button-group组件优化 </p>
          <p class="item">新增组件组合示例3  </p>
          <p class="item">新增calendar组件及文档  </p>
          <p class="item">Button组件样式提取  </p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-12-15 18:47:40</p>
          <p class="item">修复ScrollCard子元素少时，滑动问题 </p>
          <p class="item">InfiniteScroll 内部滚动bug修复 </p>
          <p class="item">babel-plugin-import-fix插件修改，支持w-ui  </p>
          <p class="item">新增组件组合示例3  </p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-12-14 19:54:13</p>
          <p class="item">新增ScrollTree组件及文档 </p>
          <p class="item">无限列表 </p>
          <p class="item">上拉刷新，下拉加载</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-12-13 22:25:33</p>
          <p class="item">增加input组件及文档 </p>
          <p class="item">指南页面文档更新 </p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-12-12 16:19:56</p>
          <p class="item">增加tittlebar及文档 </p>
          <p class="item">增加layout及文档 </p>
          <p class="item">demo首页优化 </p>
          <p class="item">icon组件优化 </p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-12-11 14:38:09</p>
          <p class="item">InfiniteScroll组件支持垂直滚动 </p>
          <p class="item">文档修改 </p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-12-08 18:20:36</p>
          <p class="item">增加滚动组件组合实例和文档 </p>
          <p class="item">scrollcard组件支持垂直滚动 </p>
          <p class="item">scrollcard组件bug修复，getBoundingClientRect使用错误 </p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-12-07 18:32:40</p>
          <p class="item">新增InfiniteScroll组件及文档 </p>
          <p class="item">scrollcard组件优化 </p>
          <p class="item">官方文档组件页分类优化 </p>
          <p class="item">完善5分钟上手文档 </p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-12-05 17:53:42</p>
          <p class="item">scrollcard动画效果优化 </p>
          <p class="item" style="color: dodgerblue">发布1.0.1</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-12-01 16:30:24</p>
          <p class="item">新增keyboard安全键盘组件及文档 </p>
          <p class="item">新增scrollcard组件及文档</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-11-30 16:52:04</p>
          <p class="item">新增rate组件 </p>
          <p class="item">修复Qrcode二维码组件bug</p>
          <p class="item">新增Popup组件及文档</p>
          <p class="item">官网文档二级路由按需加载，提升页面加载速度</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-11-29 15:22:21</p>
          <p class="item">cell表单组件添加input，password，number，email等类型的支持 </p>
          <p class="item">新增video组件及文档</p>
          <p class="item">新增多级联动select组件及文档</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-11-28 18:33:50</p>
          <p class="item">新增Backtop组件及文档</p>
          <p class="item">新增Badge组件及文档</p>
          <p class="item">新增Icon组件及文档</p>
          <p class="item">新增ImageClip组件及文档</p>
          <p class="item">部分文档bug修复和修复</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-11-27 18:46:08</p>
          <p class="item">新增Textarea组件及文档</p>
          <p class="item">新增Menubar组件及文档</p>
          <p class="item">新增About页面</p>
          <p class="item">整理构建配置</p>
        </w-timeline-item>
    </w-timeline>
</section>

</template>

<script>
import { Timeline } from 'packages/timeline'
import { TimelineItem } from 'packages/timeline-item'

export default {
  name: 'w-log',
  components: {
    'w-timeline': Timeline,
    'w-timeline-item': TimelineItem
  }
}
</script>

<<style lang="less">
 .page-log{
     padding: 20px 10px;

     .title{
         padding-bottom: 10px;
     }
 }
</style>
