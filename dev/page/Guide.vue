<template>
  <div class="guide-page">
    <div class="top-header">
      <div class="logo"><router-link to="/"><img src="../static/images/wui.png"/>WUI</router-link></div>
      <ul class="top-menu">
        <li><router-link to="/guide">指南</router-link></li>
        <li><router-link to="/doc">组件</router-link></li>
        <li><router-link to="/visual">可视化</router-link></li>
        <li><router-link to="/about">关于</router-link></li>
      </ul>
      <a href="https://github.com/w-ui/wui"><img src="https://img.shields.io/github/stars/w-ui/wui.svg?style=social&amp;label=Star"></a>
    </div>
    
    <div id="sidebar">
      <div class="inner-box">
        <div class="group"  v-for="g in routerData" :key="g.groupName">
          <div class="group-title">
            {{g.groupName}}
          </div>
          <div class="group-items">
            <router-link :to="v.path" v-for="v in g.group" :key="v.name" active-class="bar-item-active">
              <div class="bar-item">
                {{v.title}}
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="body-area">

      <div class="doc-area">
        <component :is="compo"></component>
      </div>

    </div>

  </div>
</template>

<script>
import navData from '../guide.config.json'

export default {
  name: 'doc',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      routerData: navData
    }
  },
  computed: {
    compo(){
      console.log(this.name);
      let upName = this.name.replace(/^\w/, (s0) => s0.toUpperCase())
      console.log(upName);
      return () => import(`../../docs/articles/${upName}.md`)
    },
    demoSrc(){
      let upName = this.name.replace(/^\w/, (s0) => s0.toUpperCase())
      let time = Date.now()
      return `/?t=${time}#/demo/${upName}`
    }
  }
}
</script>

<style lang="less">

#sidebar {
  width: 240px;
  height: 100vh;
  float: left;
  text-align: left;
  padding: 10px;

  .inner-box {
    background-color: #fff;
    border-radius: 4px;
  }

  .group-title{
    height: 50px;
    line-height: 50px;
    padding: 0 12px;
    font-size: 20px;
  }
}
.bar-item, .bar-list {
    display: block;
    height: 40px;
    line-height: 40px;
    font-size: 13px;
    padding: 0 24px;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    background-color: #fff;
}
.router-link-exact-active.bar-item-active .bar-item{
    background-color: #f0f0f0;
    color: dodgerblue;
    border-left: 2px dodgerblue solid;
}

.bar-list {
  cursor: auto;
  font-weight: bold;
}

.guide-page{
  display: relative;
  background-color: #f0f0f0;

  &::after {
    content: '';
    clear: both;
    display: block;
  }

  .body-area{
    width: 100%;
    padding-left: 240px;
    padding-top: 10px;
  }

  .doc-area{
    width: 100%;
    min-height: 100vh;
    padding: 20px;
    word-break: break-all;
    word-wrap: break-word;
    border-left: 1px solid #eee;
    background-color: #fff;
    border-radius: 4px;

    a {
      color: #4183C4;
      text-decoration: none;
    }

    a.absent {
      color: #cc0000;
    }

    a.anchor {
      display: block;
      padding-left: 30px;
      margin-left: -30px;
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
    }

    h1, h2, h3, h4, h5, h6 {
      margin: 20px 0 10px;
      padding: 0;
      font-weight: bold;
      -webkit-font-smoothing: antialiased;
      cursor: text;
      position: relative;
    }

    h2:first-child, h1:first-child, h1:first-child + h2, h3:first-child, h4:first-child, h5:first-child, h6:first-child {
      margin-top: 0;
      padding-top: 0;
    }

    h1:hover a.anchor, h2:hover a.anchor, h3:hover a.anchor, h4:hover a.anchor, h5:hover a.anchor, h6:hover a.anchor {
      text-decoration: none;
    }

    h1 tt, h1 code {
      font-size: inherit;
    }

    h2 tt, h2 code {
      font-size: inherit;
    }

    h3 tt, h3 code {
      font-size: inherit;
    }

    h4 tt, h4 code {
      font-size: inherit;
    }

    h5 tt, h5 code {
      font-size: inherit;
    }

    h6 tt, h6 code {
      font-size: inherit;
    }

    h1 {
      font-size: 28px;
      color: black;
    }

    h2 {
      font-size: 24px;
      border-bottom: 1px solid #cccccc;
      color: black;
    }

    h3 {
      font-size: 18px;
      padding-bottom: 5px;
      border-bottom: 1px dashed #ddd;
      color: #222
    }

    h4 {
      font-size: 16px;
      color: #444
    }

    h5 {
      font-size: 14px;
    }

    h6 {
      color: #777777;
      font-size: 14px;
    }

    p, blockquote, ul, ol, dl, li, table, pre {
      margin: 15px 0;
    }

    hr {
      border: 0 none;
      color: #cccccc;
      height: 4px;
      padding: 0;
    }

    body > h2:first-child {
      margin-top: 0;
      padding-top: 0;
    }

    body > h1:first-child {
      margin-top: 0;
      padding-top: 0;
    }

    body > h1:first-child + h2 {
      margin-top: 0;
      padding-top: 0;
    }

    body > h3:first-child, body > h4:first-child, body > h5:first-child, body > h6:first-child {
      margin-top: 0;
      padding-top: 0;
    }

    a:first-child h1, a:first-child h2, a:first-child h3, a:first-child h4, a:first-child h5, a:first-child h6 {
      margin-top: 0;
      padding-top: 0;
    }

    h1 p, h2 p, h3 p, h4 p, h5 p, h6 p {
      margin-top: 0;
    }

    li p.first {
      display: inline-block;
    }

    ul, ol {
      padding-left: 30px;
    }

    ul :first-child, ol :first-child {
      margin-top: 0;
    }

    ul :last-child, ol :last-child {
      margin-bottom: 0;
    }

    dl {
      padding: 0;
    }

    dl dt {
      font-size: 14px;
      font-weight: bold;
      font-style: italic;
      padding: 0;
      margin: 15px 0 5px;
    }

    dl dt:first-child {
      padding: 0;
    }

    dl dt > :first-child {
      margin-top: 0;
    }

    dl dt > :last-child {
      margin-bottom: 0;
    }

    dl dd {
      margin: 0 0 15px;
      padding: 0 15px;
    }

    dl dd > :first-child {
      margin-top: 0;
    }

    dl dd > :last-child {
      margin-bottom: 0;
    }

    blockquote {
      border: 1px #f0f0f0 solid;
      border-left: 4px solid #9bf;
      padding: 10px 15px;
      color: #666;
      background-color: #f5f5f5;
      border-radius: 4px;
    }

    blockquote > :first-child {
      margin-top: 0;
    }

    blockquote > :last-child {
      margin-bottom: 0;
    }

    table {
      padding: 0;
      empty-cells: show;
      border: 1px solid #cbcbcb;
      border-collapse: collapse;
      border-spacing: 0;
    }
    table tr {
      border-top: 1px solid #cccccc;
      background-color: white;
      margin: 0;
      padding: 0;
    }
    table th{
      background-color: #e5e5e5;
      color: #000;
      text-align: left;
      vertical-align: bottom;
      border: 1px solid #cbcbcb;
      padding: 10px;
      word-wrap: none;
      white-space: nowrap;
    }
    table tr:nth-child(2n) {
      background-color: #f8f8f8;
    }

    table tr th {
      font-weight: bold;
      border: 1px solid #cccccc;
      text-align: left;
      margin: 0;
      padding: 6px 13px;
    }

    table tr td {
      border: 1px solid #cccccc;
      text-align: left;
      margin: 0;
      padding: 6px 13px;
    }

    table tr th :first-child, table tr td :first-child {
      margin-top: 0;
    }

    table tr th :last-child, table tr td :last-child {
      margin-bottom: 0;
    }

    img {
      max-width: 100%;
    }

    span.frame {
      display: block;
      overflow: hidden;
    }

    span.frame > span {
      border: 1px solid #dddddd;
      display: block;
      float: left;
      overflow: hidden;
      margin: 13px 0 0;
      padding: 7px;
      width: auto;
    }

    span.frame span img {
      display: block;
      float: left;
    }

    span.frame span span {
      clear: both;
      color: #333333;
      display: block;
      padding: 5px 0 0;
    }

    span.align-center {
      display: block;
      overflow: hidden;
      clear: both;
    }

    span.align-center > span {
      display: block;
      overflow: hidden;
      margin: 13px auto 0;
      text-align: center;
    }

    span.align-center span img {
      margin: 0 auto;
      text-align: center;
    }

    span.align-right {
      display: block;
      overflow: hidden;
      clear: both;
    }

    span.align-right > span {
      display: block;
      overflow: hidden;
      margin: 13px 0 0;
      text-align: right;
    }

    span.align-right span img {
      margin: 0;
      text-align: right;
    }

    span.float-left {
      display: block;
      margin-right: 13px;
      overflow: hidden;
      float: left;
    }

    span.float-left span {
      margin: 13px 0 0;
    }

    span.float-right {
      display: block;
      margin-left: 13px;
      overflow: hidden;
      float: right;
    }

    span.float-right > span {
      display: block;
      overflow: hidden;
      margin: 13px auto 0;
      text-align: right;
    }

    code, tt {
      margin: 0 2px;
      padding: 5px;
      white-space: nowrap;
      // border: 1px solid #eef;
      background-color: #ddf;
      border-radius: 3px;
      color: #222;
    }

    pre code {
      margin: 0;
      padding: 0;
      white-space: pre;
      border: none;
      background: transparent;
      color: #444;
    }

    .highlight pre {
      background-color: #f8f8f8;
      border: 1px solid #cccccc;
      font-size: 13px;
      line-height: 19px;
      overflow: auto;
      padding: 6px 10px;
      border-radius: 3px;
    }

    pre {
      background-color: #fafafa;
      border: 1px solid #ddf;
      font-size: 13px;
      line-height: 19px;
      overflow: auto;
      padding: 5px;
      border-radius: 3px;
    }

    pre code, pre tt {
      background-color: transparent;
      border: none;
    }
  }

  .demo-area{
    position: fixed;
    top: 80px;
    right: 10px;
    width: 330px;
    height: 600px;
    padding: 10px;

    .demo-phone{
      height: 600px;
      width: 310px;
      padding: 40px 5px;
      border-radius: 20px;
      box-shadow: 0 0 10px #000;
      border: 1px #ccc solid;
      background-color: #e7e8e9;
    }
    .demo-phone>div{
      border: 1px #ccc solid; 
      border-radius: 4px;
      width: 100%;
      height: 100%;
      background-color: #f5f5f5;
    }

    .page-qrcode{
      text-align: center;
      padding-top: 10px;
    }
  }
  
  .hljs{display:block;overflow-x:auto;padding:0.5em;color:#383a42;background:#fafafa}.hljs-comment,.hljs-quote{color:#a0a1a7;font-style:italic}.hljs-doctag,.hljs-keyword,.hljs-formula{color:#a626a4}.hljs-section,.hljs-name,.hljs-selector-tag,.hljs-deletion,.hljs-subst{color:#e45649}.hljs-literal{color:#0184bb}.hljs-string,.hljs-regexp,.hljs-addition,.hljs-attribute,.hljs-meta-string{color:#50a14f}.hljs-built_in,.hljs-class .hljs-title{color:#c18401}.hljs-attr,.hljs-variable,.hljs-template-variable,.hljs-type,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-number{color:#986801}.hljs-symbol,.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-title{color:#4078f2}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}.hljs-link{text-decoration:underline}
}
</style>
