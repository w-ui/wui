<template>
    <li>
        <div class="wui-timeline-content-icon">
        <slot name="icon">
            <em></em>
        </slot>
        </div>

        <slot></slot>
    </li>
</template>

<script type="text/babel">
    export default {
        name: 'w-timeline-item'
    }
</script>
