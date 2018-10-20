<template>
<div class="white h-100 flex flex-v">
  <h1 class="infoname">Filter中的hue-rotate属性的使用</h1>
  <div class="flex-1">
    <div class="hue-auto"></div>
  </div>
</div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class FilterHue extends Vue {
}
</script>

<style lang="less" scoped>
.hue-auto{
  width: 100%;
  height: 100%;
  background: url(../../assets/hue.jpg);
  background-size: 100% 100%;
  -webkit-animation: hueauto 5s infinite;
  animation: hueauto 5s infinite;
}
@keyframes hueauto{
  0%{
    -webkit-filter: hue-rotate(0deg);
    -moz-filter: hue-rotate(0deg);
    filter: hue-rotate(0deg);
  }
  100%{
    -webkit-filter: hue-rotate(360deg);
    -moz-filter: hue-rotate(360deg);
    filter: hue-rotate(360deg);
  }
}
</style>