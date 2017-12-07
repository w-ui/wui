#  Sortable 拖拽排序

### 概述

vue指令，拖拽排序

```html
<div v-sortable="{onUpdate: onUpdate, preventOnFilter: false}">
	<div v-for="v in list" :key="v">
		{{v}}
	</div>
</div>
```
	
### Demo

```html
<template>
	<div v-sortable="{onUpdate: onUpdate, preventOnFilter: false}" class="sort-list">
		<div v-for="(v,i) in list" :key="v" class="sort-item">
			{{v}}
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import Sortable from 'packages/sortable'
Vue.use(Sortable)

export default {
	data() {
		return {
	    list: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
		}
  },
  methods: {
    onUpdate: function (data) {
      this.list.splice(data.newIndex, 0, this.list.splice(data.oldIndex, 1)[0])
    }
  }
}

</script>

<style>
	.sort-list {
		border: 1px solid #f6f6f6;
		width: 100%;
	}
	.sort-item {
		border-top: 1px solid #ccc;
		height: 40px;
		line-height: 40px;
		background: #f0f0f0;
	}
	.sortable-chosen {
		background: #f5f5f5;
	}

</style>

```



### API 属性介绍 Attributes:
name            |           type |  default   |                        description
--------------- | -------------: | :--------: | :--------------------------------------------------------:
group           |  String  |    'name'  |   or { name: "...", pull: [true, false, clone], put: [true, false, array] }
delay           |  number  |    0       |  延迟时间 time in milliseconds to define when the sorting should start
sort            |  Boolean |   true     |                 是否排序sorting inside list
disabled        |  Boolean |   false    |  drag功能失效Disables the sortable if set to trueshould start
animation       |  Boolean |   150      |  ms, animation speed moving items when sorting, `0` — without animation
preventOnFilter |  Boolean |  true |  不阻止非filter区域的默认事件 Call `event.preventDefault()` when triggered `filter`
store           |  Object  |  null    |  @see Store
handle          |  String  |         '.my-handle'   |Drag handle selector within list itemsfilter
filter        |  String|    ".ignore-elements"        |  过滤不拖拽的元素 Selectors that do not lead to dragging (String or Function) should filter
draggable        |  String|   ".item"         |Specifies which items inside the element should be draggable
ghostClass     |  String|   "sortable-ghost"| // Class name for the drop placeholder
chosenClass     |  String|  "sortable-chosen" |   // Class name for the chosen item
dragClass     |  String|   "sortable-drag"|  // Class name for the dragging item
dataIdAttr     |  String|   'data-id'| 
forceFallback     |  String|   false|  // ignore the HTML5 DnD behaviour and force the fallback to kick in
fallbackClass     |  String|  "sortable-fallback"|   // Class name for the cloned DOM Element when using forceFallback
fallbackOnBody     |  String|  false|   // Appends the cloned DOM Element into the Document's Body
fallbackTolerance     |  String|   0|  // Specify in pixels how far the mouse should move before it's considered as a drag.        
scroll     |  String|   true|  // or HTMLElement
scrollFn     |  String|   function(offsetX, offsetY, originalEvent) { ... }|  // if you have custom scrollbar scrollFn may be used for autoscrolling
scrollSensitivity     |  String|  30|  // px, how near the mouse must be to an edge to start scrolling.
scrollSpeed     |  String|  10| // px





### 函数api
#### 1.setData
```
function (/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
	dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
}
```
#### 2. onChoose:
```
function (/**Event*/evt) {
	evt.oldIndex;  // element index within parent
}
```

#### 3. onStart: 
```
// Element dragging started

function (/**Event*/evt) {
	evt.oldIndex;  // element index within parent
}
```

#### 4. onEnd: 
```
// Element dragging ended
function (/**Event*/evt) {
	evt.oldIndex;  // element's old index within parent
	evt.newIndex;  // element's new index within parent
},
```

#### 5. onAdd: 
```
// Element is dropped into the list from another list
function (/**Event*/evt) {
	var itemEl = evt.item;  // dragged HTMLElement
	evt.from;  // previous list
	// + indexes from onEnd
},
```

#### 6. onUpdate: 
```
// Changed sorting within list
function (/**Event*/evt) {
	var itemEl = evt.item;  // dragged HTMLElement
	// + indexes from onEnd
},
```

#### 7. onSort: 
```
// Called by any change to the list (add / update / remove)
function (/**Event*/evt) {
	// same properties as onUpdate
},
```

#### 8. onRemove: 
```
// Element is removed from the list into another list
function (/**Event*/evt) {
	// same properties as onUpdate
},
```

#### 9. onFilter: 
```
// Attempt to drag a filtered element
function (/**Event*/evt) {
	var itemEl = evt.item;  // HTMLElement receiving the `mousedown|tapstart` event.
},
```

#### 10. onMove: 
```
// Event when you move an item in the list or between lists
function (/**Event*/evt, /**Event*/originalEvent) {
	// Example: http://jsbin.com/tuyafe/1/edit?js,output
	evt.dragged; // dragged HTMLElement
	evt.draggedRect; // TextRectangle {left, top, right и bottom}
	evt.related; // HTMLElement on which have guided
	evt.relatedRect; // TextRectangle
	originalEvent.clientY; // mouse position
	// return false; — for cancel
},
```

#### 11. onClone: 
```	
// Called when creating a clone of element
function (/**Event*/evt) {
	var origEl = evt.item;
	var cloneEl = evt.clone;
}
```
