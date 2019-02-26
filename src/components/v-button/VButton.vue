<template>
    <button class="common-button primary-button" @click="handleBtnEvent">默认按钮</button>
</template>

<script>
export default {
  methods: {
    handleBtnEvent() {
      this.$emit("click");
    }
  },
  props: {
    type: {
      type: String,
      default: "primary"
    }
  }
};
</script>
 
<style lang='scss'>
.common-button {
  width: 100px;
  height: 40px;
  border-radius: 4px;
  text-align: center;
  border: none;
  outline: none;
}
.primary-button {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  cursor: pointer;
}
.primary-button:hover,
.primary-button:focus {
  color: #fff;
  background-color: #66b1ff;
  border-color: #66b1ff;
}
.primary-button:active {
  color: #fff;
  background-color: #3a8ee6;
  border-color: #3a8ee6;
}
</style>
