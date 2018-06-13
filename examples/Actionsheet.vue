<template>
<div>
    <div class="paragraph">
        <Button size="large" @click.native="showActionSheet">拍照</Button>
        <Actionsheet :items="myItems1" v-model="show1" cancel="取消">
        </Actionsheet>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import { Actionsheet } from 'packages/actionsheet'
import { Button } from 'packages/button'
import { Toast } from 'packages/dialog'

export default {
  components: {
    Actionsheet,
    Button
  },
  data() {
    return {
      show1: false,
      myItems1: [
        {
          label: '拍照',
          method: () => {
            Toast('拍照')
          }
        },
        {
          label: '从相册中选取',
          method: () => {
            Toast('从相册中选取')
          }
        }
      ]
    }
  },
  methods: {
    showActionSheet() {
      this.show1 = !this.show1
    }
  }
}
</script>


