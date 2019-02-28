<template>
    <ul class="loading2" ref="loading" >
      <li class="line" v-for="(line,index) in 6" :key="index" :style="{'background':lineColor}"></li>
    </ul>
</template>

<script>
export default {
  data() {
    return {
      lineColor: "#acd8e4"
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
        this.lineColor = "#acd8e4";
      } else {
        this.lineColor = data;
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
.loading2 {
  width: 100px;
  height: 100px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  .line {
    width: 5px;
    height: 40px;
    margin: 0 5px;
    background: #acd8e4;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .line:nth-of-type(1) {
    animation: transiteAnimate 0.5s 0s infinite;
  }
  .line:nth-of-type(2) {
    animation: transiteAnimate 0.5s 0.1s infinite;
  }
  .line:nth-of-type(3) {
    animation: transiteAnimate 0.5s 0.2s infinite;
  }
  .line:nth-of-type(4) {
    animation: transiteAnimate 0.5s 0.3s infinite;
  }
  .line:nth-of-type(5) {
    animation: transiteAnimate 0.5s 0.4s infinite;
  }
  .line:nth-of-type(6) {
    animation: transiteAnimate 0.5s 0.5s infinite;
  }

  @keyframes transiteAnimate {
    0% {
      height: 60px;
      // background: #f00;
    }
    50% {
      height: 30px;
      // background: #0f0;
    }
    100% {
      height: 60px;
      // background: #00f;
    }
  }
}
</style>
