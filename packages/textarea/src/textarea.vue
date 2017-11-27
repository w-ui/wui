<template>
    <div class="wui-textarea">
        <textarea v-model="str"
            :placeholder="placeholder"
            :maxlength="maxlength"
            :readonly="readonly"
        ></textarea>
        <div class="wui-textarea-counter" v-if="showCounter && maxlength">{{num}}/{{maxlength}}</div>
    </div>
</template>

<script type="text/babel">
export default {
    name: 'w-textarea',
    data() {
        return {
            num: 0,
            str: ''
        }
    },
    props: {
        maxlength: {
            validator(val) {
                if (!val) return true;
                return /^(([1-9]\d*)|0)$/.test(val);
            }
        },
        placeholder: {
            type: String
        },
        readonly: {
            type: Boolean,
            default: false
        },
        value: {
            type: String
        },
        showCounter: {
            type: Boolean,
            default: true
        },
        change: {
            type: Function
        },
        callback: {
            type: Function
        }
    },
    watch: {
        str(val) {
            this.$emit('input', val);
            this.change && this.change();
            this.callback && this.change();
            if (this.showCounter) this.num = val.length;
        },
        value(val) {
            this.str = val;
        }
    },
    mounted() {
        this.$nextTick(() => {
            const v = this.value;
            if (!v) return;
            this.str = v.length > this.maxlength ? v.substr(v, this.maxlength) : v;
        });
    }
}
</script>

<style lang="less">
    @import "./textarea.less";
</style>
