<template>
    <div class="wrapper">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.wrapper {
  position: absolute;
  top: 100px;
  left: 100px;
  width: 100px;
  height: 300px;
  border: 1px solid black;
  transform-style: preserve-3d;
  transform: perspective(500px);
}
.wrapper div:nth-of-type(1) {
  width: 100px;
  height: 100px;
  background: red;
  transform: rotateZ(30deg);
}
.wrapper div:nth-of-type(2) {
  width: 100px;
  height: 100px;
  background: blue;
  transform: rotateX(30deg);
}
.wrapper div:nth-of-type(3) {
  width: 100px;
  height: 100px;
  background: green;
  transform: rotateY(70deg);
}
</style>
