<template>
  <div>
    <w-button size="large" @click.native="showCity">选择城市</w-button>
    <w-city-select v-model="show">
    </w-city-select>
  </div>
</template>

<script>
import { CitySelect } from 'packages/city-select'
import { Button } from 'packages/button'

export default {
  components: {
    'w-city-select': CitySelect,
    'w-button': Button
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    showCity() {
      this.show = !this.show
    }
  }
}
</script>


