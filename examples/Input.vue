<template>
  <div>
    <w-input placeholder="用户名" required>
      <w-icon size="16px" name="user" slot="icon"></w-icon>
    </w-input>
    <w-input type="password" placeholder="密码">
      <w-icon size="16px" name="key" slot="icon"></w-icon>
    </w-input>
    <w-input v-model="email" readonly placeholder="readonly">
      <w-icon size="16px" name="email" slot="icon"></w-icon>
    </w-input>
    <w-input type="number" v-model="num"  :min='10' :max="100" placeholder="数字"></w-input>
    <w-input type="input" v-model="reg" regex="^[a-z0-9-]*$" placeholder="正则"></w-input>
    <w-input type="varycode" v-model="varycode" placeholder="手机号">
      <w-icon size="16px" name="mobile" slot="icon"></w-icon>
    </w-input>
  </div>
</template>
  
<script>
import { Input } from "packages/input";
import { Icon } from "packages/icon";

export default {
  components: {
    "w-input": Input,
    "w-icon": Icon
  },
  data() {
    return {
      switch1: true,
      name: "",
      password: "",
      num: 10,
      tel: "",
      email: "robin@baidu.com",
      varycode: "",
      reg: ""
    };
  }
};
</script>


