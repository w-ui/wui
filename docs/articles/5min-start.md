# 5分钟入门教程

```sh
npm install w-ui
```

<template>
  <div>
    <w-button type="primary" @click.native="doClick">点我</w-button>
  </div>
</template>

<script>
import Vue from 'vue'
import Button from 'packages/button'
import {Alert} from 'packages/dialog'

export default {
  components: {
    'w-button': Button
  },
  methods: {
    doClick () {
      Alert('hello, wui');
    }
  }
}
</script>


```html

<template>
  <div>
    <w-button type="primary" @click.native="doClick">点我</w-button>
  </div>
</template>

<script>
import Vue from 'vue'
import Button from 'packages/button'
import {Alert} from 'packages/dialog'

export default {
  components: {
    'w-button': Button
  },
  methods: {
    doClick () {
      Alert('hello, wui');
    }
  }
}
</script>

```