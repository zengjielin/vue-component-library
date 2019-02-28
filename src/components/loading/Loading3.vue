<template>
    <ul class="loading3" ref="loading">
        <li class="spot" v-for="(spot,index) in 5" :key="index"><span class="spot-box" :style="{'background':spotColor}"></span></li>
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
      this.changeColor(this.color);
    }
  },
  mounted() {
    this.changeSize();
    this.changeColor(this.color);
  }
};
</script>

<style lang='scss'>
.loading3 {
  width: 100px;
  height: 30px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  .spot {
    width: 15px;
    height: 15px;
    padding: 0 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    .spot-box {
      display: inline-block;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #acd8e4;
    }
  }
  .spot:nth-of-type(1) span {
    animation: scaleAnimate 0.5s 0s infinite;
  }
  .spot:nth-of-type(2) span {
    animation: scaleAnimate 0.5s 0.1s infinite;
  }
  .spot:nth-of-type(3) span {
    animation: scaleAnimate 0.5s 0.2s infinite;
  }
  .spot:nth-of-type(4) span {
    animation: scaleAnimate 0.5s 0.3s infinite;
  }
  .spot:nth-of-type(5) span {
    animation: scaleAnimate 0.5s 0.4s infinite;
  }
  @keyframes scaleAnimate {
    0% {
      width: 5px;
      height: 5px;
    }
    25% {
      width: 10px;
      height: 10px;
    }
    50% {
      width: 15px;
      height: 15px;
    }
    75% {
      width: 10px;
      height: 10px;
    }
    100% {
      width: 5px;
      height: 5px;
    }
  }
}
</style>
