<template>
    <div class="wui-dialog-black-mask">
        <div class="wui-confirm wui-alert">
            <div class="wui-confirm-bd" v-html="content"></div>
            <div class="wui-confirm-ft">
                <a class="wui-confirm-btn primary" @click.stop="closeAlert">确定</a>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        props: {
            content: String,
            callback: Function
        }
    }
</script>

<style lang="less">
    @import "./alert.less";
</style>
