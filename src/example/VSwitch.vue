<template>
    <div class="vswitch">
      <div class="wrapper">
        <v-switch v-model="status" :width='90' :height='40' :background="background1" :disabled='false'></v-switch>
      </div>
      <div class="wrapper">
        <v-switch v-model="status" :width='160' :height='60' :background="background2" :disabled='false'></v-switch>
      </div>
      <div class="wrapper">
        <v-switch v-model="status" :width='90' :height='40' :background="background2" :disabled='true'></v-switch>
      </div>
    </div>
</template>

<script>
import VSwitch from "@/components/switch/VSwitch.vue";

export default {
  data() {
    return {
      status: true,
      background1: "#13CE66",
      background2: "#409EFF"
    };
  },
  watch: {
    status() {
      console.log(this.status);
    }
  },
  components: {
    VSwitch
  }
};
</script>

<style>
.wrapper {
  padding-bottom: 20px;
}
</style>
