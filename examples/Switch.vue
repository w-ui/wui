<template>
  <div>
    <div class="paragraph">
      <w-switch v-model="switch1"></w-switch>
      <p>状态： {{switch1}}</p>
    </div>
  </div>
</template>

<script>
import { Switch } from 'packages/switch'

export default {
  components: {
    'w-switch': Switch
  },
  data() {
    return {
      switch1: false
    }
  }
}
</script>


<style>
p {
  padding: 0.2rem 0;
}
</style>

