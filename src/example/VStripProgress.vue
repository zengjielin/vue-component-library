<template>
    <div class="v-strip-progress">
        <div class="wrapper">
            <v-strip-progress :config="config1" :percent='percent1' :gradient='true'></v-strip-progress>
        </div>
        <div class="wrapper">
            <v-strip-progress :config="config2" :percent='percent2'></v-strip-progress>
        </div>
        <div class="wrapper">
            <v-strip-progress :config="config3" :percent='percent3'></v-strip-progress>
        </div>
    </div>
</template>

<script>
import VStripProgress from "@/components/strip-progress/StripProgress.vue";

export default {
  data() {
    return {
      config1: {
        background: "#0cc769",
        color: "#20A0FF",
        startGradient: "#8E71C7",
        endGradient: "#09c669"
      },
      percent1: 80,
      config2: {
        background: "#A996D4",
        color: "#A996D4",
        startGradient: "#adfc77",
        endGradient: "#09c669"
      },
      percent2: 60,
      config3: {
        background: "#F56C6C",
        color: "#F56C6C",
        startGradient: "#adfc77",
        endGradient: "#09c669"
      },
      percent3: 90
    };
  },
  components: {
    VStripProgress
  },
  mounted() {
    setTimeout(() => {
      this.percent1 = 20;
      this.percent2 = 90;
      this.percent3 = 70;
    }, 2000);
  }
};
</script>

<style>
.wrapper {
  padding: 20px;
}
</style>
