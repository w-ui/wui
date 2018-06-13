#  Actionsheet 上拉菜单


### 概述

移动端常见操作表，从屏幕下方移入。

```html
<template>
<div>
    <div class="paragraph">
        <Button size="large" @click.native="showActionSheet">拍照</Button>
        <Actionsheet :items="myItems1" v-model="show1" cancel="取消">
        </Actionsheet>
    </div>
</div>
</template>

<script>
import { Actionsheet, Button,  Toast} from 'w-ui'

export default {
  components: {
    Actionsheet,
    Button
  },
  data() {
    return {
      show1: false,
      myItems1: [
        {
          label: '拍照',
          method: () => {
            Toast('拍照')
          }
        },
        {
          label: '从相册中选取',
          method: () => {
            Toast('从相册中选取')
          }
        }
      ]
    }
  },
  methods: {
    showActionSheet() {
      this.show1 = !this.show1
    }
  }
}
</script>

```

###  AccordionItem 属性介绍 props

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| title         | 标题         | String    |              |    true   |
| contentHeight | 内容高度      | Number    |              |    3000   |