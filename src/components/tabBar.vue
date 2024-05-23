<template>
  <div class="tabBar">
    <img @click="tabBarClick(1)" class="img1" src="/src/assets/main/btn_friend@2x.png" alt="">
    <img @click="tabBarClick(2)" class="img2" src="/src/assets/main/btn_Expand@2x.png" alt="">
    <img @click="tabBarClick(3)" class="img3" src="/src/assets/main/btn_shop@2x.png" alt="">
  </div>
</template>

<script>
export default {
    data() {
      return {
        
      }
    },
    methods:{
      tabBarClick(type){
        this.$emit('tabBarClick',type)
      }
    }
}
</script>

<style lang="scss" scoped>
.tabBar {
    width: 100%;
    height: 180px;
    background-color: #01223A;
    padding: 0 12px 0 38px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .img1 {
        width: 188px;
        height: 82px;
    }
    .img2 {
        width: 110px;
        height: 127px;
    }
    .img3 {
        width: 215px;
        height: 108px;
    }
}
</style>