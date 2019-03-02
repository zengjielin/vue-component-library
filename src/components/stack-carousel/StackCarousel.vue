<template>
    <div class="stack-carousel">
        <div class="img">
            <div class="whole">
                <div class="roll-img">
                    <span class="last"><</span>
                    <ul id="ul">
                        <li class="left"><img src="../../assets/img/1.png" alt=""><div></div></li>
                        <li class="center"><img src="../../assets/img/2.png" alt=""><div></div></li>
                        <li class="right"><img src="../../assets/img/3.png" alt=""><div></div></li>
                        <li class="after1"><img src="../../assets/img/4.png" alt=""><div></div></li>
                        <li class="after2"><img src="../../assets/img/5.png" alt=""><div></div></li>
                        <li class="after3"><img src="../../assets/img/6.png" alt=""><div></div></li>
                    </ul>
                    <span class="next">></span>
                </div>
            </div>
            <div class="list">
                <span class="btn"></span>
                <span class="btn" style="background: red;"></span>
                <span class="btn"></span>
                <span class="btn"></span>
                <span class="btn"></span>
                <span class="btn"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.stack-carousel {
  .img {
    width: 100%;
    height: 300px;
    margin-top: 100px;
  }
  .whole {
    width: 50%;
    height: 100%;
    margin: 0 auto;
  }
  .roll-img {
    width: 100%;
    height: 100%;
    position: relative;
    // transform-style: preserve-3d;
  }
  .roll-img ul li {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .left {
    left: -300px;
    transform: scale(0.8);
    z-index: 4;
    background: rgb(0, 0, 0);
    transition: all 0.5s ease;
  }
  .center {
    z-index: 6;
    left: 0;
    top: 0;
    bottom: 10%;
    transition: all 0.5s ease;
  }
  .right {
    left: 300px;
    transform: scale(0.8);
    z-index: 4;
    background: rgb(0, 0, 0);
    transition: all 0.5s ease;
  }
  .left div,
  .right div {
    z-index: 5;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.3s ease;
  }
  .after1,
  .after2,
  .after3 {
    z-index: 3;
    left: 0;
    top: 0;
    visibility: hidden;
    transform: scale(0);
  }
  .last,
  .next {
    position: absolute;
    z-index: 10;
    width: 50px;
    height: 50px;
    border: 5px solid rgba(255, 255, 255, 0.7);
    border-radius: 50px;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    line-height: 45px;
    cursor: pointer;
    top: 40%;
    color: rgba(255, 255, 255, 0.6);
    display: none;
  }
  .list {
    width: 30%;
    height: 5px;
    display: flex;
    margin: 0 auto;
    margin-top: 20px;
  }
  .btn {
    transition: all 0.3s ease;
    flex: 1;
    background: rgb(244, 244, 244);
  }
  .btn:not(:first-child) {
    margin-left: 20px;
  }
  .last {
    left: -230px;
  }
  .next {
    right: -230px;
  }
}
</style>
