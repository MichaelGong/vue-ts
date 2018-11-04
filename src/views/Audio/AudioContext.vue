/*
 * @Author: gonghao
 * @Date: 2018-11-04 22:13:06
 * @Last Modified by: gonghao
 * @Last Modified time: 2018-11-04 22:13:51
 * @Desc: AudioContext
 * https://www.zhangxinxu.com/wordpress/2017/06/html5-web-audio-api-js-ux-voice/
*/
<template>
<el-button @click="audioContext">连续点击(AudioContext)</el-button>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class OAudioContext extends Vue {
  public audioCtx: AudioContext = new AudioContext();
  // 发出的声音频率数据，表现为音调的高低，数值越大，声音越清脆，数值越小，声音越低沉
  public arrFrequency: number[] = [
    196.00, 220.00, 246.94, 261.63, 293.66, 329.63,
    349.23, 392.00, 440.00, 493.88, 523.25, 587.33,
    659.25, 698.46, 783.99, 880.00, 987.77, 1046.50,
  ];
  public start: number = 0;
  public direction = 1;

  public audioContext() {
    let frequerncy = this.arrFrequency[this.start];
    if (!frequerncy) {
      this.direction = -1 * this.direction;
      this.start = this.start + 2 * this.direction;
      frequerncy = this.arrFrequency[this.start];
    }
    this.start = this.start + this.direction;
    // 创建一个周期型波，即创建一个音调
    const oscillator = this.audioCtx.createOscillator();
    // 创建一个GainNode,它可以控制音频的总音量
    const gainNode = this.audioCtx.createGain();
    // 把音量，音调和终节点进行关联
    oscillator.connect(gainNode);
    // audioCtx.destination返回AudioDestinationNode对象，表示当前audio context中所有节点的最终节点，一般表示音频渲染设备
    gainNode.connect(this.audioCtx.destination);
    // 指定音调的类型，其他还有square|triangle|sawtooth
    oscillator.type = 'sine';
    // 设置当前播放声音的频率，也就是最终播放声音的调调
    oscillator.frequency.value = frequerncy;
    // 当前时间设置音量为0，为了声音有个过渡效果
    gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime);
    // 0.01秒后音量为1
    gainNode.gain.linearRampToValueAtTime(1, this.audioCtx.currentTime + 0.01);
    // 音调从当前时间开始播放
    oscillator.start(this.audioCtx.currentTime);
    // 1秒内声音慢慢降低，是个不错的停止声音的方法
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 1);
    // 1秒后完全停止声音
    oscillator.stop(this.audioCtx.currentTime + 1);
  }
}
</script>

<style lang="less" scoped>

</style>