<template>
  <div>
    <w-popup v-model="show">
        <city-select></city-select>
    </w-popup>
  </div>
</template>

<script>
import Popup from 'packages/popup'
import CitySelect from './CitySelect.vue'

export default {
  name: 'w-city-select',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data(){
    console.log('>>>', this.value)
    return {
      show: this.value
    }
  },
  watch: {
    value(val, oldVal){
      console.log('>>>>>>>>>', val)
      this.show = val
    }
  },
  components: {
    'w-popup': Popup,
    'city-select': CitySelect,
  },
  methods: {
    
  }
}
</script>

<style lang="less">
  .city-wrapper{
    height: 50%;
    overflow: hidden;
  }
</style>



