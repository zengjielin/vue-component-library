<template>
    <div class="carousel-content-wrapper">   
        <div class="new-carousel">
            <ul class="total-img-wrapper">
                <li class="left" index='0'>
                    <img alt="">
                </li>
                <li class="center" index='1'>
                    <img alt="">
                </li>
                <li class="right" index='2'>
                    <img alt="">
                </li>
            </ul>
        </div>
        <!-- <div class="line-wrapper">
          <div class="line-item" v-for="(i,index) in totalImgList" :key="index"></div>
          <div class="line-item active-line"></div>
        </div> -->
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
      activeImgList: [], //正在显示的三张图片的数组,
      activeObj: {}
    };
  },
  methods: {
    initCarousel() {
      let activeImgList = this.totalImgList.slice(0, 3);
      let imgObj = document.querySelectorAll("img");
      for (let i = 0; i < activeImgList.length; i++) {
        imgObj[i].src = activeImgList[i];
      }
    },
    lastOne() {
      let classCache = this.classList.pop();
      this.classList.unshift(classCache);
      let imageCache = this.totalImgList.shift();
      this.totalImgList.push(imageCache);
      let newActiveImageList = this.totalImgList.slice(0, 3);
      let newImageCache = newActiveImageList.pop();
      newActiveImageList.unshift(newImageCache);
      this.activeImgList = newActiveImageList;
      this.activeObj = {
        right: this.activeImgList[0],
        left: this.activeImgList[1],
        center: this.activeImgList[2]
      };
      let liObj = document.querySelectorAll("li");
      let imgObj = document.querySelectorAll("img");
      for (let i = 0; i < liObj.length; i++) {
        liObj[i].className = this.classList[i];
        if (this.classList[i] == "left") {
          imgObj[i].src = this.activeObj.left;
        } else if (this.classList[i] == "center") {
          imgObj[i].src = this.activeObj.center;
        } else if (this.classList[i] == "right") {
          imgObj[i].src = this.activeObj.right;
        }
      }
    },
    nextOne() {
      let classCache = this.classList.shift();
      this.classList.push(classCache);
      let imageCache = this.totalImgList.pop();
      this.totalImgList.unshift(imageCache);
      let newActiveImageList = this.totalImgList.slice(0, 3);
      let newImageCache = newActiveImageList.pop();
      newActiveImageList.unshift(newImageCache);
      this.activeImgList = newActiveImageList;
      this.activeObj = {
        right: this.activeImgList[0],
        left: this.activeImgList[1],
        center: this.activeImgList[2]
      };
      let imgObj = document.querySelectorAll("img");
      let liObj = document.querySelectorAll("li");
      for (let i = 0; i < liObj.length; i++) {
        liObj[i].className = this.classList[i];
        if (this.classList[i] == "left") {
          imgObj[i].src = this.activeObj.left;
        } else if (this.classList[i] == "center") {
          imgObj[i].src = this.activeObj.center;
        } else if (this.classList[i] == "right") {
          imgObj[i].src = this.activeObj.right;
        }
      }
    },
    changeImage(){
    }
  },
  mounted() {
    this.initCarousel()
  }
};
</script>

<style lang='scss'>
.carousel-content-wrapper {
  width: 640px;
  padding: 20px;
  box-sizing: border-box;
  .new-carousel {
    width: 600px;
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
        left: -150px;
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
        left: 150px;
        z-index: 4;
        transform: scale(0.8);
        transition: all 0.6s ease-in-out;
      }
    }
  }
  .line-wrapper {
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 20px 0;
    .line-item {
      width: 30px;
      height: 4px;
      background: red;
      margin: 0 5px;
      cursor: pointer;
    }
    .active-line {
      background: blue;
    }
  }
}
</style>
