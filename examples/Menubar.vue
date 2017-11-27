<template>
  <w-menubar>
    <w-menubar-item title="外卖" link="/waimai">
      <i slot="icon" class=""></i>
      <span slot="badge">3</span>
    </w-menubar-item>
    <w-menubar-item title="发现" link="/found"></w-menubar-item>
    <w-menubar-item title="订单" :dot="true" link="/order"></w-menubar-item>
    <w-menubar-item title="我的" link="/mine"></w-menubar-item>
  </w-menubar>
</template>

<script>
    import Menubar from 'packages/menubar'
    import MenubarItem from 'packages/menubar-item'

    export default {
      components: {
        'w-menubar': Menubar,
        'w-menubar-item': MenubarItem
      }
    }
</script>