<template>
  <div>
    <div style="height: 4000px; background: linear-gradient(lightgreen, green)"></div>
    <w-backtop></w-backtop>
  </div>
</template>


<script>
import { Backtop } from 'packages/backtop'

export default {
  components: {
    'w-backtop': Backtop
  }
}
</script>


