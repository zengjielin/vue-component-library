<template>
    <div class="circle-progress">
        <canvas id="circle-canvas" :width="circleRadius*2" :height="circleRadius*2"></canvas>
        <canvas id="percent-canvas" :width="circleRadius*2" :height="circleRadius*2"></canvas>
    </div>
</template>

<script>
let progressTimer = null; //进度条的定时器
let progressSpeed = 20; //进度的条变化的速度

let percentTimer = null; //百分比的定时器
let percentSpeed = 1; //百分比变化的速度

export default {
  props: {
    progressConfig: {
      type: Object,
      default: () => {
        return {
          ringWidth: 24, //圆环宽度
          ringBackground: "#E5E9F2", //进度条背景色
          ringColor: "#5EE270", //进度条颜色
          startGradient: "#adfc77", //开始渐变色，当progressGradient为true时生效
          endGradient: "#09c669" //结束渐变色，当progressGradient为true时生效
        };
      }
    },
    circleRadius: {
      //进度条的半径
      type: Number,
      default: 190
    },
    percent: {
      //进度条已完成进度
      type: Number,
      default: 0
    },
    progressGradient: {
      //进度条是否使用渐变
      type: Boolean,
      default: false
    },
    percentGradient: {
      //是否使用文字渐变
      type: Boolean,
      default: false
    },
    percentConfig: {
      type: Object,
      default: () => {
        return {
          size: 40, //文字大小
          txtColor: "#5EE270", //文字颜色
          startGradient: "#adfc77", //开始渐变色，当percentGradient为true时生效
          endGradient: "#09c669" //结束渐变色，当percentGradient为true时生效
        };
      }
    }
  },
  data() {
    return {
      complete: 0,
      percentText: 0
    };
  },
  methods: {
    initCanvas() {
      //画进度条的背景
      let circle = document.getElementById("circle-canvas");
      let bgCtx = circle.getContext("2d");
      bgCtx.strokeStyle = this.progressConfig.ringBackground;
      bgCtx.lineWidth = this.progressConfig.ringWidth;
      bgCtx.beginPath();
      bgCtx.arc(
        this.circleRadius,
        this.circleRadius,
        this.circleRadius - this.progressConfig.ringWidth / 2,
        0 * Math.PI,
        2 * Math.PI,
        false
      );
      bgCtx.stroke();
    },
    drawCircleProgress() {
      //画进度条
      let circle = document.getElementById("circle-canvas");
      let progressCtx = circle.getContext("2d");
      if (this.progressGradient) {
        if (
          this.progressConfig.startGradient &&
          this.progressConfig.endGradient
        ) {
          let gradient = progressCtx.createLinearGradient(0, 0, 170, 0);
          gradient.addColorStop("0", this.progressConfig.startGradient);
          gradient.addColorStop("1", this.progressConfig.endGradient);
          progressCtx.strokeStyle = gradient; //线条渐变色
        } else {
          progressCtx.strokeStyle = this.progressConfig.ringColor;
        }
      } else {
        progressCtx.strokeStyle = this.progressConfig.ringColor;
      }
      progressCtx.lineWidth = this.progressConfig.ringWidth; //线条宽度
      progressCtx.lineCap = "round"; //线条两端的样式
      if (this.percent != 0) {
        progressTimer = setInterval(() => {
          this.drawMoveProgress(progressCtx, this.percent);
        }, progressSpeed);
      }
    },
    drawMoveProgress(ctx, percent) {
      // 画已完成的进度条
      this.complete += percent / progressSpeed;
      if (this.complete >= percent) {
        clearInterval(progressTimer);
      }
      ctx.beginPath();
      ctx.arc(
        this.circleRadius,
        this.circleRadius,
        this.circleRadius - this.progressConfig.ringWidth / 2,
        0 * Math.PI,
        0.02 * this.complete * Math.PI,
        false
      );
      ctx.stroke();
    },
    drawPercent() {
      //画文字百分比
      let percent = document.getElementById("percent-canvas");
      let percentCtx = percent.getContext("2d");
      if (this.percentGradient) {
        let gradient = percentCtx.createLinearGradient(0, 0, 190, 0);
        if (
          this.percentConfig.startGradient &&
          this.progressGradient.endGradient
        ) {
          gradient.addColorStop("0", this.percentConfig.startGradient);
          gradient.addColorStop("1", this.percentConfig.endGradient);
          percentCtx.fillStyle = gradient;
        }
      } else {
        percentCtx.fillStyle = this.percentConfig.txtColor;
      }
      percentCtx.font = `${this.percentConfig.size}px Arial`;
      percentCtx.textAlign = "center";
      if (this.percent != 0) {
        percentTimer = setInterval(() => {
          percentCtx.clearRect(
            0,
            0,
            this.circleRadius * 2,
            this.circleRadius * 2
          );
          this.drawMovePercent(percentCtx, this.percent);
        }, percentSpeed);
      } else {
        this.drawMovePercent(percentCtx, this.percent);
      }
    },
    drawMovePercent(ctx, percent) {
      if (percent != 0) {
        this.percentText++;
        if (this.percentText >= percent) {
          clearInterval(percentTimer);
        }
      } else {
        this.percentText = 0;
      }
      ctx.fillText(
        this.percentText + "%",
        this.circleRadius,
        this.circleRadius + this.percentConfig.size / 2
      );
    }
  },
  watch: {
    percent() {
      this.drawCircleProgress();
      this.drawPercent();
    }
  },
  mounted() {
    this.initCanvas();
    this.drawPercent();
  }
};
</script>

<style lang='scss'>
.circle-progress {
  position: relative;
  #circle-canvas {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
  }
  #percent-canvas {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
