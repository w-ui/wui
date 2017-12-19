<template>
    <div class="wui-scroll-tab">
        <div class="scroll-tab-nav" v-if="showSide">
            <div class="scroll-tab-item" v-for="(item, index) in navList" :class="activeIndex == index ? 'scroll-tab-active' : ''"
               @click="moveHandler(index)" :key="'scrolltab-' + index">
                <div class="scroll-tab-icon" v-if="item.icon"><i :class="'ti-' + item.icon"></i></div>
                <div class="scroll-tab-title">{{item.name}}</div>
            </div>
        </div>
        <div class="scroll-tab-content" ref="scrollView">
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'w-scroll-tab',
        props: {
            showSide: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                scrolling: false,
                navList: [],
                activeIndex: 0,
                sizeInfo: [],
                maxScrollTop: 0,
                lastScrollTop: 0,
                timer: null
            }
        },
        methods: {
            getPanels() {
                return this.$children.filter(item => item.$options.name === 'w-scroll-tab-panel');
            },
            init() {
                const panels = this.getPanels();
                panels.forEach((panel, index) => {
                    this.sizeInfo.push({
                        offsetTop: panel.$el.offsetTop,
                        offsetHeight: panel.$el.offsetHeight
                    })
                });
                let lastChild = this.sizeInfo[this.sizeInfo.length -1]
                this.maxScrollTop = lastChild.offsetTop + lastChild.offsetHeight - this.$refs.scrollView.offsetHeight
                if (this.maxScrollTop < 0) {
                    this.maxScrollTop = 0
                }
                this.bindEvent();
                this.setDefault();
            },
            bindEvent() {
                this.$refs.scrollView.addEventListener('scroll', this.scrollHandler, true);
            },
            setDefault() {
                const panels = this.getPanels();
                let num = 0;
                panels.forEach((panel, index) => {
                    this.navList.push({
                        name: panel.name,
                        _uid: index,
                        icon: panel.icon
                    });
                    if (panel.active) {
                        this.activeIndex = index;
                        this.moveHandler(index);
                    } else {
                        ++num;
                        if (num >= panels.length)
                            this.activeIndex = 0;
                    }
                });
            },
            moveHandler(index) {
                if (this.scrolling)return;
                this.scrolling = true;
                let scrollView = this.$refs.scrollView
                const panels = this.getPanels();
                let panel = panels[index]
                const itemOffsetTop = panel.$el.offsetTop;
                scrollView.scrollTop = itemOffsetTop + 2;
                this.activeIndex = index;
                setTimeout(() => {
                    this.scrolling = false;
                }, 6);
                this.$emit('change', this.activeIndex)
            },
            scrollHandler(e) {
                if (this.scrolling)return;
                const panels = this.getPanels();
                const panelsLength = panels.length;

                let scrollView = this.$refs.scrollView
                let scrollTop = scrollView.scrollTop
                this.sizeInfo.forEach( (item, index) => {
                    if (item && item.offsetTop <= scrollTop) {
                        this.activeIndex = index
                    }
                })
                this.$emit('change', this.activeIndex)
                
                let direction = ''
                if (this.lastScrollTop - scrollTop > 0) {
                    direction = 'down'
                } else {
                    direction = 'up'
                }
                this.lastScrollTop = scrollTop
                
                if (this.canScroll(direction)){
                    e.preventDefault()
                    e.stopPropagation()
                }
            },
            setCurrent (index) {
                this.moveHandler(index);
            },
            scrollToBottom () {
                this.$nextTick(() => {
                    this.$refs.scrollView.scrollTop = 9999
                })
            },
            canScroll (direction) {
                let scrollView = this.$refs.scrollView
                if (direction == 'down' && scrollView.scrollTop == 0) {
                    return false
                }
                if (direction == 'down' && scrollView.scrollTop >= this.maxScrollTop) {
                    return true
                }
                if (scrollView.scrollTop < this.maxScrollTop) {
                    return true
                }
                return false
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.init();
            })
        }
    }
</script>

<style lang="less">
    @import "./scrolltab.less";
</style>
