<template>
  <w-menubar fixed>
    <w-menubar-item title="外卖" link="/waimai">
      <w-icon slot="icon" name="home"></w-icon>
    </w-menubar-item>
    <w-menubar-item title="发现" link="/found">
      <w-icon slot="icon" name="light-bulb"></w-icon>
    </w-menubar-item>
    <w-menubar-item title="订单" :dot="true" link="/order">
      <w-icon slot="icon" name="receipt"></w-icon>
    </w-menubar-item>
    <w-menubar-item title="我的" link="/mine">
      <w-icon slot="icon" name="user"></w-icon>
    </w-menubar-item>
  </w-menubar>
</template>

<script>
import { Menubar } from "packages/menubar";
import { MenubarItem } from "packages/menubar-item";
import { Icon } from "packages/icon";

export default {
  components: {
    "w-menubar": Menubar,
    "w-menubar-item": MenubarItem,
    "w-icon": Icon
  }
};
</script>