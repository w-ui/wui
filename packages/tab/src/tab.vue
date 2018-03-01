<template>
    <div class="wui-tab">
        <ul class="wui-tab-nav">
            <li class="wui-tab-nav-item"
                v-for="item in navList"
                :class="item._uid == activeIndex ? 'wui-tab-active' : ''"
                @click="changeHandler(item._uid, item.title, item.tabkey)">
                <a>{{item.title}}</a>
            </li>
        </ul>
        <div class="wui-tab-panel">
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'wui-tab',
        data() {
            return {
                navList: [],
                activeIndex: 0,
                tmpIndex: 0
            }
        },
        methods: {
            init(update) {
                const tabPanels = this.$children.filter(item => item.$options.name === 'wui-tab-panel');

                let num = 0;

                tabPanels.forEach((panel, index) => {
                    if(update === 'title') {
                      return this.navList[index] = panel;
                    }

                    if (!update) {
                        this.navList.push({
                            title: panel.title,
                            _uid: panel._uid,
                            tabkey: panel.tabkey
                        });
                    }

                    if (panel.active) {
                        this.activeIndex = this.tmpIndex = panel._uid;
                        this.emitChange(panel.title, panel.tabkey);
                    } else {
                        ++num;
                        if (num >= tabPanels.length) {
                            this.activeIndex = this.tmpIndex = tabPanels[0]._uid;
                            this.emitChange(tabPanels[0].title, tabPanels[0].tabkey);
                        }
                    }
                });
            },
            emitChange(title, tabkey) {
                // TODO 参数更名，即将删除
                this.$emit('change', title, tabkey)
            },
            changeHandler(uid, title, tabkey) {
                if (this.tmpIndex != uid) {
                    this.activeIndex = this.tmpIndex = uid;
                    this.emitChange(title, tabkey);
                }
            }
        },
        mounted() {
            this.init(false);
        }
    }
</script>

<style lang="less">
    @import "./tab.less";
</style>
