<template>
  <div style="border: 1px #f0f0f0 solid; padding: 10px;">
    <w-textarea  v-model="str" maxlength="300">
    </w-textarea>
  </div>
</template>

<script>
import { Textarea } from 'packages/textarea'

export default {
  components: {
    'w-textarea': Textarea
  },
  data() {
    return {
      str: 'hi,wui'
    }
  }
}
</script>