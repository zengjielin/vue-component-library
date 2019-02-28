<template>
    <button class="common-button primary-button" @click="handleBtnEvent">默认按钮</button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "medium" //可选medium / small / mini
    },
    type: {
      type: String,
      default: "primary" //可选primary / success / warning / danger / info / text
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleBtnEvent() {
      this.$emit("click");
    }
  }
};
</script>
 
<style lang='scss'>
.common-button {
  padding: 0 20px;
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
.primary-button:hover{
  opacity: 0.8;
}
.primary-button:active {
  color: #fff;
  background-color: #3a8ee6;
  border-color: #3a8ee6;
}
</style>
