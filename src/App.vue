<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <div id="app">
      <h1 @click="changeUserNameHandler">{{ userInfo.userName }}</h1>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <span @click="goAbout">About</span>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { UserInfo } from '@/store/common/types';

const namespace: string = 'common';

@Component
export default class App extends Vue {
  @Action('changeUserName', { namespace }) private changeUserName: any;
  @State('userInfo', { namespace }) private userInfo!: UserInfo;

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


<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
