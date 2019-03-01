<template>
    <div class="carousel-example-wrapper">
        <carousel></carousel>
        <div @click='lastOne'>lastOne</div>
    </div>
</template>

<script>
import carousel from "@/components/carousel/Carousel.vue";
export default {
  components: {
    carousel
  },
  methods: {
      lastOne(){
          console.log(123)
      }
  },
};
</script>

<style>
</style>
