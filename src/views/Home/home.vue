<template>
  <div class='home'>
    <img
      alt='Vue logo'
      src='../../assets/logo.png'>
    <HelloWorld msg='Welcome to Your Vue.js + TypeScript App 哈哈哈4'/>
    <GridLayout
      :layout="layout"
      :auto-size="true"
      :col-num="24"
      :row-height="50"
      :max-rows="100"
      :is-draggable="true"
      :is-resizable="true"
      :vertical-compact="false"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <GridItem
        v-for="item in layout"
        :key="item.i"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        
      >
        {{item.i}}
      </GridItem>
    </GridLayout>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import VueGridLayout from 'vue-grid-layout';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

const GridLayout = VueGridLayout.GridLayout;
const GridItem = VueGridLayout.GridItem;

interface Ilayout {
  x: number;
  y: number;
  w: number;
  h: number;
  i: number;
}

@Component({
  components: {
    HelloWorld,
    GridLayout,
    GridItem,
  },
})
export default class Home extends Vue {
  private layout: Ilayout[] = [
    { x: 0, y: 0, w: 1, h: 1, i: 0 },
    { x: 0, y: 1, w: 1, h: 1, i: 1 },
    { x: 0, y: 2, w: 1, h: 1, i: 2 },
    { x: 0, y: 3, w: 1, h: 1, i: 3 },
    { x: 1, y: 0, w: 1, h: 1, i: 4 },
    { x: 1, y: 1, w: 1, h: 1, i: 5 },
    { x: 1, y: 2, w: 1, h: 1, i: 6 },
    { x: 1, y: 3, w: 1, h: 1, i: 7 },
    { x: 2, y: 0, w: 1, h: 1, i: 8 },
    { x: 2, y: 1, w: 1, h: 1, i: 9 },
    { x: 2, y: 2, w: 1, h: 1, i: 10 },
    { x: 2, y: 3, w: 1, h: 1, i: 11 },
    { x: 3, y: 0, w: 1, h: 1, i: 12 },
    { x: 3, y: 1, w: 1, h: 1, i: 13 },
    { x: 3, y: 2, w: 1, h: 1, i: 14 },
    { x: 3, y: 3, w: 1, h: 1, i: 15 },
    { x: 4, y: 0, w: 1, h: 1, i: 16 },
    { x: 4, y: 1, w: 1, h: 1, i: 17 },
    { x: 4, y: 2, w: 1, h: 1, i: 18 },
    { x: 4, y: 3, w: 1, h: 1, i: 19 },
  ];
}
</script>
<style lang="less">
.vue-grid-layout {
  user-select: none;
}
.vue-grid-item {
  background: green;
}
</style>

