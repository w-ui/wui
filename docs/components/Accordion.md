# Accordion 折叠面板

### 基本用法

```html
  <template>
  <div class="demo-accordion">
    <Accordion>
      <AccordionItem title="行业资讯">
        <p>大佬言论 | 孙枢谈美团打车：补贴畸高对整个出行业造成巨大创伤</p>
        <p>CEO发言如何避免像李彦宏一样说错话？</p>
        <p>苹果、华为、小米发布会三连撞！撞出了国产手机缺乏创新的窘境</p>
        <p>NEO创始人达鸿飞：中心化交易所不是终极形态</p>
        <p>拼多多iPhone单日下载量已连续9天超越淘宝</p>
        <p>凯辉智慧能源基金正式启动，规模15亿人民币，主攻新能源和清洁技术</p>
        <p>为什么说 Web 3.0 很重要？你需要了解哪些基础知识？</p>
      </AccordionItem>
      <AccordionItem title="投资">
        <p>今日头条有意接盘阿里系放弃的A站，而背靠腾讯的B站今天要上市了</p>
        <p>华为前高级副总裁：解码华为《三块广告牌》</p>
        <p>长租项目Lucia获公信宝领投千万元融资，想用区块链确保真房源</p>
        <p>获喜马拉雅FM数千万战略投资，「米谟科技」推出游戏化音乐学习App“迷鹿音乐”</p>
      </AccordionItem>
      <AccordionItem>
        <div slot="title">前沿<Icon name="home"></Icon></div>
        <p>娱乐跨界科技最新趋势都在这里了：区域链、虚拟现实、科幻电影和AI</p>
        <p>YC路演项目全集！区块链降临、人工智能隐退</p>
        <p>谷歌入局区块链，小扎、比尔盖茨都慌了！</p>
        <p>比特币真的能成为主要流通货币吗？委内瑞拉为我们做了示范</p>
        <p>如何借助新的信息系统提升零售效率？</p>
        <p>生鲜电商市场大局已定，线下市场成“兵家必争之地”</p>
      </AccordionItem>
    </Accordion>
  </div>
</template>
```

###  Accordion 属性介绍 props

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| accordion     | 是否多个能同时展开     | Boolean    |              |    false   |


### Accordion Slot 介绍

| 名称       | 说明     | 
|-----------|---------|
| title      | 标题栏slot     |


###  AccordionItem 属性介绍 props

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| title         | 标题         | String    |              |    true   |
| contentHeight | 内容高度      | interval  |   Number     |    3000   |