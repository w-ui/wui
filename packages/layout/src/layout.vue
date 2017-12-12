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
        props: {
            transparentTop: {
                type: Boolean,
                default: false
            }
        },
        mounted () {
            this.$nextTick(() => {
                this.$el.style.width = window.innerWidth + 'px'
                this.$el.style.height = window.innerHeight + 'px'
                if (this.transparentTop) {
                    this.$refs.body.style.height = window.innerHeight - this.$refs.bottom.offsetHeight + 'px'
                } else {
                    let th = this.$refs.top.offsetHeight
                    this.$refs.body.style.marginTop = th + 'px'
                    this.$refs.body.style.opacity = 1
                    this.$refs.body.style.height = window.innerHeight - th - this.$refs.bottom.offsetHeight + 'px'
                }
            })
        }
    }
</script>

<style lang="less">
    @import "./layout.less";
</style>
