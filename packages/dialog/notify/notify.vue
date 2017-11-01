<template>
    <div class="wui-notify" :class="classes" v-html="content"></div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                classes: ''
            }
        },
        props: {
            content: String,
            timeout: Number,
            callback: Function
        }
    }
</script>

<style lang="less">
    @import "./notify.less";
</style>