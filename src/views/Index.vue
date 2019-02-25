<template>
    <div class="index">
        <!-- <strip-progress :config="config" :percent="percent" :gradient="gradient" :height='30'></strip-progress> -->
        <circle-progress :percent="percent" :progressGradient="gradient" :circleRadius='100' :progressConfig='config'></circle-progress>
    </div>
</template>

<script>
import StripProgress from "@/components/strip-progress/StripProgress.vue";
import CircleProgress from "@/components/circle-progress/CircleProgress.vue";
export default {
  data() {
    return {
      // config: {
      //   background: "",
      //   color: "",
      //   startGradient: "#adfc77",
      //   endGradient: "#09c669"
      // },
      percent: 0,
      gradient: true,
      config: {
        ringWidth: 16, //圆环宽度
        ringBackground: "#E5E9F2", //进度条背景色
        ringColor: "#5EE270", //进度条颜色
        startGradient: "#adfc77", //开始渐变色
        endGradient: "#09c669" //结束渐变色
      }
    };
  },
  components: {
    StripProgress,
    CircleProgress
  },
  mounted() {
    setTimeout(() => {
      this.percent = 50;
    }, 1000);
  }
};
</script>

<style>
</style>
