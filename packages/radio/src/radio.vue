<template>
    <label class="wui-radio">
        <input type="radio" @change="changeHandler" :disabled="disabled" :checked="checked"/>
        <span class="wui-radio-icon" :style="[{color: $parent.color}, styles(1)]"><i :style="styles(2)"></i></span>
        <span class="wui-radio-text" v-if="!$slots.default">{{val}}</span>
        <span class="wui-radio-text" v-else><slot></slot></span>
    </label>
</template>

<script type="text/babel">
    export default {
        name: 'w-radio',
        data() {
            return {
                checked: false
            }
        },
        props: {
            val: [String, Number],
            disabled: {
                type: Boolean,
                default: false
            },
            color: {
                default: '#4CD864'
            },
            size: {
                validator(val) {
                    return /^([1-9]\d*)$/.test(val);
                },
                default: 20
            }
        },
        methods: {
            changeHandler (event) {
                if (this.disabled) return;

                this.checked = event.target.checked;
                if (this.$parent && typeof(this.$parent.change) == 'function') {
                    this.$parent.change(this.val)
                }

                this.$emit('change', this.val);
            },
            styles(size) {
                let ps = this.$parent ? this.$parent.size : this.size
                return {
                    width: ps / size + 'px',
                    height: ps / size + 'px'
                };
            }
        }
    }
</script>

<style lang="less">
@import url(./radio.less);
</style>

