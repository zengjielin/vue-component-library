<template>
    <div class="switch">
        <div class="switch-wrapper" :style="{'width':width+'px','height': height+'px','border-radius': (height/2)+'px','background':this.status?switchBg:'#e9ebef'}" :class="{'close':!this.status}" @click="handleSwitch">
            <div class="slider" :style="{'width':(height-2)+'px','height':(height-2)+'px','left':left+'px'}"></div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      status: true,
      left: 1,
      switchBg: "#ff4949"
    };
  },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    width: {
      type: Number,
      default: 60
    },
    height: {
      type: Number,
      default: 30
    },
    background: {
      type: String,
      default: "#ff4949"
    }
  },
  watch: {
    value(data, old) {
      this.status = this.value; //拿到父组件传给子组件的值
      this.changeStatus();
    },
    status(data) {
      this.$emit("input", data); //通过子组件改变父组件的v-model的值
      this.changeStatus();
    },
    width() {
      this.changeStatus();
    },
    height() {
      this.changeStatus();
    },
    background(data) {
      if (data) {
        if (data.indexOf("#") == -1) {
          this.switchBg = "#ff4949";
        } else {
          this.switchBg = data;
        }
      }
    }
  },
  methods: {
    changeStatus() {
      if (this.status) {
        this.left = 1;
      } else {
        this.left = this.width - (this.height - 1);
      }
    },
    handleSwitch() {
      this.status ? (this.status = false) : (this.status = true);
      this.changeStatus();
      // this.$emit("change", this.status); //传change事件，可以让父组件使用@change
    }
  },
  mounted() {
    if (this.status != this.value) {
      this.status = this.value;
    }
    if (this.switchBg != this.background) {
      this.switchBg = this.background;
    }
  }
};
</script>

<style lang='scss' scoped>
.switch {
  .switch-wrapper {
    width: 60px;
    height: 30px;
    background: #ff4949;
    border-radius: 15px;
    position: relative;
    cursor: pointer;
  }
  .close {
    background: #e9ebef;
  }
  .slider {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #ffffff;
    position: absolute;
    top: 1px;
    left: 1px;
    z-index: 3;
    transition: left 0.4s;
  }
}
</style>
