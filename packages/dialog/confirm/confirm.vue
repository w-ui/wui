<template>
    <div class="wui-dialog-black-mask">
        <div class="wui-confirm">
            <div class="wui-confirm-hd"><strong class="wui-confirm-title" v-html="title"></strong></div>
            <div class="wui-confirm-bd" v-html="content"></div>
            <div class="wui-confirm-ft">
                <a class="wui-confirm-btn default" @click.stop="closeConfirm(false, callback)">取消</a>
                <a class="wui-confirm-btn primary" @click.stop="closeConfirm(true, callback)">确定</a>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
export default {
  props: {
    title: String,
    content: String,
    callback: {
      type: Function
    }
  }
}
</script>
