<template>
  <div v-show="currentValue">
    <div @click="emitText">SubDemo --- {{text}}</div>
    <slot name="subdemo-header" />
    <div style="margin: 20px;" @click="changeCurrentValue">
      <slot></slot>
    </div>
    <slot name="subdemo-footer"></slot>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component({})
export default class SubDemo extends Vue {
  @Prop(String) private text!: string;
  @Prop({ default: true, type: Boolean }) private value!: boolean;
  private currentValue = true;

  private emitText() {
    this.$emit('update:text', '子组件修改了text的值');
  }
  private changeCurrentValue() {
    this.currentValue = false;
  }
  @Watch('value')
  private onValueChange(val: boolean) {
    this.currentValue = val;
  }
  @Watch('currentValue')
  private onCurrentValueChange(val: boolean) {
    this.$emit('input', val);
  }
}
</script>

