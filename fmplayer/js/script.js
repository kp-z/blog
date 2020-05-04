/*
design by Voicu Apostol.
design: https://dribbble.com/shots/3533847-Mini-Music-Player
I can't find any open music api or mp3 api so i have to download all musics as mp3 file.
You can fork on github: https://github.com/muhammederdem/mini-player
*/

new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        
        {
          name: "给你给我",
          artist: "毛不易",
          cover: "https://img-1253324855.cos.ap-chengdu.myqcloud.com/music/109951163352188380.jpg",
          source: "https://img-1253324855.cos.ap-chengdu.myqcloud.com/music/%E7%BB%99%E4%BD%A0%E7%BB%99%E6%88%91%20-%20%E6%AF%9B%E4%B8%8D%E6%98%93.mp3",
          url: "https://music.163.com/song?id=1407358755&userid=15433008",
          favorited: true
        },
        {
          name: "好想爱这个世界",
          artist: "华晨宇",
          cover: "https://img-1253324855.cos.ap-chengdu.myqcloud.com/music/maxresdefault.jpg",
          source: "https://img-1253324855.cos.ap-chengdu.myqcloud.com/music/%E5%A5%BD%E6%83%B3%E7%88%B1%E8%BF%99%E4%B8%AA%E4%B8%96%E7%95%8C%E5%95%8A%20-%20%E5%8D%8E%E6%99%A8%E5%AE%87.mp3",
          url: "https://music.163.com/song?id=1407358755&userid=15433008",
          favorited: true
        },
        {
          name: "没有理想的人不伤心 (Remix版)",
          artist: "新裤子",
          cover: "https://img-1253324855.cos.ap-chengdu.myqcloud.com/music/f0250c6a9b4f4134baabdaa7a40312d4.jpeg",
          source: "https://img-1253324855.cos.ap-chengdu.myqcloud.com/music/%E6%B2%A1%E6%9C%89%E7%90%86%E6%83%B3%E7%9A%84%E4%BA%BA%E4%B8%8D%E4%BC%A4%E5%BF%83%20%28Remix%E7%89%88%29%20-%20%E6%96%B0%E8%A3%A4%E5%AD%90.mp3",
          url: "https://music.163.com/song?id=1305364671&userid=15433008",
          favorited: false
        },
        {
          name: "荒岛",
          artist: "谢村花",
          cover: "../../fmplayer/img/2.jpg",
          source: "https://img-1253324855.cos.ap-chengdu.myqcloud.com/music/%E8%B0%A2%E6%98%A5%E8%8A%B1-%E8%8D%92%E5%B2%9B.mp3",
          url: "https://music.163.com/song?id=412319476&userid=15433008",
          favorited: false
        },
        {
          name: "Cardiac Arrest",
          artist: "SUMMER ASH",
          cover: "../../fmplayer/img/1.jpg",
          source: "https://img-1253324855.cos.ap-chengdu.myqcloud.com/music/Summer_Ash_-_Cardiac_Arrest.mp3",
          url: "",
          favorited: false
        },
        
        {
          name: "Dawn",
          artist: "OhNewDawn",
          cover: "https://cdn-img.jamendo.com/track/s1745/1745138/covers/1.300.jpg?du=1586096145",
          source: "https://img-1253324855.cos.ap-chengdu.myqcloud.com/music/OhNewDawn_-_Dawn.mp3",
          url: "",
          favorited: true
        },
        {
          name: "Extreme Ways",
          artist: "Moby",
          cover: "https://cdn-img.jamendo.com/albums/s191/191503/covers/1.300.jpg?du=1583013210",
          source: "https://img-1253324855.cos.ap-chengdu.myqcloud.com/music/Emerald_Park_-_THE_HAZE.mp3",
          url: "",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});