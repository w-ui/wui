<template>
  <div>
    <div class="paragraph">
      <h3>值和标签一致</h3>
      <w-radio-group v-model="radio1">
        <w-radio val="奔驰"></w-radio>
        <w-radio val="宝马"></w-radio>
        <w-radio val="奥迪"></w-radio>
      </w-radio-group>
    </div>

    <div class="paragraph">
      <h3>值和标签不同</h3>
      <w-radio-group v-model="radio2">
        <w-radio val="benz">奔驰</w-radio>
        <w-radio val="bmw">宝马</w-radio>
        <w-radio val="audi">奥迪</w-radio>
      </w-radio-group>
    </div>


    <div class="paragraph">
      <h3>禁用</h3>
      <w-radio-group v-model="radio3">
        <w-radio val="奔驰"></w-radio>
        <w-radio val="宝马"></w-radio>
        <w-radio val="奥迪" disabled></w-radio>
      </w-radio-group>
    </div>

  </div>
</template>

<script>
import Radio from 'packages/radio'
import RadioGroup from 'packages/radio-group'

export default {
  components: {
    'w-radio': Radio,
    'w-radio-group': RadioGroup
  },
  data(){
    return {
      radio1: '奔驰',
      radio2: 'bmw',
      radio3: '奥迪'
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

