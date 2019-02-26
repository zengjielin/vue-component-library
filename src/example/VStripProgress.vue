<template>
    <div class="v-strip-progress">
        <div class="wrapper">
            <v-strip-progress :config="config1" :percent='80' :gradient='true'></v-strip-progress>
        </div>
        <div class="wrapper">
            <v-strip-progress :config="config2" :percent='60'></v-strip-progress>
        </div>
        <div class="wrapper">
            <v-strip-progress :config="config3" :percent='90'></v-strip-progress>
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
      config2: {
        background: "#A996D4",
        color: "#A996D4",
        startGradient: "#adfc77",
        endGradient: "#09c669"
      },
      config3: {
        background: "#F56C6C",
        color: "#F56C6C",
        startGradient: "#adfc77",
        endGradient: "#09c669"
      }
    };
  },
  components: {
    VStripProgress
  }
};
</script>

<style>
.wrapper {
  padding-bottom: 20px;
}
</style>
