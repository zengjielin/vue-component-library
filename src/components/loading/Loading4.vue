<template>
    <ul class="loading4" ref="loading">
       <li class="spot" v-for="(spot,index) in 8" :key="index"><span class="spot-wrapper" :style="{'background':spotColor}"></span></li> 
    </ul>
</template>

<script>
export default {
  data() {
    return {
      spotColor: "#acd8e4"
    };
  },
  props: {
    width: {
      type: Number,
      default: 100
    },
    color: {
      type: String,
      default: "#acd8e4"
    }
  },
  methods: {
    changeSize() {
      this.$refs.loading.style = `transform:scale(${this.width / 100})`;
    },
    changeColor(data) {
      if (data.indexOf("#") == -1) {
        this.spotColor = "#acd8e4";
      } else {
        this.spotColor = data;
      }
    }
  },
  watch: {
    width() {
      this.changeSize();
    },
    color(data) {
      this.changeColor(data);
    }
  },
  mounted() {
    this.changeSize();
    this.changeColor(this.color);
  }
};
</script>

<style lang='scss'>
.loading4 {
  width: 100px;
  height: 100px;
  position: relative;
  background: transparent;
  .spot {
    width: 20px;
    height: 20px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    .spot-wrapper {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #acd8e4;
    }
  }
  .spot:nth-of-type(1) {
    top: 0;
    left: 40px;
  }
  .spot:nth-of-type(1) span {
    animation: scaleAnimate 0.7s 0s infinite;
  }
  .spot:nth-of-type(2) {
    top: 12px;
    right: 12px;
  }
  .spot:nth-of-type(2) span {
    animation: scaleAnimate 0.7s 0.1s infinite;
  }
  .spot:nth-of-type(3) {
    top: 40px;
    right: 0px;
  }
  .spot:nth-of-type(3) span {
    animation: scaleAnimate 0.7s 0.2s infinite;
  }
  .spot:nth-of-type(4) {
    bottom: 12px;
    right: 12px;
  }
  .spot:nth-of-type(4) span {
    animation: scaleAnimate 0.7s 0.3s infinite;
  }
  .spot:nth-of-type(5) {
    bottom: 0;
    left: 40px;
  }
  .spot:nth-of-type(5) span {
    animation: scaleAnimate 0.7s 0.4s infinite;
  }
  .spot:nth-of-type(6) {
    bottom: 12px;
    left: 12px;
  }
  .spot:nth-of-type(6) span {
    animation: scaleAnimate 0.7s 0.5s infinite;
  }
  .spot:nth-of-type(7) {
    top: 40px;
    left: 0;
  }
  .spot:nth-of-type(7) span {
    animation: scaleAnimate 0.7s 0.6s infinite;
  }
  .spot:nth-of-type(8) {
    top: 12px;
    left: 12px;
  }
  .spot:nth-of-type(8) span {
    animation: scaleAnimate 0.7s 0.7s infinite;
  }
  @keyframes scaleAnimate {
    0% {
      width: 20px;
      height: 20px;
    }
    50% {
      width: 15px;
      height: 15px;
    }
    100% {
      width: 10px;
      height: 10px;
    }
  }
}
</style>
