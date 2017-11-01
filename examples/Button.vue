<template>
  <div>
    <div class="paragraph">
      <h3>按钮</h3>
      <w-button type="primary">主要</w-button>
      <w-button type="danger">危险</w-button>
      <w-button type="warning">警告</w-button>
      <w-button type="hollow">空</w-button>
      <w-button type="disabled" disabled>禁用</w-button>
    </div>
    <div class="paragraph">
      <h3>尺寸</h3>
      <w-button size="large" type="primary">主要</w-button>
      <w-button size="large" type="danger">危险</w-button>
      <w-button size="large" type="warning">警告</w-button>
      <w-button size="large" type="disabled" disabled>禁用</w-button>
    </div>
    <div class="paragraph">
      <h3>自定义颜色</h3>
      <w-button size="large" bgcolor="#000" color="#FFF">自定义</w-button>
    </div>
    <div class="paragraph">
      <h3>按钮组</h3>
        <w-button-group>
          <w-button>左</w-button>
          <w-button>居中</w-button>
          <w-button>右</w-button>
        </w-button-group>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Button from 'packages/button'
import ButtonGroup from 'packages/button-group'

export default {
  components: {
    'w-button': Button,
    'w-button-group': ButtonGroup
  }
}
</script>


<style lang="less">
  .paragraph{
    padding: 10px;
    border: 1px #f0f0f0 solid;
    border-radius: 4px;
    margin-bottom: 0.2rem;

    h3{
      border-bottom: 1px #f0f0f0 solid;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }
  }
</style>

