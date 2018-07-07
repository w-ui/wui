<template>
  <div class="wui-tags" @paste="pasteText($event)">
    <div class="tags" transition="tags" v-for="(item, i) in tags" :key="'tag-'+ i">
      <span class="content">{{item}}</span><span class="del" @click="delTag(i, false)">&times;</span>
    </div>
    <input ref="tagIn" class="tags-input" type="text" placeholder="输入标签，回车创建" v-model="text" @keyup.enter="addTag(text)">
  </div>
</template>

<script>
export default {
  name: 'w-tag',
  props: {
    tags: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      text: ''
    }
  },
  methods: {
    pasteText(e) {
      e.preventDefault()
      var text = (e.clipboardData || window.clipboardData).getData('text')
      this.addTag(text)
    },
    addTag(text) {
      if (text.trim() != '') {
        this.tags.push(text)
        this.text = ''
      }
    },
    delTag(index, way) {
      if (way) {
        if (index >= 0 && this.text == '') {
          this.tags.splice(index, 1)
        }
      } else {
        this.tags.splice(index, 1)
      }
      this.$refs.tagIn.focus()
    }
  }
}
</script>

<style lang="less">
.wui-tags {
  width: 100%;
  outline: none;
  padding: 10px;
  background-color: #fff;
  border: 1px #ddd solid;
  border-radius: 4px;

  &::after {
    content: '';
    display: block;
    height: 0;
    clear: both;
  }
}
.tags,
.tags-input {
  position: relative;
  float: left;
  color: #444;
  background-color: #eee;
  line-height: 28px;
  margin: 0 4px 4px 0;
  padding: 0 5px 0px 10px;
  border-radius: 6px;
  .content {
    line-height: 28px;
    vertical-align: middle;
  }
  .del {
    display: inline-block;
    width: 22px;
    height: 28px;
    text-align: center;
    cursor: pointer;
    font-size: 20px;
    color: #999;
    vertical-align: middle;
  }
}
.tags-input {
  font-size: 14px;
  padding: 0;
  background-color: inherit;
  border: none;
  color: inherit;
  width: 10em;
}
.tags-enter,
.tags-leave {
  transform: scale(0.9);
  opacity: 0;
}
.tags-transition {
  transition: all 0.3s ease;
}
</style>