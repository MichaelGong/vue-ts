<template>
<div id="app" class="flex">
  <el-container>
    <el-aside width="256px" style="background-color: rgb(238, 241, 246)">
      <Nav />
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <a href="https://happybug.top" target="_blank" class="link">博客</a>
        <a href="https://github.com/MichaelGong" target="_blank" class="link">Github</a>
      </el-header>

      <el-main class="content--outer">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';

@Component({
  components: {
    Nav,
  },
})
export default class App extends Vue {
  public created(): void {
    // console.log('=');
  }
}
</script>
<style lang="less" scoped>
.content--outer {
  margin-top: 60px;
  height: 100%;
}
.link {
  display: inline-block;
  height: 60px;
  color: #444;
  line-height: 60px;
  padding: 0 15px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 400;
  text-decoration: none;
  &:hover {
    color: #409eff;
  }
}
.el-aside {
  z-index: 100;
  background: #001529;
  box-shadow: 2px 0 6px rgba(0,21,41,.35);
}
.el-header {
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - 256px);
  line-height: 60px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  z-index: 50;
}
</style>
