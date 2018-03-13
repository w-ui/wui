<template>
	<div>
    <div class="paragraph">
			<div v-sortable="{onUpdate: onUpdate, preventOnFilter: false}" class="sort-list">
				<div v-for="(v,i) in list" :key="v" class="sort-item">
					{{v}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import { Sortable } from 'packages/sortable'
Vue.use(Sortable)

export default {
  data() {
    return {
      list: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    }
  },
  methods: {
    onUpdate: function(data) {
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

