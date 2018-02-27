<template>
  <div>
    <w-cell title="标题文字" value="说明文字"></w-cell>
    <w-cell title="标题文字" link="//github.com" value="链接"></w-cell>
    <w-cell title="标题文字" label="描述信息" value="描述"></w-cell>
    <w-cell title="标题文字" value="icon">
      <w-icon name="user" slot="icon" size="0.24rem" color="dodgerblue"></w-icon>
    </w-cell>
    <w-cell title="标题文字">
      <span style="color: red">自定义内容</span>
    </w-cell>
    <w-cell title="开关">
      <w-switch v-model="switch1"></w-switch>
    </w-cell>
    <w-cell title="用户名：" type="input" v-model="name" placeholder="用户名" required></w-cell>
    <w-cell title="密码：" type="password" v-model="password"  placeholder="密码"></w-cell>
    <w-cell title="验证码：" type="input" v-model="varycode"  readonly placeholder="readonly"></w-cell>
    <w-cell title="邮箱：" type="input" v-model="email"  placeholder="邮箱"></w-cell>
    <w-cell title="电话：" type="input" v-model="tel" placeholder="电话"></w-cell>
    <w-cell title="数字：" type="number" v-model="num"  :min='10' :max="100" placeholder="数字"></w-cell>
    <w-cell title="正则：" type="input" v-model="reg" regex="^[a-z0-9-]*$" placeholder="正则"></w-cell>
  </div>
</template>
  
<script>
import { Cell } from "packages/cell";
import { Icon } from "packages/icon";
import { Switch } from "packages/switch";

export default {
  components: {
    "w-cell": Cell,
    "w-icon": Icon,
    "w-switch": Switch
  },
  data() {
    return {
      switch1: true,
      name: "",
      password: "",
      num: 10,
      tel: "",
      email: "",
      varycode: "",
      reg: ""
    };
  }
};
</script>


