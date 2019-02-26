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
      percentText: 0,
      percentComplete: 0
    };
  },
  methods: {
    drawCircleProgress() {
      //画进度条
      let circle = document.getElementById("circle-canvas");
      let progressCtx = circle.getContext("2d");
      if (this.percent != 0) {
        progressTimer = setInterval(() => {
          progressCtx.clearRect(
            0,
            0,
            this.circleRadius * 2,
            this.circleRadius * 2
          );
          this.drawMoveProgress(progressCtx, this.percent);
        }, progressSpeed);
      }
    },
    drawMoveProgress(ctx, percent) {
      this.complete += percent / progressSpeed;
      if (this.complete >= percent) {
        clearInterval(progressTimer);
      }
      //画背景环形图
      ctx.strokeStyle = this.progressConfig.ringBackground;
      ctx.lineWidth = this.progressConfig.ringWidth;
      ctx.beginPath();
      ctx.arc(
        this.circleRadius,
        this.circleRadius,
        this.circleRadius - this.progressConfig.ringWidth / 2,
        0 * Math.PI,
        2 * Math.PI,
        false
      );
      ctx.stroke();
      // 画已完成的进度条
      if (this.progressGradient) {
        //是否使用进度条渐变色
        if (
          //当startGradient和endGradient都不为空的时候，渐变色才生效
          this.progressConfig.startGradient &&
          this.progressConfig.endGradient
        ) {
          let gradient = ctx.createLinearGradient(0, 0, 170, 0);
          gradient.addColorStop("0", this.progressConfig.startGradient);
          gradient.addColorStop("1", this.progressConfig.endGradient);
          ctx.strokeStyle = gradient; //线条渐变色
        } else {
          ctx.strokeStyle = this.progressConfig.ringColor;
        }
      } else {
        ctx.strokeStyle = this.progressConfig.ringColor;
      }
      ctx.lineWidth = this.progressConfig.ringWidth; //线条宽度
      ctx.lineCap = "round"; //线条两端的样式
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
            //每次更新百分比数字的时候都清除一下
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
      this.percentText = 0;
      this.complete = 0;
      this.drawCircleProgress();
      this.drawPercent();
    },
    percentComplete() {
      this.drawCircleProgress();
    }
  },
  mounted() {
    this.drawPercent();
    if (this.percentComplete != this.percent) {
      this.percentComplete = this.percent;
    }
  }
};
</script>

<style lang='scss' scoped>
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
