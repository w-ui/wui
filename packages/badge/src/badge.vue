<template>
    <span class="wui-badge" :class="typesClass" :style="{backgroundColor: bgcolor, color: color}">
        <slot></slot>
    </span>
</template>

<script type="text/babel">
    export default {
        name: 'w-badge',
        props: {
            type: {
                validator(value) {
                    return ['primary', 'danger', 'warning', 'hollow'].indexOf(value) > -1;
                }
            },
            shape: {
                validator(value) {
                    return ['circle', 'square'].indexOf(value) > -1;
                }
            },
            color: {
                type: String
            },
            bgcolor: {
                type: String
            }
        },
        computed: {
            typesClass() {
                if (this.bgcolor) {
                    if (this.shape == 'square') {
                        return ' wui-badge-radius';
                    }
                    return '';
                }
                return (this.type ? 'wui-badge-' + this.type : '') + (this.shape == 'square' ? ' wui-badge-radius' : '');
            }
        }
    }
</script>

<style lang="less" scoped>
    @import './badge.less';
</style>
