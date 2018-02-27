
# Titlebar 标题栏


### 概述

+ 标题栏可自定义返回按钮，和返回事件
+ 标题栏支持右部显示两个icon和自定义点击事件
+ 标题栏显示的标题可随意定制
+ 标题栏支持自定义背景颜色
+ 可设置home地址，没有可回退的历史记录时，跳转到home地址

### demo

```html
<template>

  <div>
    <w-titlebar>
      WUI
      <w-icon slot="icon2" size="16px" color="#ccc" name="heart" @click.native="doLike"></w-icon>
      <w-icon slot="icon1" size="16px" color="#ccc" name="share" @click.native="doShare"></w-icon>
    </w-titlebar>


    <w-titlebar bgColor="dodgerblue">
      <p slot="back"></p>
      <p style="color: #444">
        <w-icon slot="icon2" size="16px" color="#ccc" name="heart"></w-icon>WUI
      </p>
      <w-icon slot="icon1" size="16px" color="#ccc" name="share" @click.native="doShare"></w-icon>
    </w-titlebar>


    <w-titlebar home="/#/demo/Index" bgColor="transparent">
      <p slot="back">
        <w-icon slot="icon2" size="22px" color="#666" name="arrow-circle-left" @click.native="doBack"></w-icon>
      </p>
      <p style="color: #444">WUI</p>
      <w-icon slot="icon2" size="16px" color="#666" name="heart" @click.native="doLike"></w-icon>
      <w-icon slot="icon1" size="16px" color="#666" name="share" @click.native="doShare"></w-icon>
    </w-titlebar>

  </div>
    
</template>

<script>
import { Titlebar } from "packages/titlebar";
import { Icon } from "packages/icon";
import { Alert } from "packages/dialog";

export default {
  name: "wui-title-bar-demo",
  components: {
    "w-titlebar": Ttitlebar,
    "w-icon": Icon
  },
  methods: {
    doLike() {
      Alert("Like");
    },
    doShare() {
      Alert("Share");
    },
    doBack() {
      Alert("Back");
    }
  }
};
</script>

```

###  Titlebar 属性介绍 props

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| bgColor       | 标题栏背景颜色 | String    |  transparent/颜色值   |  #444444     |
| home       | 设置home地址，没有可回退的历史记录时，跳转到home地址 | String    |    |    |



###  Titlebar 插槽介绍 slot

| 名称      |  描述   | 说明        | 
|----------|---------|-------------|
| back     | 返回区   | 可自定义返回图标和绑定事件           | 
| icon2    | 操作区图标2【左】  |            | 
| icon1    | 操作区图标1【右】  |            | 
| default  | 标题栏中间区域  | 可自定义任意内容    | 