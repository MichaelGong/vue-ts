<template>
<div class="nav nav--fixed flex flex-v">
  <div class="nav__logo" v-drag>
    <img src="../assets/xy2.png" alt="" class="nav__logo--img">
  </div>
  <el-scrollbar class="flex-1 nav__scrollbar">
    <el-menu
      :unique-opened="true"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="1-1">菜单一</el-menu-item>
        <el-menu-item index="1-2">菜单一</el-menu-item>
        <el-menu-item index="1-3">菜单一</el-menu-item>
        <el-menu-item index="1-4">菜单一</el-menu-item>
        <el-menu-item index="1-5">菜单一</el-menu-item>
        <el-menu-item index="1-6">菜单一</el-menu-item>
        <el-menu-item index="1-7">菜单一</el-menu-item>
        <el-menu-item index="1-8">菜单一</el-menu-item>
        <el-menu-item index="1-9">菜单一</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-scrollbar>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class ONav extends Vue {
  private falsy: boolean = false;
}
</script>
<style lang="less" scoped>
.nav {
  background: #001529;
  &__logo {
    // text-align: center;
    line-height: 60px;
    padding-left: 25px;
    background: #002140;
    &--img {
      height: 45px;
      vertical-align: middle;
    }
  }
  &__scrollbar {
    margin-bottom: -15px;
  }
  .sidebar-container .scrollbar-wrapper {
    overflow-x: hidden!important;
  }
  .el-scrollbar__wrap {
    height: 100%;
    overflow: scroll;
  }
  .el-scrollbar__view {
    height: 100%;
  }
  &--fixed {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 256px;
    z-index: 100;
  }
  .el-menu {
    height: 100%;
    background: #001529;
    border-right: none;
  }
  .el-submenu__title {
    color: #fff;
    &:focus, &:hover {
      background-color: transparent;
    }
    i {
      color: #fff;
    }
  }
  .el-menu-item {
    color: hsla(0, 0%, 100%, 0.65);
    &:focus, &:hover {
      background-color: transparent;
      color: #fff;
    }
    &.is-active {
      background-color: #1890ff;
      color: #fff;
    }
  }
  .el-submenu .el-menu {
    background: #000c17;
  }
  .el-submenu__icon-arrow {
    font-weight: bold;
  }
}
</style>

