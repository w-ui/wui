<template>
    <div class="wui-layout">
        <div class="wui-layout-top-area" ref="top">
            <slot name="top"></slot>
        </div>
        <section class="wui-layout-body-area" ref="body">
            <slot></slot>
        </section>
        <div class="wui-layout-bottom-area" ref="bottom">
            <slot name="bottom"></slot>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'wui-layout',
        mounted () {
            this.$nextTick(() => {
                let wh = window.innerHeight
                let th = this.$refs.top.offsetHeight
                let bh = this.$refs.bottom.offsetHeight
                this.$el.style.width = window.innerWidth + 'px'
                this.$el.style.height = wh + 'px'
                console.log('layout>>>:', 'th:', th, 'bh:', bh)
                this.$refs.body.style.height = (wh - th - bh) + 'px'
            })
        }
    }
</script>

<style lang="less">
    @import "./layout.less";
</style>
