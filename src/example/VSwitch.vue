<template>
    <div class="vswitch">
        <v-switch v-model="status" :width='200' :height='80' :background="background" :disabled='false'></v-switch>
    </div>
</template>

<script>
import VSwitch from "@/components/switch/VSwitch.vue";

export default {
  data() {
    return {
      status: true,
      background: "#409EFF"
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
</style>
