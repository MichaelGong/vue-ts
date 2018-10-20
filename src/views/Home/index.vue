<template>
  <div class="home white h-100">
    <h1 class="name">逍遥很晕</h1>
    <p class="info__item">职位：前端</p>
    <p class="info__item">技能：Vue全家桶、React全家桶、Node、TypeScript、Less、Scss、ES6、Webpack、Babel</p>
    <p class="info__item">公司：现就职于美团</p>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

const namespace: string = 'test';

@Component({
  components: {
  },
})
export default class Home extends Vue {
  public async created() {
    /* tslint:disable:no-console */
    console.log('created');
  }
}
</script>
<style lang="less" scoped>
.home {
  padding: 40px;
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

