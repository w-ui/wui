<template>
    <div v-if="value" class="wui-popup">
        <div class="mask-popup" @click.stop="close"></div>
        <div class="popup-container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import {addClass, removeClass, getScrollview} from 'src/utils';

    export default {
        name: 'w-popup',
        props: {
            value: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            value(val) {
                val && this.isIOS && addClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug');
                this.show = val;
            }
        },
        methods: {
            close() {
                this.isIOS && removeClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug');

                this.$emit('input', false);
            }
        },
        destroyed() {
            this.close();
        },
        mounted() {
            this.scrollView = getScrollview(this.$el);
            this.isIOS = !!(window.navigator && window.navigator.userAgent || '').match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        }
    }
</script>

<style lang="less">
    @import "./index.less";
</style>
