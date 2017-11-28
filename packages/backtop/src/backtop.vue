<template>
    <div v-show="show" @click.stop="backtop">
        <slot v-if="!!$slots.default"></slot>
        <div v-else class="wui-backtop">
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'>
                <polyline stroke='#C0C0C0' fill='transparent' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' points='5 14, 11 8, 17 14' />
            </svg>
        </div>
    </div>
</template>

<script type="text/babel">
    import {scrollTop, getScrollview} from 'src/utils';

    export default {
        name: 'w-backtop',
        data() {
            return {
                show: false
            }
        },
        methods: {
            backtop() {
                const top = this.scrollView === window ? document.documentElement.scrollTop : this.scrollView.scrollTop;
                scrollTop(this.scrollView, top, 0);
            },
            scrollHandler() {
                let offsetTop = window.pageYOffset;
                let offsetHeight = window.innerHeight;

                if (this.scrollView !== window) {
                    offsetTop = this.scrollView.scrollTop;
                    offsetHeight = this.scrollView.offsetHeight;
                }

                this.show = offsetTop >= offsetHeight / 2;
            },
            throttle(method, context) {
                clearTimeout(method.tId);
                method.tId = setTimeout(() => {
                    method.call(context);
                }, 50);
            },
            throttledCheck() {
                this.throttle(this.scrollHandler);
            }
        },
        mounted() {
            this.scrollView = getScrollview(this.$el);
            console.log(this.scrollView);

            this.scrollView.addEventListener('scroll', this.throttledCheck, false);
            this.scrollView.addEventListener('resize', this.scrollHandler, false);
        },
        destroyed() {
            this.scrollView.removeEventListener('scroll', this.throttledCheck, false);
            this.scrollView.removeEventListener('resize', this.scrollHandler, false);
        }
    }
</script>

<style lang="less" scoped>
    @import './backtop.less';
</style>
