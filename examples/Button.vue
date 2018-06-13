<template>
  <div>
    <div class="paragraph">
      <h3>按钮</h3>
      <Button type="primary">主要</Button>
      <Button type="danger">危险</Button>
      <Button type="warning">警告</Button>
      <Button type="light">空</Button>
      <Button type="disabled" disabled>禁用</Button>
    </div>
    <div class="paragraph">
      <h3>尺寸</h3>
      <Button size="large" type="primary">主要</Button>
      <Button size="large" type="danger">危险</Button>
      <Button size="large" type="warning">警告</Button>
      <Button size="large" type="light">空</Button>
      <Button size="large" type="disabled" disabled>禁用</Button>
    </div>
    <div class="paragraph">
      <h3>自定义颜色</h3>
      <Button size="large" bgcolor="#000" color="#FFF">自定义</Button>
    </div>
    <div class="paragraph">
      <h3>形状</h3>
      <Button size="large" shape="circle" type="primary">自定义</Button>
    </div>
    <div class="paragraph">
      <h3>按钮组 primary</h3>
        <ButtonGroup type="primary" :border="true"  :items="btnGroup1" v-model="btnGroup1Value">
        </ButtonGroup>
    </div>

    <div class="paragraph">
      <h3>按钮组 danger large</h3>
        <ButtonGroup type="danger" size="large" :items="btnGroup2" v-model="btnGroup2Value">
        </ButtonGroup>
    </div>

    <div class="paragraph">
      <h3>按钮组 circle</h3>
        <ButtonGroup type="danger" shape="circle" :items="btnGroup3" v-model="btnGroup3Value">
        </ButtonGroup>
    </div>

    <div class="paragraph">
      <h3>按钮组 circle</h3>
        <ButtonGroup type="warning" :border="true" :items="btnGroup3" v-model="btnGroup3Value">
        </ButtonGroup>
    </div>

    <div class="paragraph">
      <h3>按钮组 circle</h3>
        <ButtonGroup type="light" shape="circle" :items="btnGroup3" v-model="btnGroup3Value">
        </ButtonGroup>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'packages/button'
import { ButtonGroup } from 'packages/button-group'

export default {
  components: {
    Button,
    ButtonGroup
  },
  data() {
    return {
      btnGroup1: [
        {
          name: '商品',
          value: 'product'
        },
        {
          name: '详情',
          value: 'detail'
        },
        {
          name: '评价',
          value: 'rate'
        }
      ],
      btnGroup1Value: 'product',
      btnGroup2: [
        {
          name: '左',
          value: 'left'
        },
        {
          name: '中',
          value: 'center'
        },
        {
          name: '右',
          value: 'right',
          disable: true
        }
      ],
      btnGroup2Value: 'center',
      btnGroup3: [
        {
          name: '左',
          value: 'left'
        },
        {
          name: '中',
          value: 'center'
        },
        {
          name: '右',
          value: 'right'
        }
      ],
      btnGroup3Value: 'right'
    }
  }
}
</script>
