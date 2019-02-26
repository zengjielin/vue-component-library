<template>
    <div class="circle-progress-example">
      <div class="wrapper">
        <v-circle-progress :percent="percent" :progressConfig="progressConfig1" :circleRadius='60' :progressGradient='true' :percentConfig='percentConfig1' :percentGradient='true'></v-circle-progress>
      </div>

    </div>
</template>

<script>
import VCircleProgress from "@/components/circle-progress/CircleProgress.vue";

export default {
  data() {
    return {
      percent: 91,
      progressConfig1: {
        ringWidth: 6,
        ringBackground: "#E5E9F2",
        ringColor: "#20A0FF",
        startGradient: "#8E71C7",
        endGradient: "#09c669"
      },
      percentConfig1: {
        size: 20,
        txtColor: "#20A0FF",
        startGradient: "#8E71C7",
        endGradient: "#09c669"
      }
    };
  },
  components: {
    VCircleProgress
  },
  mounted() {
    setTimeout(() => {
      this.percent = 50;
    }, 2000);
  }
};
</script>

<style>
</style>
