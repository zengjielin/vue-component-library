<template>
    <div class="circle-progress-example">
        <circle-progress :percent="percent"></circle-progress>
    </div>
</template>

<script>
import CircleProgress from "@/components/circle-progress/CircleProgress.vue";

export default {
  data() {
    return {
      percent: 61
    };
  },
  components: {
    CircleProgress
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
