<template>
    <!-- components -->
    <ul class="loading1" :style="{'width':width+'px', 'height':width+'px'}">
        <li class="line" :style="{'width':width/2+'px','top': (width-2)/2+'px','left':width/2+'px'}" v-for="(line,index) in 12" :key='index'></li>
    </ul>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 100
    }
  }
};
</script>

<style lang='scss'>
.loading1 {
  border-radius: 50%;
  position: relative;
  background: transparent;
  animation: rotateAnimate 1.6s linear infinite;
  .line {
    width: 50px;
    height: 2px;
    position: absolute;
    background: #fff;
    position: absolute;
    top: 49px;
    left: 50px;
    border-radius: 4px;
    background: -webkit-linear-gradient(
      left,
      transparent 33%,
      #d5d5d5
    ); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(
      right,
      transparent 33% #d5d5d5
    ); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(
      right,
      transparent 33%,
      #d5d5d5
    ); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, transparent 33%, #d5d5d5);
    /* 标准的语法 */
    transform-origin: 0% 0%;
    -webkit-transform-origin: 0% 0%;
    -o-transform-origin: 0% 0%;
    -moz-transform-origin: 0% 0%;
  }
  .line:nth-of-type(1) {
    transform: rotate(30deg);
    -webkit-transform: rotate(30deg);
    -o-transform: rotate(30deg);
    -moz-transform: rotate(30deg);
  }
  .line:nth-of-type(2) {
    transform: rotate(60deg);
    -webkit-transform: rotate(60deg);
    -o-transform: rotate(60deg);
    -moz-transform: rotate(60deg);
  }
  .line:nth-of-type(3) {
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
  }
  .line:nth-of-type(4) {
    transform: rotate(120deg);
    -webkit-transform: rotate(120deg);
    -o-transform: rotate(120deg);
    -moz-transform: rotate(120deg);
  }
  .line:nth-of-type(5) {
    transform: rotate(150deg);
    -webkit-transform: rotate(150deg);
    -o-transform: rotate(150deg);
    -moz-transform: rotate(150deg);
  }
  .line:nth-of-type(6) {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
  }
  .line:nth-of-type(7) {
    transform: rotate(210deg);
    -webkit-transform: rotate(210deg);
    -o-transform: rotate(210deg);
    -moz-transform: rotate(210deg);
  }
  .line:nth-of-type(8) {
    transform: rotate(240deg);
    -webkit-transform: rotate(240deg);
    -o-transform: rotate(240deg);
    -moz-transform: rotate(240deg);
  }
  .line:nth-of-type(9) {
    transform: rotate(270deg);
    -webkit-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    -moz-transform: rotate(270deg);
  }
  .line:nth-of-type(10) {
    transform: rotate(300deg);
    -webkit-transform: rotate(300deg);
    -o-transform: rotate(300deg);
    -moz-transform: rotate(300deg);
  }
  .line:nth-of-type(11) {
    transform: rotate(330deg);
    -webkit-transform: rotate(330deg);
    -o-transform: rotate(330deg);
    -moz-transform: rotate(330deg);
  }
  @keyframes rotateAnimate {
    0% {
      transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
      -webkit-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
    }
  }
}
</style>
