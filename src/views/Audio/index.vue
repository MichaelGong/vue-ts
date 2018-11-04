/*
 * @Author: gonghao
 * @Date: 2018-11-04 17:27:45
 * @Last Modified by: gonghao
 * @Last Modified time: 2018-11-04 21:30:08
 * @Desc: 音频相关api
 * https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Media_events
 * https://github.com/SevenOutman/vue-aplayer
 * https://github.com/goldfire/howler.js
*/
<template>
<section class="white h-100 flex flex-v padding">
  <audio
    ref="audio"
    @loadedmetadata="onLoadedmetadata"
    @timeupdate="onTimeupdate"
    @pause="onPause"
    @play="onPlay"
    src="@/assets/rise.mp3"
    controls="controls"
  ></audio>
  <div style="margin-top: 20px;">
    <el-button
      type="primary"
      @click="startPlayOrPause"
    >{{playing | transPlayPause}}</el-button>
    <el-button>{{audioDuration | formatSecond}}</el-button>
    <el-button>{{audioCurrentTime | formatSecond}}</el-button>
    <el-button @click="changeVolume(1)">增大音量</el-button>
    <el-button @click="changeVolume(0)">减小音量</el-button>
    <el-button @click="changePlaybackRate(1)">增大播放速率</el-button>
    <el-button @click="changePlaybackRate(0)">减小播放速率</el-button>
    <el-button @click="changeMuted">静音</el-button>
  </div>
  <OAudioContext />
</section>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import OAudioContext from './AudioContext.vue';

// 将整数转换成 时：分：秒的格式
function realFormatSecond(second: number) {
  const secondType = typeof second;
  if (secondType === 'number' || secondType === 'string') {
    second = parseInt(second + '', 10);

    const hours = Math.floor(second / 3600);
    second = second - hours * 3600;
    const mimute = Math.floor(second / 60);
    second = second - mimute * 60;

    return hours + ':' + ('0' + mimute).slice(-2) + ':' + ('0' + second).slice(-2);
  } else {
    return '0:00:00';
  }
}

@Component({
  components: {
    OAudioContext,
  },
  filters: {
    transPlayPause(value: boolean) {
      return value ? '暂停' : '播放';
    },
    formatSecond(second = 0) {
      return realFormatSecond(second);
    },
  },
})
export default class OAudio extends Vue {
  public $refs!: {
    audio: HTMLAudioElement,
  };
  // 是否正在播放
  public playing: boolean = false;
  // 歌曲播放时长
  public audioDuration: number = 0;
  // 当前播放时间
  public audioCurrentTime: number = 0;

  public onPause() {
    this.playing = false;
  }
  public onPlay() {
    this.playing = true;
  }
  public pause() {
    this.$refs.audio.pause();
  }
  public play() {
    this.$refs.audio.play();
  }
  // 按钮点击
  public startPlayOrPause() {
    return this.playing ? this.pause() : this.play();
  }
  // metadata信息加载完毕
  public onLoadedmetadata(res: Event) {
    this.audioDuration = (res.target as HTMLAudioElement).duration;
  }
  // 当前播放时间
  public onTimeupdate(res: Event) {
    this.audioCurrentTime = (res.target as HTMLAudioElement).currentTime;
  }
  // 声音 声音的范围是0-1
  public changeVolume(type: number) {
    const volume = this.$refs.audio.volume;
    if (type === 1) {
      if (volume === 1) {
        return;
      }
      this.$refs.audio.volume += 0.1;
    } else {
      if (volume <= 0.1) {
        return;
      }
      this.$refs.audio.volume -= 0.1;
    }
  }
  // 播放速率
  public changePlaybackRate(type: number) {
    const playbackRate = this.$refs.audio.playbackRate;
    if (type === 1) {
      this.$refs.audio.playbackRate += 1;
    } else {
      if (playbackRate > 1) {
        this.$refs.audio.playbackRate -= 1;
      }
    }
  }
  // 是否静音
  public changeMuted() {
    this.$refs.audio.muted = !this.$refs.audio.muted; // true表示静音 false表示不静音
  }
}
</script>

<style lang="less" scoped>
.padding {
  padding: 15px;
}
.width {
  width: 120px;
  margin-top: 20px;
}
.el-button {
  margin-top: 20px;
}
</style>