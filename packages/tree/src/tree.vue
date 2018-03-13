<template>
  <ul class="wui-tree">
      <li v-for="(item, index) in data" @drop="drop(item, $event)" @dragover="dragover($event)" :key="item.title" :class="{leaf: isLeaf(item), 'first-node': !parent && index === 0, 'only-node': !parent && data.length === 1}"  v-show="item.hasOwnProperty('visible') ? item.visible : true">
          <div :class="['tree-node-el', item.disabled ? 'chkDisabled' : '']" :draggable="draggable" @dragstart="drag(item, $event)">
              <span @click="expandNode(item)" v-if="item.children && item.children.length > 0" :class="item.expanded ? 'tree-open' : 'tree-close'">
              </span>
              <span @click="nodeSelected(item, $event)" class="tree-node-title">{{item.title}}</span>
              <div v-if='multiple && !item.nocheck' :class="[item.checked ? (item.halfcheck ? 'box-halfchecked' : 'box-checked') : 'box-unchecked', 'inputCheck', item.disabled ? 'chkDisabled' : '']">
                  <input :disabled="item.disabled" :class="['check', item.disabled ? 'chkDisabled' : '']" v-if='multiple' type="checkbox" @change="changeNodeCheckStatus(item, $event)" v-model="item.checked"/>
              </div>
          </div>
          <transition name="bounce">
            <w-tree v-if="!isLeaf(item)" @node-click='nodeClick' @drag-node-end='dragNodeEnd' :dragAfterExpanded="dragAfterExpanded" :draggable="draggable" v-show="item.expanded" :data="item.children" :halfcheck='halfcheck' :scoped='scoped' :parent ='item' :multiple="multiple"></w-tree>
          </transition>
      </li>
  </ul>
</template>
<script>
import Render from './render'

export default {
  name: 'w-tree',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    parent: {
      type: Object,
      default: () => null
    },
    multiple: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    dragAfterExpanded: {
      type: Boolean,
      default: true
    },
    halfcheck: {
      type: Boolean,
      default: false
    },
    scoped: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Render
  },
  watch: {
    data() {
      this.initHandle()
    }
  },
  mounted() {
    /*
     * @event monitor the children nodes seleted event
     */
    this.$on('childChecked', (node, checked) => {
      if (node.children && node.children.length) {
        for (let child of node.children) {
          if (child.disabled) return
          this.$set(child, 'checked', checked)
          this.$emit('nodeChecked', child, checked)
        }
      }
    })

    /*
     * @event monitor the parent nodes seleted event
     */
    this.$on('parentChecked', (node, checked) => {
      this.$set(node, 'checked', checked)
      if (!node.parent) return false
      let someBortherNodeChecked = node.parent.children.some(
        node => node.checked
      )
      let allBortherNodeChecked = node.parent.children.every(
        node => node.checked
      )
      if (this.halfcheck) {
        // all / some / none
        allBortherNodeChecked
          ? this.$set(node.parent, 'halfcheck', false)
          : someBortherNodeChecked
            ? this.$set(node.parent, 'halfcheck', true)
            : this.$set(node.parent, 'halfcheck', false)
        if (!checked && someBortherNodeChecked) {
          this.$set(node.parent, 'halfcheck', true)
          return false
        }
        this.$emit('parentChecked', node.parent, checked)
      } else {
        if (checked && allBortherNodeChecked)
          this.$emit('parentChecked', node.parent, checked)
        if (!checked) this.$emit('parentChecked', node.parent, checked)
      }
    })

    /*
     * @event monitor the node seleted event
     */
    this.$on('nodeChecked', (node, checked) => {
      if (!this.scoped) {
        this.$emit('parentChecked', node, checked)
        this.$emit('childChecked', node, checked)
      } else {
        this.$set(node, 'checked', checked)
      }
    })

    /*
     * @event monitor the node visible event
     */
    this.$on('toggleshow', (node, isShow) => {
      this.$set(node, 'visible', isShow)
      if (isShow && node.parent) {
        this.$emit('toggleshow', node.parent, isShow)
      }
    })

    this.$on('cancelSelected', root => {
      for (let child of root.$children) {
        for (let node of child.data) {
          child.$set(node, 'selected', false)
        }
        if (child.$children) child.$emit('cancelSelected', child)
      }
    })
    this.initHandle()
  },
  methods: {
    /* @method drop node
     * @param node droped node
     * @param ev  $event
    */
    drop(node, ev) {
      ev.preventDefault()
      ev.stopPropagation()
      let guid = ev.dataTransfer.getData('guid')
      let drag = this.getDragNode(guid)
      // if drag node's parent is enter node or root node
      if (drag.parent === node || drag.parent === null) return false
      // drag from parent node to child node
      if (this.hasInGenerations(drag, node)) return false
      let dragHost = drag.parent.children
      if (node.children && node.children.indexOf(drag) === -1) {
        node.children.push(drag)
        dragHost.splice(dragHost.indexOf(drag), 1)
      } else {
        this.$set(node, 'children', [drag])
        dragHost.splice(dragHost.indexOf(drag), 1)
      }
      this.$set(node, 'expanded', this.dragAfterExpanded)
      this.$emit('drag-node-end', { dragNode: drag, targetNode: node })
    },
    /* @method drag node
     * @param node draged node
     * @param ev  $event
    */
    drag(node, ev) {
      let guid = this.guid()
      this.setDragNode(guid, node)
      ev.dataTransfer.setData('guid', guid)
    },
    /* @method dragover node
     * @param ev  $event
    */
    dragover(ev) {
      ev.preventDefault()
      ev.stopPropagation()
    },
    /*
    * @method dynamically add an 'parent' attribute for every node
    */
    initHandle() {
      for (let node of this.data) {
        this.$set(node, 'parent', this.parent)
      }
    },
    /* @method expand or close node
     * @param node current node
    */
    expandNode(node) {
      this.$set(node, 'expanded', !node.expanded)
    },
    /* @method Determine whether it is a leaf node
     * @param node current node
    */
    isLeaf(node) {
      return !(node.children && node.children.length)
    },
    /* @method adding child node
     * @param node parent node
     * @param newnode  new node
    */
    addNode(parent, newNode) {
      this.$set(parent, 'expanded', true)
      let addnode = null
      if (typeof newNode === 'undefined') {
        throw new ReferenceError('newNode is required but undefined')
      }
      if (typeof newNode === 'string') {
        addnode = { title: newNode }
      } else {
        if (newNode && !newNode.hasOwnProperty('title')) {
          throw new ReferenceError('the property (title) is missed')
        }
        addnode = newNode
      }
      if (this.isLeaf(parent)) {
        this.$set(parent, 'children', [])
        parent.children.push(addnode)
      } else {
        parent.children.push(addnode)
      }
      this.$emit('addNode', { parentNode: parent, newNode: newNode })
    },
    /* @method adding childlren nodes
     * @param node parent node
     * @param newnode  new node
    */
    addNodes(node, children) {
      for (let n of children) {
        this.addNode(node, n)
      }
    },
    /* @event passing the node-click event to the parent component
     * @param node clicked node
     */
    nodeClick(node) {
      this.$emit('node-click', node)
    },

    /* @event passing the drag-node-end event to the parent component
     * @param node clicked node
     */
    dragNodeEnd(event) {
      this.$emit('drag-node-end', event)
    },
    /* @method delete a node
     * @param  parent parent node
     * @param  node current node
     */
    delNode(parent, node) {
      if (parent === null || typeof parent === 'undefined') {
        throw new ReferenceError("the root element can't deleted!")
      }
      parent.children.splice(parent.children.indexOf(node), 1)
      this.$emit('delNode', { parentNode: parent, delNode: node })
    },
    /*
     *@method change the check box status method
     *@param node current node
     *@param $event event object
     */
    changeNodeCheckStatus(node, $event) {
      this.$emit('nodeChecked', node, $event.target.checked)
    },

    /*
     *@method change the node selected  method
     *@param node current node
     */
    nodeSelected(node) {
      if (node.nocheck) return
      if (node.disabled) return

      const getRoot = el => {
        if (el.$parent.$el.nodeName === 'UL') {
          el = el.$parent
          return getRoot(el)
        }
        return el
      }
      let root = getRoot(this)
      if (!this.multiple) {
        for (let rn of root.data) this.$set(rn, 'selected', false)
        this.$emit('cancelSelected', root)
      }
      if (this.multiple) this.$set(node, 'checked', !node.selected)
      this.$set(node, 'selected', !node.selected)
      this.$emit('nodeChecked', node, node.selected)
      this.$emit('node-click', node)
    },

    /*
     *@method get Nodes by options method
     *@param data nodes
     *@param opt the options that filter the node
     */
    getNodes(opt, data) {
      data = data || this.data
      let res = []
      for (const node of data) {
        let tmp = true
        for (const [key, value] of Object.entries(opt)) {
          if (node[key] !== value) {
            tmp = false
            break
          }
        }
        if (tmp) res.push(node)
        if (node.children && node.children.length) {
          res = res.concat(this.getNodes(opt, node.children))
        }
      }
      return res
    },

    /*
     *@method get Nodes that selected
     */
    getSelectedNodes() {
      return this.getNodes({ selected: true }, this.data)
    },

    /*
     *@method get Nodes that checked
     */
    getCheckedNodes() {
      return this.getNodes({ selected: true }, this.data)
    },

    /*
     *@method filter nessary nodes methods
     *@param filter string or predicate expression
     *@param data current nodes
     */
    searchNodes(filter, data) {
      data = data || this.data
      for (const node of data) {
        let searched = filter
          ? typeof filter === 'function'
            ? filter(node)
            : node.title.indexOf(filter) > -1
          : false
        this.$set(node, 'searched', searched)
        this.$set(node, 'visible', false)
        this.$emit('toggleshow', node, filter ? searched : true)
        if (node.children && node.children.length) {
          if (searched) this.$set(node, 'expanded', true)
          this.searchNodes(filter, node.children)
        }
      }
    },

    guid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        let r = (Math.random() * 16) | 0
        let v = c === 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
      })
    },

    setDragNode(guid, node) {
      window['treeDrag'] = {}
      window['treeDrag'][guid] = node
    },

    getDragNode(guid) {
      return window['treeDrag'][guid]
    },

    hasInGenerations(root, node) {
      if (root.hasOwnProperty('children') && root.children) {
        for (let rn of root.children) {
          if (rn === node) return true
          if (rn.children) return hasInGenerations(rn, node)
        }
        return false
      }
    }
  }
}
</script>
<style>
.wui-tree .bounce-enter-active {
  animation: bounce-in 0.5s;
}
.wui-tree .bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.wui-tree .expand-enter-active {
  transition: all 3s ease;
  height: 50px;
  overflow: hidden;
}
.wui-tree .expand-leave-active {
  transition: all 3s ease;
  height: 0px;
  overflow: hidden;
}
.wui-tree .expand-enter,
.wui-tree .expand-leave {
  height: 0;
  opacity: 0;
}
.wui-tree {
  font-size: 0.36rem;
}
.wui-tree ul,
.wui-tree li {
  list-style-type: none;
  text-align: left;
}
.wui-tree .inputCheck {
  flex: 0 0 0.44rem;
  margin-right: 0.2rem;
  position: relative;
  height: 0.44rem;
  border: 1px solid #ccc;
  border-radius: 100%;
}
.wui-tree .inputCheck.notAllNodes:before {
  content: '\2713';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #888888;
  z-index: 1;
  color: #ffffff;
}
.wui-tree .inputCheck.box-checked:after {
  content: ' ';
  background-color: dodgerblue;
  display: block;
  position: absolute;
  z-index: 1;
  width: 60%;
  height: 60%;
  margin: 20%;
  border-radius: 100%;
  text-align: center;
}
.wui-tree .box-halfchecked {
}
.wui-tree .box-halfchecked:after {
  content: ' ';
  display: block;
  position: absolute;
  z-index: 1;
  width: 60%;
  height: 60%;
  border-radius: 100%;
  margin: 20%;
  background-color: #999;
  text-align: center;
  color: #ffffff;
}
.wui-tree .check {
  display: block;
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  left: 0px;
  top: 0px;
  border: 1px solid #ccc;
  opacity: 0;
  cursor: pointer;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
  filter: alpha(opacity=0);
  z-index: 2;
}

.wui-tree .chkDisabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.wui-tree li {
  margin: 0;
  padding: 0.1rem 0px 0.1rem 0;
  position: relative;
  list-style: none;
}
.wui-tree li:after,
.wui-tree li:before {
  content: '';
  left: -8px;
  position: absolute;
  border-width: 1px;
}

.wui-tree li:before {
  border-left: 1px dashed #999;
  top: 0;
  bottom: 0.5rem;
  height: 100%;
  width: 0;
}

.wui-tree li:after {
  border-top: 1px dashed #999;
  height: 0px;
  top: 0.5rem;
  width: 0.28rem;
}
.wui-tree li:last-child::before {
  height: 0.5rem;
}
.wui-tree > li.first-node:before {
  border-left: none;
}
.wui-tree > li.only-node:after {
  border-top: none;
}
.wui-tree > ul {
  padding-left: 0;
}

.wui-tree ul {
  padding-left: 0.34rem;
  padding-top: 5px;
}
.wui-tree .tree-open,
.wui-tree .tree-close {
  display: inline-block;
  width: 0.4rem;
  height: 0.36rem;
  text-align: center;
  line-height: 0.35rem;
  border: 1px solid #888888;
  border-radius: 2px;
  background: #ffffff;
}
.wui-tree .tree-open {
  line-height: 0.35rem;
}
.wui-tree .tree-close:after {
  content: '﹢';
  font-style: normal;
}
.wui-tree .tree-open:after {
  content: '﹣';
  font-style: normal;
}
.wui-tree .tree-node-el {
  background-color: #ffffff;
  padding: 0px 0px 0px 0.2rem;
  height: 0.8rem;
  line-height: 0.8rem;
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
}
.wui-tree .tree-node-el .tree-node-title {
  flex: 1 1 100%;
  padding-left: 10px;
}
.wui-tree .tree-node-el.chkDisabled {
  background-color: #ddd;
}
.wui-tree li.leaf {
  padding-left: 19px;
}

.wui-tree li.leaf:after {
  content: '';
  position: absolute;
  border-top: 1px dashed #999;
  height: 0px;
  top: 0.5rem;
  width: 0.5rem;
}

/*Dynamic style part*/
.wui-tree-search-box {
  height: 18px;
  line-height: 18px;
  outline: none;
  border: 1px solid #888888;
  border-radius: 3px;
}
.wui-tree-search-box:focus {
  border: 1px solid rgb(16, 142, 233);
  -webkit-box-shadow: 0 2px 2px rgba(16, 142, 233, 0.2);
  box-shadow: 0 2px 2px rgba(16, 142, 233, 0.2);
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
.wui-tree .node-title {
  padding: 3px 3px;
  border-radius: 3px;
  margin: 0 2px;
}
.wui-tree .node-selected {
  border: 1px solid #dddddd;
  background-color: #dddddd;
}
.wui-tree .node-title.node-searched {
  border: 1px solid #ff8247;
}
</style>