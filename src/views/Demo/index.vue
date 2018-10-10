<template>
<div class="demo">
  <div class="demo__content">
    <span class="demo__content--title">数据Data：</span>
    <span class="demo__content--desc">{{msg}}</span>
  </div>
  <el-button
    size="small"
    @click="changeMsg"
  >
    点我更新data数据
  </el-button>

  <div class="demo__content">
    <span class="demo__content--title">v-show：</span>
    <span class="demo__content--desc">
      <span v-show="true">展示</span>
    </span>
  </div>
  <div class="demo__content">
    <span class="demo__content--title">v-if/v-else-if/v-else：</span>
    <span class="demo__content--desc">
      <span v-if="num === 2">num的值为2</span>
      <span v-else-if="num === 3">num的值为3</span>
      <span v-else>num的值：{{num}}</span>
    </span>
  </div>
  <div class="demo__content">
    <span class="demo__content--title">v-for：</span>
    <span class="demo__content--desc">
      <a href="https://cn.vuejs.org/v2/api/#v-for">官网</a>
    </span>
  </div>
  <div class="demo__content">
    <span class="demo__content--title">v-on / @：</span>
    <span class="demo__content--desc">
      <a href="https://cn.vuejs.org/v2/api/#v-on">官网</a>
    </span>
  </div>
  <div class="demo__content">
    <span class="demo__content--title">v-bind / :：</span>
    <span class="demo__content--desc">
      <a href="https://cn.vuejs.org/v2/api/#v-bind">官网</a>
      <span class="padding-l-10" :text-content.prop="msg" :tt="msg"></span>
    </span>
  </div>
  <div class="demo__content">
    <span class="demo__content--title">v-model：</span>
    <span class="demo__content--desc">
      <input type="text" v-model="text">
      <input type="text" class="margin-l-10" v-model.lazy="text">
    </span>
  </div>

  <div class="demo__content">
    <span class="demo__content--title">组件与插槽：</span>
    <span class="demo__content--desc">
      <SubDemo v-model="subDemoIsShow" :text.sync="text">
        <template slot="subdemo-header">
          <h2>头slot</h2>
        </template>
        <main>主Slot</main>
        <template slot="subdemo-footer">
          <div>footer slot</div>
        </template>
      </SubDemo>
    </span>
  </div>

  <div class="demo__content">
    <span class="demo__content--title">$nextTick：</span>
    <span class="demo__content--desc">
      <a target="_blank" href="https://cn.vuejs.org/v2/api/#vm-nextTick">官网</a>
    </span>
  </div>

  vm.$nextTick
</div>
</template>
<script lang="ts">
/* tslint:disable:no-console */
import { Component, Vue } from 'vue-property-decorator';
import { ComponentOptions } from 'vue';
import SubDemo from './subDemo.vue';
function clog(preStr: any) {
  return function innerlog(str: any) {
    console.log(preStr, str);
  };
}
const lifeLog = clog('生命周期:');

@Component({
  components: {
    SubDemo,
  },
})
export default class Demo extends Vue {
  private msg: string = '这里是data数据';
  private num: number = 0;
  private text: string = '';
  // computed
  get subDemoIsShow() {
    return this.num < 3;
  }
  set subDemoIsShow(val) {
    this.num = 5;
  }

  public beforeCreate() {
    lifeLog('beforeCreate');
  }
  public created() {
    lifeLog('created');
  }
  public beforeMount() {
    lifeLog('beforeMount');
  }
  public mounted() {
    lifeLog('mounted');
  }
  public beforeUpdate() {
    lifeLog('beforeUpdate');
  }
  public updated() {
    lifeLog('updated');
  }
  public activated() {
    lifeLog('activated');
  }
  public deactivated() {
    lifeLog('deactivated');
  }
  public beforeDestroy() {
    lifeLog('beforeDestroy');
  }
  public destroyed() {
    lifeLog('destroyed');
  }
  public errorCaptured() {
    lifeLog('errorCaptured');
  }

  private changeMsg() {
    this.msg = `${this.msg}${this.num++}`;
  }
}

</script>
<style lang="less" scoped>
.demo {
  padding: 20px;
  text-align: left;
  .padding-l-10 {
    padding-left: 10px;
  }
  .margin-l-10 {
    margin-left: 10px;
  }
  &__content {
    &--title {
      font-size: 20px;
      font-weight: 700;
    }
    &--desc {
      padding-left: 10px;
    }
    input {
      border: 1px solid #666;
    }
  }
}
</style>


