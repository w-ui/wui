<template>
    <button :disabled="disabled" :class="classes" :style="{backgroundColor: bgcolor, color: color}">
        <slot></slot>
    </button>
</template>

<script type="text/babel">

    export default {
        name: 'w-button',
        props: {
            disabled: Boolean,
            type: {
                validator(value) {
                    return ['primary', 'danger', 'warning', 'light', 'disabled'].indexOf(value) > -1;
                },
                default: 'primary'
            },
            size: {
                validator(value) {
                    return ['small', 'large'].indexOf(value) > -1;
                }
            },
            bgcolor: {
                type: String
            },
            color: {
                type: String
            },
            shape: {
                validator(value) {
                    return ['square', 'circle'].indexOf(value) > -1;
                },
                default: 'square'
            }
        },
        computed: {
            classes() {
                let s = this.size === 'large' ? 'w-btn-block' : 'w-btn';
                let b = 'w-btn-' + this.type;
                if (this.disabled) {
                    b = 'w-btn-disabled';
                }

                if (this.bgcolor) {
                    b = '';
                }
                return s + ' ' + b + (this.shape === 'circle' ? ' w-btn-circle' : '');
            }
        }
    }
</script>

<style lang="less" scoped>
    @import './button.less';
</style>
