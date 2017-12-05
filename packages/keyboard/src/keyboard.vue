<template>
    <div>
        <div class="wui-keyboard-mask" v-if="triggerClose" v-show="show" @click.stop="close"></div>
        <div class="wui-mask-keyboard" v-else v-show="show"></div>
        <div class="wui-keyboard" :class="show ? 'wui-keyboard-active' : ''">
            <div class="wui-keyboard-head">
                <strong>请输入密码</strong>
            </div>
            <div class="wui-keyboard-error">{{error}}</div>
            <ul class="wui-keyboard-password">
                <li v-for="n in 6"><i v-show="nums.length >= n"></i></li>
            </ul>
            <div class="wui-keyboard-content">
                <ul class="wui-keyboard-numbers">
                    <li v-for="i in 4">
                        <template v-if="triggerClose">
                            <a v-if="i == 4" @click.stop="close">取消</a>
                        </template>
                        <template v-else>
                            <a v-if="i == 4"></a>
                        </template>
                        <template>
                            <a v-for="n in numsArr.slice((i - 1) * 3, i * 3)" @click.stop="numclick(n)">{{n}}</a>
                        </template>
                        <a v-if="i == 4" @click.stop="backspace">删除</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import {addClass, removeClass, getScrollview, pageScroll, isIOS} from 'src/utils';

    export default {
        name: 'w-keyboard',
        data() {
            return {
                nums: '',
                show: this.value,
                error: '',
                numsArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
            }
        },
        props: {
            s: {
                type: Function
            },
            callback: {
                type: Function
            },
            value: {
                type: Boolean,
                default: false
            },
            triggerClose: {
                type: Boolean,
                default: true
            }
        },
        watch: {
            value(val) {
                if (isIOS) {
                    if (val) {
                        pageScroll.lock();
                        addClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug');
                    } else {
                        pageScroll.unlock();
                        removeClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug');
                    }
                }

                this.nums = '';
                this.error = '';
                this.show = val;
            },
            nums(val) {
                if (val.length >= 6) {
                    this.inputDone && this.inputDone(val);
                    this.callback && this.callback(val);
                    this.$emit('input', false);
                }
            }
        },
        methods: {
            init() {
                this.scrollView = getScrollview(this.$el);

                this.$on('wui.keyboard.error', (error) => {
                    this.setError(error);
                });

                this.$on('wui.keyboard.close', this.close);
            },
            numclick(num) {
                this.error = '';
                if (this.nums.length >= 6)return;
                this.nums += num;
            },
            backspace() {
                const nums = this.nums;

                if (nums) {
                    this.nums = nums.substr(0, nums.length - 1);
                }
            },
            close() {
                isIOS && removeClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug');

                this.$emit('input', false);
            },
            setError(error) {
                this.error = error;
                this.nums = '';
            }
        },
        created() {
            const ua = window.navigator && window.navigator.userAgent || '';

            this.isMobile = !!ua.match(/AppleWebKit.*Mobile.*/) || 'ontouchstart' in document.documentElement;

            this.$nextTick(this.init);
        },
        destroyed() {
            this.close();
            pageScroll.unlock();
        }
    }
</script>

<style lang="less">
    @import "./keyboard.less";
</style>
