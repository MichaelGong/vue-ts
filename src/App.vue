<template>
<div id="app">
  <el-container>
    <el-aside width="256px" style="background-color: rgb(238, 241, 246)">
      <Nav />
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main class="content--outer">
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';
import { UserInfo } from '@/store/common/types';
import Nav from '@/components/Nav.vue';

const namespace: string = 'common';
const item = {
  date: '2016-05-02',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1518 弄',
};
@Component({
  components: {
    Nav,
  },
})
export default class App extends Vue {
  @Action('changeUserName', { namespace }) private changeUserName: any;
  @State('userInfo', { namespace }) private userInfo!: UserInfo;
  @Getter('userName', { namespace }) private userName!: string;

  private tableData = Array(20).fill(item);
  public created(): void {
    // console.log('=');
  }
  public goAbout(): void {
    this.$router.push('/about');
  }
  public changeUserNameHandler(): void {
    this.changeUserName();
  }
}
</script>
<style lang="less" scoped>
.content--outer {
  padding-top: 80px;
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
