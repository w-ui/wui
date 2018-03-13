<template>
    <div class="wui-timeline">
        <ul class="wui-timeline-content">
            <slot></slot>
        </ul>
    </div>
</template>

<script type="text/babel">
export default {
  name: 'w-timeline'
}
</script>

<style lang="less">
@import './timeline.less';
</style>
