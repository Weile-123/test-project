
<template>
  <div class="flex direction start start_content">
    <div class="title"><img src="/src/assets/启动页/GoMint@2x.png" class="title_img" alt=""></div>
    <div class="ani_content">
      <div class="loading_back"><img src="/src/assets/启动页/loading_1@2x.png" alt=""></div>
      <div class="loading_in"><img src="/src/assets/启动页/loading_2@2x.png" alt=""></div>
    </div>
    <div class="title_font loading">loading
      <span class="loading_item" v-for="(item, index) in spanIndexes" :key="index">.</span>
    </div>
    <div class="flex center progress_bar">
      <div class="progress_bar_content">
        <div class="progress_bar_point_item progress_bar_left_top_point"></div>
        <div class="progress_bar_point_item progress_bar_left_botom_point"></div>
        <div class="progress_bar_point_item progress_bar_right_top_point"></div>
        <div class="progress_bar_point_item progress_bar_right_botom_point"></div>
        <div class="flex progress_bar_main">
          <div :class="['progress_bar_item',step>= index && 'show_item']" v-for="(item,index) in 25" :key="index"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    step: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      blocks: [],
      spanIndexes: [0, 0, 0],
      currentIndex: 0,
      intervalId: null
    }
  },
  created() {
    
  },
  mounted() {

  },
  methods: {
    
  }
}
</script>
<style scoped lang="scss">
.ani_content{
  position: relative;
  width: 10rem;
  height: 10rem;
  margin: 3rem auto;
}
.loading_back img{
  width: 10rem;
  height: 10rem;
  position: absolute;
  top: 0;
  left: 0;
  animation: rotateLeft 8s linear infinite;
}
.loading_in img{
  width: 10rem;
  height: 10rem;
  position: absolute;
  top: 0;
  left: 0;
  animation: rotateRight 8s linear infinite;
}
@keyframes rotateLeft {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
@keyframes rotateRight {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.start_content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3000;
  padding-top: 10vh;
  box-sizing: border-box;
  background-image: url('/src/assets/启动页/bg@2x.png');
}

.title {
  img {
    width: 70vw;
  }
}
.loading {
  font-size: 1.5rem;
  color: #1AEAFE;
  margin-bottom: 0.5rem;
  margin-top: 4rem;
  .loading_item{
    font-size: 1.5rem;
    color: #1AEAFE;
    animation: loadingAni 2s linear infinite;
    &.loading_item:nth-of-type(1){
      animation-delay: 0.5s;
    }
    &.loading_item:nth-of-type(2){
      animation-delay: 1s;
    }
    &.loading_item:nth-of-type(3){
      animation-delay: 1.5s;
    }
  }
}
.progress_bar{
  width: 100%;
     margin-top: 0.5rem;
  .progress_bar_content{
    width: 60%;
    background-color: #1AEAFE;
    height: 1.6rem;
    padding: 0.1rem;
    box-sizing: border-box;
    position: relative;
    .progress_bar_point_item{
      position: absolute;
      height: 0.2rem;
      width: 0.2rem;
      background-color: #000;
      z-index: 1;
    }
    .progress_bar_left_top_point{
      border-right: 0.1rem solid #1AEAFE;
      border-bottom: 0.1rem solid #1AEAFE;
      top: 0;
      left: 0;
    }
    .progress_bar_left_botom_point{
      border-right: 0.1rem solid #1AEAFE;
      border-top: 0.1rem solid #1AEAFE;
      bottom: 0;
      left: 0;
    }
    .progress_bar_right_top_point{
      border-left: 0.1rem solid #1AEAFE;
      border-bottom: 0.1rem solid #1AEAFE;
      top: 0;
      right: 0;
    }
    .progress_bar_right_botom_point{
      border-left: 0.1rem solid #1AEAFE;
      border-top: 0.1rem solid #1AEAFE;
      bottom: 0;
      right: 0;
    }
    .progress_bar_main{
     height: 100%;
     width: 100%;
     background-color: #000;
     padding: 0.2rem 0.3rem;
     box-sizing: border-box;
      .progress_bar_item{
        height: 100%;
        width: calc(100% / 23 - 3px);
        background-color: #1AEAFE;
        margin: 0 1.7px;
        box-sizing: border-box;
        position: relative;
        transition: all 0.2s;
        opacity: 0;
        &.show_item{
          opacity: 1;
        }
        &.progress_bar_item:nth-of-type(1),&.progress_bar_item:nth-last-of-type(1){
          width: calc(100% / 30 - 0.1rem);
          margin-left: 0;
        }
        &.progress_bar_item:nth-last-of-type(1){
          margin-right: 0;
          margin-left: 0.085rem;
        }
        &.progress_bar_item:nth-of-type(1)::before{
          content: '';
          position: absolute;
          width: 0.23rem;
          height: calc(100% - 0.2rem);
          left: -0.1rem;
          top: 0.1rem;
          z-index: 2;
          background-color: #1AEAFE;
        }
        &.progress_bar_item:nth-last-of-type(1)::before{
          content: '';
          position: absolute;
          width: 0.23rem;
          height: calc(100% - 0.2rem);
          right: -0.1rem;
          top: 0.1rem;
          z-index: 2;
          background-color: #1AEAFE;
        }
      }
    }
  }

}

@keyframes box1 {
  0%,
  50% {
    transform: translate(100%, 0);
  }
  100% {
    transform: translate(200%, 0);
  }
}
@keyframes box2 {
  0% {
    transform: translate(0, 100%);
  }
  50% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(100%, 0);
  }
}
@keyframes box3 {
  0%,
  50% {
    transform: translate(100%, 100%);
  }
  100% {
    transform: translate(0, 100%);
  }
}
@keyframes box4 {
  0% {
    transform: translate(200%, 0);
  }
  50% {
    transform: translate(200%, 100%);
  }
  100% {
    transform: translate(100%, 100%);
  }
}

@keyframes loadingAni {
  0%{
    opacity: 0.2;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0.2;
  }
}
</style>
