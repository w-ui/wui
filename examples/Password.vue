<template>
  <div>
    <div class="paragraph" style="text-align: center">
      <w-password v-model="password" @finish="onFinish"></w-password>
      <br/><br/>
      密码为：{{password}}
    </div>
  </div>
</template>

<script>
import { Password } from 'packages/password'
import { Alert } from 'packages/dialog'

export default {
  components: {
    'w-password': Password
  },
  data() {
    return {
      password: ''
    }
  },
  methods: {
    onFinish(val) {
      Alert({ content: val })
    }
  }
}
</script>