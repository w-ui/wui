<template>
  <div>
    <div class="paragraph">
      <h3>值和标签一致</h3>
      <w-checkbox-group v-model="radio1">
        <w-checkbox val="奔驰"></w-checkbox>
        <w-checkbox val="宝马"></w-checkbox>
        <w-checkbox val="奥迪"></w-checkbox>
      </w-checkbox-group>
    </div>

    <div class="paragraph">
      <h3>值和标签不同</h3>
      <w-checkbox-group v-model="radio2">
        <w-checkbox val="benz">奔驰</w-checkbox>
        <w-checkbox val="bmw">宝马</w-checkbox>
        <w-checkbox val="audi">奥迪</w-checkbox>
      </w-checkbox-group>
    </div>


    <div class="paragraph">
      <h3>禁用</h3>
      <w-checkbox-group v-model="radio3">
        <w-checkbox val="奔驰"></w-checkbox>
        <w-checkbox val="宝马"></w-checkbox>
        <w-checkbox val="奥迪" disabled></w-checkbox>
      </w-checkbox-group>
    </div>

  </div>
</template>

<script>
import Checkbox from 'packages/checkbox'
import CheckboxGroup from 'packages/checkbox-group'

export default {
  components: {
    'w-checkbox': Checkbox,
    'w-checkbox-group': CheckboxGroup
  },
  data(){
    return {
      radio1: ['奔驰'],
      radio2: ['bmw'],
      radio3: ['奥迪']
    }
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

