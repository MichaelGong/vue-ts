<template>
<div class="nav nav--fixed flex flex-v">
  <div class="nav__logo" >
    <img src="../assets/xy1.png" alt="" class="nav__logo--img">
  </div>
  <el-scrollbar class="flex-1 nav__scrollbar">
    <el-menu
      :unique-opened="true"
      :default-active="$route.matched[0] ? $route.matched[0].name : ''"
    >
      <template
        v-for="menu in menuConfig"
      >
        <el-submenu
          v-if="menu.children && menu.children.length > 0"
          :key="menu.id"
          :index="menu.id"
        >
          <template slot="title">
            <i :class="menu.icon"></i>
            <span slot="title">{{ menu.name }}</span>
          </template>
          <el-menu-item
            v-for="submenu in menu.children"
            :key="submenu.id"
            :index="submenu.id"
            @click.native="goUrl(submenu.url)"
          >{{ submenu.name }}</el-menu-item>
        </el-submenu>
        <el-menu-item
          v-else
          :key="menu.id"
          :index="menu.id"
          @click.native="goUrl(menu.url)"
        >{{ menu.name }}</el-menu-item>
      </template>
    </el-menu>
  </el-scrollbar>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { menuConfig } from '@/config';
import { IMenuConfig } from '@/config/types';

@Component
export default class ONav extends Vue {
  private falsy: boolean = false;
  private menuConfig: IMenuConfig[] = menuConfig;

  public goUrl(url: string): void {
    if (
      url.indexOf('http://') === 0
      || url.indexOf('https://') === 0
    ) {
      window.open(url);
    } else {
      this.$router.push(url);
    }
  }
}
</script>
<style lang="less" >
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
    color: hsla(0, 0%, 100%, 0.65);
    i {
      color: hsla(0, 0%, 100%, 0.65);
    }
    &:focus, &:hover {
      background-color: transparent;
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
  .el-submenu {
    &.is-active, &.is-active .el-submenu__title {
      color: #fff;
      i {
        color: #fff;
      }
    }
    .el-menu {
      background: #000c17;
    }
  }
  .el-submenu__icon-arrow {
    font-weight: bold;
  }
}
</style>

