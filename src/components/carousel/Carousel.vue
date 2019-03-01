<template>
    <div>
        <div class="carousel">
            <div class="card-wrapper" v-for="(item,index) in showImageList" :key="index">
                <img :src="item" alt="">
            </div>
        </div>
        <div class="btn-wrapper">
            <div class="last-btn" @click="lastOne">last-btn</div>
            <div class="next-btn" @click="nextOne">next-btn</div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      time: 0,
      nextTime: 0,
      resourcesImageList: [
        "https://packer-static-assets.oss-cn-shenzhen.aliyuncs.com/8c7fc67cdc549900f8c4a182dfe2c06c.jpg",
        "https://packer-static-assets.oss-cn-shenzhen.aliyuncs.com/4969274d2a6342109d2b5887745d19e6.jpg",
        "https://packer-static-assets.oss-cn-shenzhen.aliyuncs.com/9b1c93c724501b9299a08efaa4e371af1547717303242.jpg",
        "https://packer-static-assets.oss-cn-shenzhen.aliyuncs.com/packer-buffet-admin/30226f4dfdeb7d96001632e5b96d68ec1549941616116.ico"
      ],
      showImageList: []
    };
  },
  methods: {
    changeLastImage() {
      let imgcache = this.resourcesImageList.shift();
      this.resourcesImageList.push(imgcache);
      this.showImageList = this.resourcesImageList.slice(0, 3);
      console.log(this.showImageList);
      console.log(this.resourcesImageList);
    },
    changeNextImage() {
      let imgcache = this.resourcesImageList.pop();
      this.resourcesImageList.unshift(imgcache);
      this.showImageList = this.resourcesImageList.slice(
        this.resourcesImageList.length - this.showImageList.length,
        this.resourcesImageList.length
      );
    },
    lastOne() {
      this.changeLastImage();
      if (this.nextTime == 1) {
        this.time = 2;
      } else if (this.nextTime == 2) {
        this.time = 1;
      } else if (this.nextTime == 3) {
        this.time = 3;
      }
      if (this.time == 3) {
        this.time = 0;
      }
      this.nextTime = 0;
      this.time++;
      if (this.time == 1) {
        document.querySelectorAll(".card-wrapper")[0].style =
          "top:65px;left:350px;width:120px;height:170px";
        document.querySelectorAll(".card-wrapper")[1].style =
          "top:65px;left:30px;width:120px;height:170px";
        document.querySelectorAll(".card-wrapper")[2].style =
          "top:50px;left:180px;width:140px;height:200px";
      } else if (this.time == 2) {
        document.querySelectorAll(".card-wrapper")[0].style =
          "top:50px;left:180px;width:140px;height:200px";
        document.querySelectorAll(".card-wrapper")[1].style =
          "top:65px;left:350px;width:120px;height:170px";
        document.querySelectorAll(".card-wrapper")[2].style =
          "top:65px;left:30px;width:120px;height:170px";
      } else if (this.time == 3) {
        document.querySelectorAll(".card-wrapper")[0].style =
          "top:65px;left:30px;width:120px;height:170px";
        document.querySelectorAll(".card-wrapper")[1].style =
          "top:50px;left:180px;width:140px;height:200px";
        document.querySelectorAll(".card-wrapper")[2].style =
          "top:65px;left:350px;width:120px;height:170px";
      }
    },
    nextOne() {
      this.changeNextImage();
      if (this.time == 1) {
        this.nextTime = 2;
      }
      if (this.time == 2) {
        this.nextTime = 1;
      }
      if (this.time == 3) {
        this.nextTime = 3;
      }
      if (this.nextTime == 3) {
        this.nextTime = 0;
      }
      this.time = 0;
      this.nextTime++;
      if (this.nextTime == 1) {
        document.querySelectorAll(".card-wrapper")[0].style =
          "top:50px;left:180px;width:140px;height:200px";
        document.querySelectorAll(".card-wrapper")[1].style =
          "top:65px;left:350px;width:120px;height:170px";
        document.querySelectorAll(".card-wrapper")[2].style =
          "top:65px;left:30px;width:120px;height:170px";
      }
      if (this.nextTime == 2) {
        document.querySelectorAll(".card-wrapper")[0].style =
          "top:65px;left:350px;width:120px;height:170px";
        document.querySelectorAll(".card-wrapper")[1].style =
          "top:65px;left:30px;width:120px;height:170px";
        document.querySelectorAll(".card-wrapper")[2].style =
          "top:50px;left:180px;width:140px;height:200px";
      }
      if (this.nextTime == 3) {
        document.querySelectorAll(".card-wrapper")[0].style =
          "top:65px;left:30px;width:120px;height:170px";
        document.querySelectorAll(".card-wrapper")[1].style =
          "top:50px;left:180px;width:140px;height:200px";
        document.querySelectorAll(".card-wrapper")[2].style =
          "top:65px;left:350px;width:120px;height:170px";
      }
    }
  },
  mounted() {
    this.showImageList = this.resourcesImageList.slice(0, 3);
  }
};
</script>

<style lang='scss'>
.carousel {
  width: 500px;
  height: 300px;
  position: relative;
  .card-wrapper {
    width: 140px;
    height: 200px;
    position: absolute;
    background: #efefef;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: left 0.4s;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .card-wrapper:nth-of-type(1) {
    width: 120px;
    height: 170px;
    top: 65px;
    left: 30px;
  }
  .card-wrapper:nth-of-type(2) {
    top: 50px;
    left: 180px;
  }
  .card-wrapper:nth-of-type(3) {
    width: 120px;
    height: 170px;
    top: 65px;
    left: 350px;
  }
}
.btn-wrapper {
  display: flex;
  color: #fff;
  cursor: pointer;
  .last-btn {
    padding: 20px;
    background: blue;
  }
  .next-btn {
    padding: 20px;
    background: yellowgreen;
  }
}
</style>
