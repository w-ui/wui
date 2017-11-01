<template>
<div>
    <w-button size="large" @click.native="showActionSheet">拍照</w-button>
    <w-actionsheet :items="myItems1" v-model="show1" cancel="取消">
    </w-actionsheet>
</div>
</template>

<script>
import Vue from 'vue'
import Actionsheet from 'packages/actionsheet'
import Button from 'packages/button'
import {Toast} from 'packages/dialog'

export default {
  components: {
    'w-actionsheet': Actionsheet,
    'w-button': Button
  },
  data() {
      return {
          show1: false,
          myItems1: [
              {
                  label: '拍照',
                  method: () => {
                      Toast('咔擦，此人太帅！');
                  }
              },
              {
                  label: '从相册中偷取',
                  method: () => {
                      Toast('看到了不该看到的东西！');
                  }
              }
          ]
      }
  },
  methods: {
    showActionSheet(){
        this.show1 = !this.show1
    }
  }
}
</script>


