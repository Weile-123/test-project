<template>
  <div class="setup">
    <div class="title">setup</div>
    <div class="list">
      <div class="list-a">
        <div class="item" v-for="item in setUpList" :key="item.desc">
          <div class="desc">{{ item.desc }}</div>
          <van-switch inactive-color="#0b1f31" active-color="#56bbbb" size="26px" class="switch" v-model="item.isTrue" />
        </div>
        <div class="Copied">Copied</div>
        <div class="desc">
          <div class="desc1">SUPPORT ID (press to copy)</div>
          <div class="desc2">7P9aughyEmWRFILv41LVNJxmeM03</div>
        </div>
      </div>
    </div>

    <img @click="$router.push('/')" class="close" src="/src/assets/main1/btn_off@2x.png" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      setUpList: [
        {
          desc: 'Sound effects',
          isTrue: false,
        },
        {
          desc: 'Music',
          isTrue: false,
        },
        {
          desc: 'Receive push messages',
          isTrue: false,
        },
        {
          desc: 'Contact us',
          isTrue: false,
        },
      ],
      active: 0,
      listData: [
        {
          code: 'Sound effects',
          isDone: false,
        },
        {
          code: 'Music',
          isDone: false,
        },
        {
          code: 'Receive push messages',
          isDone: false,
        },
        {
          code: 'Contact us',
          isDone: false,
        },
      ],
    }
  },
  methods: {
    optionClick(i) {
      this.active = i
    },
  },
}
</script>

<style lang="scss" scoped>
.setup {
  padding: 0 25px;
  .Copied {
    margin: 38px auto 12px;
    width: 228px;
    height: 63px;
    line-height: 63px;
    background: #011a28;
    border-radius: 10px 10px 10px 10px;
    font-weight: 500;
    font-size: 36px;
    color: #ffffff;
  }
  .close {
    width: 88px;
    height: 88px;
    position: fixed;
    top: 30px;
    right: 30px;
  }
  .list {
    .list-a {
      > .desc {
        overflow: hidden;
        width: 639px;
        height: 119px;
        background: #001825;
        opacity: 0.8;
        font-weight: 500;
        font-size: 30px;
        color: #80a2b9;
        .desc1 {
          line-height: 1;
          margin: 24px 0 17px;
        }
        .desc2 {
          line-height: 1;
        }
      }
      margin-top: 8px;
      height: calc(100% - 54px);
      overflow: auto;
    }
    height: 80vh;
    padding: 20px;
    background: linear-gradient(to top, #142f41, #071829);
    border-radius: 20px;
    .item {
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: url('/src/assets/main/list\ box@2x.png');
      background-size: 100% 100%;
      margin-bottom: 23px;
      padding: 0 30px 0 50px;
      .desc {
        font-weight: 500;
        font-size: 30px;
        color: #f1f1f1;
      }
    }
  }

  > .title {
    line-height: 1;
    font-weight: 500;
    font-size: 72px;
    color: #70c6fe;
    margin-top: 42px;
    margin-bottom: 50px;
  }
}
</style>
