<template>
    <div>   
        <div class="new-carousel">
            <ul class="total-img-wrapper">
                <li class="left" index='0'>
                    <img :src="activeImgList[0]" alt="">
                </li>
                <li class="center" index='1'>
                    <img :src="activeImgList[1]" alt="">
                </li>
                <li class="right" index='2'>
                    <img :src="activeImgList[2]" alt="">
                </li>
            </ul>
        </div>
        <button @click="lastOne">lastOne</button>
        <button @click="nextOne">nextOne</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      classList: ["left", "center", "right"],
      totalImgList: [
        "https://packer-static-assets.oss-cn-shenzhen.aliyuncs.com/my-vue/bf27fd83ea16a03a3192bdc3bed7b21d1551517349900.png",
        "https://packer-static-assets.oss-cn-shenzhen.aliyuncs.com/my-vue/bf27fd83ea16a03a3192bdc3bed7b21d1551517349718.png",
        "https://packer-static-assets.oss-cn-shenzhen.aliyuncs.com/my-vue/bf27fd83ea16a03a3192bdc3bed7b21d1551517349539.png",
        "https://packer-static-assets.oss-cn-shenzhen.aliyuncs.com/my-vue/bf27fd83ea16a03a3192bdc3bed7b21d1551517349387.png",
        "https://packer-static-assets.oss-cn-shenzhen.aliyuncs.com/my-vue/bf27fd83ea16a03a3192bdc3bed7b21d1551517349208.png",
        "https://packer-static-assets.oss-cn-shenzhen.aliyuncs.com/my-vue/bf27fd83ea16a03a3192bdc3bed7b21d1551517348795.png"
      ],
      activeImgList: []
    };
  },
  methods: {
    lastOne() {
      let classCache = this.classList.pop();
      this.classList.unshift(classCache);
      let imageCache = this.totalImgList.shift();
      this.totalImgList.push(imageCache);
      this.activeImgList = this.totalImgList.slice(0, 3);
      let newImageCache = this.activeImgList.pop()
      this.activeImgList.unshift(newImageCache)
      console.log(this.activeImgList)
      let liObj = document.querySelectorAll("li");
      for (let i = 0; i < liObj.length; i++) {
        liObj[i].className = this.classList[i];
      }
    },
    nextOne() {
      let classCache = this.classList.shift();
      this.classList.push(classCache);
      let imageCache = this.totalImgList.pop();
      this.totalImgList.unshift(imageCache);
      this.activeImgList = this.totalImgList.slice(0, 3);
      let liObj = document.querySelectorAll("li");
      for (let i = 0; i < liObj.length; i++) {
        liObj[i].className = this.classList[i];
      }
    }
  },
  mounted() {
    this.activeImgList = this.totalImgList.slice(0, 3);
  }
};
</script>

<style lang='scss'>
.new-carousel {
  width: 100%;
  height: 300px;
  .total-img-wrapper {
    width: 50%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    transform-style: preserve-3d;
    li {
      width: 100%;
      height: 100%;
      position: absolute;
      img {
        width: 100%;
        height: 100%;
      }
    }
    li:nth-of-type(1) {
      //   background: blueviolet;
    }
    li:nth-of-type(2) {
      //   background: red;
    }
    li:nth-of-type(3) {
      //   background: greenyellow;
    }
    .left {
      left: -300px;
      z-index: 4;
      transform: scale(0.8);
      transition: all 0.6s ease-in-out;
    }
    .center {
      z-index: 5;
      left: 0;
      transition: all 0.6s ease-in-out;
    }
    .right {
      left: 300px;
      z-index: 4;
      transform: scale(0.8);
      transition: all 0.6s ease-in-out;
    }
  }
}
</style>
