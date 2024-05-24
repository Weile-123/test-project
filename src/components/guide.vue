<template>
  <!-- 引导页面 -->
  <van-overlay :show="show">
    <div v-show="type === 1" class="type1">
      <img class="type1-arrow" src="/src/assets/guide/arrow.png" alt="" />
      <div class="type1-text text-box">Click ETH to get your first profit</div>
    </div>
  </van-overlay>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      type: 1, // 1.引导收取
    }
  },
}
</script>

<style lang="scss" scoped>
.text-box {
  height: 161px;
  width: 618px;
  font-weight: 500;
  font-size: 30px;
  color: #f2f2f2;
  line-height: 1;
}
.type1 {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  &-arrow {
    width: 50px;
    height: 50px;
    animation: move 1s linear infinite;
    position: fixed;
    left: 100px;
    top: 230px;
  }
  &-text {
  }
}
@keyframes move {
  0% {
    transform: translateX(0px) translateY(0px) rotate(-45deg);
  }
  50% {
    transform: translateX(10px) translateY(10px) rotate(-45deg);
  }
  100% {
    transform: translateX(0px) translateY(0px) rotate(-45deg);
  }
}
</style>
