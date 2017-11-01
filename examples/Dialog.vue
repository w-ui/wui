<template>
  <div>
    <w-button size="large" @click.native="doConfirm">确认</w-button>
    <w-button size="large" @click.native="doAlert">确定</w-button>
    <w-button size="large" @click.native="doNotify">通知</w-button>
    <w-button size="large" @click.native="doToast">toast</w-button>
  </div>
</template>

<script>
    import { Confirm, Alert, Notify, Toast } from 'packages/dialog';
    import Button from 'packages/button';

    export default {
      components: {
        'w-button': Button
      },
      methods: {
        doConfirm(){
          Confirm('您确认要删除吗？', {
            title: '确认',
            callback(val){
              alert(val);
            }
          })
        },
        doAlert(){
          Alert('您确认要删除吗？')
        },
        doNotify(){
          Notify('您确认要删除吗？')
        },
        doToast(){
          Toast('您确认要删除吗？')
        }
      }
    }
</script>