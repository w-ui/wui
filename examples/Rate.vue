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
