(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["audio"],{"0cbd":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"white h-100 flex flex-v padding"},[i("audio",{ref:"audio",attrs:{src:a("3a82"),controls:"controls"},on:{loadedmetadata:t.onLoadedmetadata,timeupdate:t.onTimeupdate,pause:t.onPause,play:t.onPlay}}),i("div",{staticStyle:{"margin-top":"20px"}},[i("el-button",{attrs:{type:"primary"},on:{click:t.startPlayOrPause}},[t._v(t._s(t._f("transPlayPause")(t.playing)))]),i("el-button",[t._v(t._s(t._f("formatSecond")(t.audioDuration)))]),i("el-button",[t._v(t._s(t._f("formatSecond")(t.audioCurrentTime)))]),i("el-button",{on:{click:function(e){t.changeVolume(1)}}},[t._v("增大音量")]),i("el-button",{on:{click:function(e){t.changeVolume(0)}}},[t._v("减小音量")]),i("el-button",{on:{click:function(e){t.changePlaybackRate(1)}}},[t._v("增大播放速率")]),i("el-button",{on:{click:function(e){t.changePlaybackRate(0)}}},[t._v("减小播放速率")]),i("el-button",{on:{click:t.changeMuted}},[t._v("静音")])],1),i("OAudioContext")],1)},n=[],u=a("c665"),o=a("dc0a"),r=a("aa9a"),c=a("d328"),s=a("11d9"),l=a("6bde"),d=(a("cadf"),a("551c"),a("097d"),a("9ab4")),f=a("60a3"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-button",{on:{click:t.audioContext}},[t._v("连续点击(AudioContext)")])},v=[],p=function(t){function e(){var t;return Object(u["a"])(this,e),t=Object(c["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.audioCtx=new AudioContext,t.arrFrequency=[196,220,246.94,261.63,293.66,329.63,349.23,392,440,493.88,523.25,587.33,659.25,698.46,783.99,880,987.77,1046.5],t.start=0,t.direction=1,t}return Object(r["a"])(e,[{key:"audioContext",value:function(){var t=this.arrFrequency[this.start];t||(this.direction=-1*this.direction,this.start=this.start+2*this.direction,t=this.arrFrequency[this.start]),this.start=this.start+this.direction;var e=this.audioCtx.createOscillator(),a=this.audioCtx.createGain();e.connect(a),a.connect(this.audioCtx.destination),e.type="sine",e.frequency.value=t,a.gain.setValueAtTime(0,this.audioCtx.currentTime),a.gain.linearRampToValueAtTime(1,this.audioCtx.currentTime+.01),e.start(this.audioCtx.currentTime),a.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+1),e.stop(this.audioCtx.currentTime+1)}}]),Object(o["a"])(e,t),e}(f["d"]);p=d["a"]([Object(f["a"])({})],p);var y=p,b=y,m=(a("863e"),a("2877")),k=Object(m["a"])(b,h,v,!1,null,"3a6ad1e9",null);k.options.__file="AudioContext.vue";var x=k.exports;function _(t){var e=Object(l["a"])(t);if("number"===e||"string"===e){t=parseInt(t+"",10);var a=Math.floor(t/3600);t-=3600*a;var i=Math.floor(t/60);return t-=60*i,a+":"+("0"+i).slice(-2)+":"+("0"+t).slice(-2)}return"0:00:00"}var g=function(t){function e(){var t;return Object(u["a"])(this,e),t=Object(c["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.playing=!1,t.audioDuration=0,t.audioCurrentTime=0,t}return Object(r["a"])(e,[{key:"onPause",value:function(){this.playing=!1}},{key:"onPlay",value:function(){this.playing=!0}},{key:"pause",value:function(){this.$refs.audio.pause()}},{key:"play",value:function(){this.$refs.audio.play()}},{key:"startPlayOrPause",value:function(){return this.playing?this.pause():this.play()}},{key:"onLoadedmetadata",value:function(t){this.audioDuration=t.target.duration}},{key:"onTimeupdate",value:function(t){this.audioCurrentTime=t.target.currentTime}},{key:"changeVolume",value:function(t){var e=this.$refs.audio.volume;if(1===t){if(1===e)return;this.$refs.audio.volume+=.1}else{if(e<=.1)return;this.$refs.audio.volume-=.1}}},{key:"changePlaybackRate",value:function(t){var e=this.$refs.audio.playbackRate;1===t?this.$refs.audio.playbackRate+=1:e>1&&(this.$refs.audio.playbackRate-=1)}},{key:"changeMuted",value:function(){this.$refs.audio.muted=!this.$refs.audio.muted}}]),Object(o["a"])(e,t),e}(f["d"]);g=d["a"]([Object(f["a"])({components:{OAudioContext:x},filters:{transPlayPause:function(t){return t?"暂停":"播放"},formatSecond:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return _(t)}}})],g);var C=g,O=C,T=(a("d3e9"),Object(m["a"])(O,i,n,!1,null,"37ba2b70",null));T.options.__file="index.vue";e["default"]=T.exports},"3a82":function(t,e,a){t.exports=a.p+"media/rise.d1f4b629.mp3"},"84da":function(t,e,a){},"863e":function(t,e,a){"use strict";var i=a("ad39"),n=a.n(i);n.a},ad39:function(t,e,a){},d3e9:function(t,e,a){"use strict";var i=a("84da"),n=a.n(i);n.a}}]);
//# sourceMappingURL=audio.c460410f.js.map