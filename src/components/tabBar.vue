<template>
  <div class="tabBar">
    <img class="img1" src="/src/assets/主界面/btn_friend@2x.png" alt="">
    <img class="img2" src="/src/assets/主界面/btn_Expand@2x.png" alt="">
    <img class="img3" src="/src/assets/主界面/btn_shop@2x.png" alt="">
  </div>
</template>

<script>
export default {

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