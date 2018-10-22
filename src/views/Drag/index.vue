<template>
  <div class="min-h-100 h-100 white">
    <h1 class="infoname">Vue的拖拽指令</h1>
    <div class="home-drag" v-drag>拖拽</div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

@Component({
  components: {
  },
})
export default class Drag extends Vue {
}
</script>
<style lang="less" scoped>
.home {
  position: relative;
  z-index: 2000;
  &-drag {
    width: 80px;
    height: 80px;
    cursor: move;
    background: #1890ff;
    border-radius: 4px;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
}
</style>

