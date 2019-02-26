<template>
    <div class="strip-progress">
        <div class="progress-bg" :style="{height:height+'px','border-radius':height/2+'px'}">
            <div class="progress" :style="{width:percent+'%',background: gradient?'linear-gradient(to right, '+config.startGradient+','+config.endGradient+')':config.background,height:height+'px','border-radius':height/2+'px'}"></div>
        </div>
        <div class="percent-wrapper" :style="{color:config.color}">{{percent}}%</div>
    </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default: {
        background: "#0cc769",
        color: "#0cc769",
        startGradient: "#adfc77",
        endGradient: "#09c669"
      }
    },
    height: {
      type: Number,
      default: 22
    },
    gradient: {
      type: Boolean,
      default: false
    },
    percent: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang='scss' scoped>
.strip-progress {
  display: flex;
  align-items: center;
  .progress-bg {
    width: 100%;
    height: 22px;
    background: #e8e8e8;
    border-radius: 15px;
  }
  .progress {
    width: 20%;
    height: 22px;
    background: #0cc769;
    border-radius: 15px;
    transition: width 1s ease;
  }
  .gradient {
    background: linear-gradient(to right, red, blue); /* 标准的语法 */
  }
  .percent-wrapper {
    width: 50px;
    text-align: right;
    color: #0cc769;
    font-size: 18px;
  }
}
</style>
