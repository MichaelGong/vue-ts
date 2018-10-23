<template>
<div class="ticket min-h-100">
  <h1 style="margin-bottom: 15px;font-size: 20px;">实现一个门票的效果</h1>
  <p>
    1、如果背景颜色可以固定或没有特殊需求的话，可以利用定位的方式将小圆点定位过去，方法比较简单，不写代码了
  </p>
  <div class="ticket-item ticket-1" >
    <p>2、利用before、after的border-radius实现(最外层不能有背景颜色)</p>
    <div class="ticket-content">
      <div class="ticket-content-top"></div>
      <div class="ticket-content-middle ticket-1-content-middle"></div>
      <div class="ticket-content-bottom"></div>
    </div>
  </div>
  <div class="ticket-item ticket-2">
    <p>3、利用mask实现</p>
    <div class="ticket-content ticket-2-content">
    </div>
  </div>
  <div class="ticket-item ticket-3">
    <p>4、利用radial-gradient实现</p>
    <div class="ticket-content">
      <div class="ticket-content-top"></div>
      <div class="ticket-content-middle ticket-3-content-middle"></div>
      <div class="ticket-content-bottom"></div>
    </div>
  </div>
  <!--
  https://codepen.io/HelKyle/pen/yRvRyG
  https://codepen.io/lrenhrda/pen/BnKeE
  http://lea.verou.me/2011/03/beveled-corners-negative-border-radius-with-css3-gradients/
  http://dabblet.com/gist/10168919
  https://juejin.im/post/5bc8184ee51d450e81090d94?utm_source=gold_browser_extension
  -->
</div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Ticket extends Vue {

}
</script>

<style lang="less" scoped>
.ticket {
  color: #fff;
  background-color: #001529;
  padding: 20px;
  background: #1890ff;
  &-item {
    margin-top: 15px;
  }
  &-content {
    width: 200px;
    margin-top: 10px;
    // box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    overflow: hidden;
    &-top {
      height: 180px;
      background: #fff;
    }
    &-middle {
      height: 20px;
      background: #fff;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAACCAYAAAB7Xa1eAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuOWwzfk4AAAAaSURBVBhXY5g7f97/2XPn/AcCBmSMQ+I/AwB2eyNBlrqzUQAAAABJRU5ErkJggg==);
      background-size: 4px 2px;
      background-repeat: repeat-x;
      background-position: center;
      position: relative;
    }
    &-bottom {
      height: 60px;
      background: #fff;
    }
  }
  &-1 {
    &-content {
      filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));
      &-middle {
        position: relative;
        margin: 0 10px;
        &::before, &::after {
          content: ' ';
          position: absolute;
          width: 28px;
          height: 28px;
          top: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          border: 5px solid transparent;
          border-top-color: #fff;
          border-right-color: #fff;
          border-radius: 100%;
        }
        &::before {
          left: -10px;
        }
        &::after {
          transform: translate(-50%, -50%) rotate(225deg);
          right: -38px;
        }
      }
    }
  }
  &-2 {
    margin-top: 15px;
    &-content {
      width: 288px;
      height: 176px;
      mask: url(../../assets/ticket.svg);
      mask-size: cover;
      background: #fff;
    }
  }
  &-3 {
    &-content {
      &-middle {
        background: transparent;
        background-image:
          radial-gradient(circle at 0 50%, rgba(204,0,0,0) 10px, #fff 10px),
          radial-gradient(circle at 100% 50%, rgba(204,0,0,0) 10px, #fff 10px);
        background-size: 51% 100%;
        background-repeat: no-repeat;
        background-position: top left, top right;
      }
    }
  }
}
</style>

