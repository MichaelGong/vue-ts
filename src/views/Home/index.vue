<template>
<div class="home white h-100">
  <div style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index: 1;">
    <vueCanvasNest :config="{color:'#666'}" class="nest" />
  </div>
  <h1 class="name">逍遥很晕</h1>
  <p class="info__item">职位：前端</p>
  <p class="info__item">技能：Vue全家桶、React全家桶、Node、TypeScript、Less、Scss、ES6、Webpack、Babel</p>
  <p class="info__item">公司：现就职于美团</p>
</div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import vueCanvasNest from 'vue-canvas-nest';

const namespace: string = 'test';

@Component({
  components: {
    vueCanvasNest,
  },
})
export default class Home extends Vue {
  public async created() {
    /* tslint:disable:no-console */
    console.log('created');
    throw new Error('dddd');
  }
}
</script>
<style lang="less" scoped>
.home {
  // position: relative;
  padding: 40px;
  // .nest {
  //   position: absolute;
  //   left: 0; 
  // }
  .name {
    font-size: 35px;
    font-weight: 400;
    // text-align: center;
  }
  .info__item {
    margin: 10px 0;
  }
}
</style>

