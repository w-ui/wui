<template>
    <div>
        <div class="wui-grid-title" v-if="title">{{title}}</div>
        <div :class="classes">
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/babel">
    export default{
        name: 'w-grid',
        props: {
            col: {
                validator(value) {
                    return ['2', '3', '4', '5', '6'].indexOf(value + '') > -1;
                },
                default: '2'
            },
            title: String
        },
        computed: {
            classes() {
                return 'wui-grid-' + this.col;
            }
        }
    }
</script>

<style lang="less">
    @import './grid.less';
</style>
