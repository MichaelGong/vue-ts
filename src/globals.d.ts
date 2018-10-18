declare module 'vue-grid-layout' {
  import Vue from 'vue';
  export class GridLayout extends Vue {}
  export class GridItem extends Vue {}
}
/* fix ElementUI Scrollbar 没有types */
declare module 'element-ui' {
  import { ElementUIComponent } from 'element-ui/types/component';
  class ElScrollbar extends ElementUIComponent {}

  export * from 'element-ui/types';
  export class Scrollbar extends ElScrollbar {}
}
