<template>
    <!-- example -->
    <div class="loading-example-wrapper">
      <div class="loading-wrapper">
        <loading1 :width='100'></loading1>
      </div>
      <div class="loading-wrapper">
        <loading2 :width='100' :color="color"></loading2>
      </div>
      <div class="loading-wrapper">
        <loading3 :width='100' :color="color"></loading3>
      </div>
      <div class="loading-wrapper">
        <loading4 :width='100' :color='color'></loading4>
      </div>
    </div>
</template>

<script>
import Loading1 from "@/components/loading/Loading1.vue";
import Loading2 from "@/components/loading/Loading2.vue";
import Loading3 from "@/components/loading/Loading3.vue";
import loading4 from "@/components/loading/loading4.vue";
export default {
  data() {
    return {
      color:'#9DE4B7'
    }
  },
  components: {
    Loading1,
    Loading2,
    Loading3,
    loading4
  }
};
</script>

<style lang='scss'>
.loading-example-wrapper {
  display: flex;
  align-items: center;
  padding: 20px;
  .loading-wrapper {
    padding-right: 20px;
  }
}
</style>
