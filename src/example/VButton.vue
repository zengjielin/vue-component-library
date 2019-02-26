<template>
    <div class="button-example">
        <v-button @click="showmsg"></v-button>
        <v-button @click="showtxt"></v-button>
    </div>
</template>

<script>
import VButton from "@/components/v-button/VButton.vue";
export default {
  components: {
    VButton
  },
  methods: {
    showmsg() {
      console.log("showmsg");
    },
    showtxt() {
      console.log("showtxt");
    }
  }
};
</script>

<style>
</style>
