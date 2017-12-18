<template>
    <div class="wui-scroll-tab">
        <div class="scroll-tab-nav" v-if="showSide">
            <div class="scroll-tab-item" v-for="(item, index) in navList" :class="activeIndex == item._uid ? 'scroll-tab-active' : ''"
               @click="moveHandler(item._uid)" :key="'scrolltab-' + index">
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
                active: 0,
                timer: null
            }
        },
        methods: {
            getPanels() {
                return this.$children.filter(item => item.$options.name === 'w-scroll-tab-panel');
            },
            init() {
                this.scrollView = this.$refs.scrollView;
                this.contentOffsetTop = this.scrollView.getBoundingClientRect().top;
                this.bindEvent();
                this.setDefault();
            },
            bindEvent() {
                this.scrollView.addEventListener('scroll', this.scrollHandler);
                window.addEventListener('resize', this.scrollHandler);
            },
            setDefault() {
                const panels = this.getPanels();
                let num = 0;
                panels.forEach((panel) => {
                    this.navList.push({
                        name: panel.name,
                        _uid: panel._uid,
                        icon: panel.icon
                    });
                    if (panel.active) {
                        this.activeIndex = panel._uid;
                        this.moveHandler(panel._uid);
                    } else {
                        ++num;
                        if (num >= panels.length)
                            this.activeIndex = panels[0]._uid;
                    }
                });
            },
            moveHandler(uid) {
                if (this.scrolling)return;
                this.scrolling = true;
                const panels = this.getPanels();
                const itemOffsetTop = panels.filter(item => item._uid == uid)[0].$el.getBoundingClientRect().top;
                console.log(this.scrollView.scrollTop, itemOffsetTop, this.contentOffsetTop, itemOffsetTop - this.contentOffsetTop)
                this.scrollView.scrollTop = this.scrollView.scrollTop + itemOffsetTop  - this.contentOffsetTop + 2;
                this.activeIndex = uid;
                setTimeout(() => {
                    this.scrolling = false;
                }, 6);
            },
            scrollHandler() {
                if (this.scrolling)return;
                const panels = this.getPanels();
                const panelsLength = panels.length;
                const scrollBox = this.scrollView;
                const scrollBoxHeight = scrollBox.offsetHeight;
                const scrollBoxTop = scrollBox.scrollTop;
                const panelItemHeight = panels[0].$el.offsetHeight;
                if (scrollBoxTop >= panelItemHeight * panelsLength - scrollBoxHeight) {
                    this.activeIndex = panels[panelsLength - 1]._uid;
                    this.active = panelsLength - 1
                    return;
                }
                panels.forEach((panel, index) => {
                    if (panel.$el.getBoundingClientRect().top <= this.contentOffsetTop) {
                        this.activeIndex = panel._uid;
                        this.active = index
                    }
                });
                this.$emit('change', this.active)
            }
        },
        mounted() {
            this.init();
        },
        destroyed() {
            this.scrollView.removeEventListener('scroll', this.scrollHandler);
            window.removeEventListener('resize', this.scrollHandler);
        }
    }
</script>

<style lang="less">
    @import "./scrolltab.less";
</style>
