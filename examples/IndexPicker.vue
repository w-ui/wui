<template>
    <div>
        <div class="log"></div>
        <w-indexpicker>
            <div style="height: 1200px"></div>
        </w-indexpicker>
    </div>

</template>

<script>
import { IndexPicker } from "packages/index-picker";
export default {
  components: {
    "w-indexpicker": IndexPicker
  }
};
</script>

<<style lang="less">
.log{
    height: 150px;
    overflow: auto;
    background: #ddd;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
}
</style>

