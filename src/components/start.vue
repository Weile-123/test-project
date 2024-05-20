
<template>
   <div class="flex center start_content">
    <div class="progress_bar">
        <div class="progress_point" :style="{width:step+'%'}"></div>
    </div>
   </div>
</template>
<script>
export default {
  components: {},
  props:{
    step:{
        type:Number,
        default:0
    }
  },
  data() {
    return {
      total:30,
    }
  },
  created(){
   
    
  },
  mounted(){


  }
}
</script>
<style scoped lang="scss">
.start_content{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 3000;
    background-color: #fff;
}
.progress_bar{
    width: 300px;
    height: 20px;
    border: 1px solid #000;
    box-shadow: 0 0 10px #ccc;
    border-radius: 10px;
    overflow: hidden;
    padding: 1px;
    box-sizing: border-box;
    .progress_point{
        background-color: orangered;
        height: 100%;
        width: 0%;
        border-radius: 10px;
    }
}

</style>
