<template>
  <div>
    <w-step :current="cur">
        <w-step-item>
            <span slot="top">步骤一</span>
        </w-step-item>
        <w-step-item>
            <span slot="top">步骤二</span>
        </w-step-item>
        <w-step-item>
            <span slot="top">步骤三</span>
        </w-step-item>
        <w-step-item>
            <span slot="top">步骤四</span>
        </w-step-item>
    </w-step>

      <w-button size="large" @click.native="next">下一步</w-button>
    

  </div>
</template>

<script>
  import Step from 'packages/step'
  import StepItem from 'packages/step-item'
  import Button from 'packages/button'

  export default {
    components: {
      'w-step': Step,
      'w-step-item': StepItem,
      'w-button': Button
    },
    data(){
      return {
        cur: 1
      }
    },
    methods: {
      next(){
        ++this.cur;
      }
    }
  }
</script>
