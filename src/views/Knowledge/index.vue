<template>
<section class="white h-100 padding-15">
  <ul>
    <li
      v-for="(item, index) in list"
      :key="item.url"
    >
      {{index + 1}}、<a :href="item.url" target="_blank">{{item.name}}</a>
    </li>
  </ul>
</section>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class KnowLedge extends Vue {
  public list = [{
    url: 'https://juejin.im/post/5c15f797f265da61141c7f86?utm_source=gold_browser_extension',
    name: '浏览器重绘重排',
  }, {
    url: 'https://juejin.im/post/5c1dde33f265da61776bf49a?utm_source=gold_browser_extension',
    name: '浏览器是如何解析html的？',
  }];
}
</script>

<style lang="less" scoped>

</style>