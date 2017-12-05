<template>
  <div>
    <div class="paragraph">
      <h3>只读</h3>
      <w-rate v-model="score" readonly></w-rate>
    </div>

    <div class="paragraph">
      <w-rate></w-rate>
    </div>

    <div class="paragraph">
      <h3>打分</h3>
      <w-rate count='10' :showText="['1分', '2分', '3分', '4分', '5分', '6分', '7分', '8分', '9分', '10分']"></w-rate>
    </div>
    
  </div>
</template>


<script>
import Rate from 'packages/rate'

export default {
  components: {
    'w-rate': Rate
  },
  data() {
    return {
      score: 3
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
