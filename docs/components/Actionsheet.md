#  Actionsheet 上拉菜单


### 概述

移动端常见操作表，从屏幕下方移入。

```html
<template>
    <div>
        <a @click="showActionSheet">拍照</a>
    
        <w-actionsheet :items="myItems1" v-model="show1" cancel="取消">
        </w-actionsheet>
    </div>
</template>

<script>
    export default {
    data() {
        return {
            show1: false,
            myItems1: [
                {
                    label: '拍照',
                    method: () => {
                        this.$toast('咔擦，此人太帅！');
                    }
                },
                {
                    label: '从相册中偷取',
                    method: () => {
                        this.$toast('看到了不该看到的东西！');
                    }
                }
            ]
        }
    }
    }
</script>

```

###  AccordionItem 属性介绍 Attributes

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| title         | 标题         | String    |              |    true   |
| contentHeight | 内容高度      | Number    |              |    3000   |