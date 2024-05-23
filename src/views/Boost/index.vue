<template>
  <div class="Boost">
    <div class="title">Boost</div>
    <div class="desc">
      They are called to serve and help you to annihilate the Universe.
    </div>
    <div class="options">
      <div
        class="option"
        :class="{ active: active === 0 }"
        @click="optionClick(0)"
      >
        <img src="/src/assets/main/Dollar@2x.png" alt="" />
        Money
      </div>
      <div
        class="option"
        :class="{ active: active === 1 }"
        @click="optionClick(1)"
      >
        <img src="/src/assets/Boost/Investors_null@2x.png" alt="" />
        Investors
      </div>
      <div
        class="option"
        :class="{ active: active === 2 }"
        @click="optionClick(2)"
      >
        <img src="/src/assets/Boost/Megatoken@2x.png" alt="" />
        Megatoken
      </div>
    </div>
    <div class="list">
      <div class="title">
        <img src="/src/assets/main/Dollar@2x.png" alt="" />{{ '999.999BBBB' }}
      </div>
      <div class="list-a">
        <div class="item" v-for="item in listData" :key="item.code">
          <div class="img"></div>
          <div class="center">
            <div class="name">Boost Name</div>
            <div class="content">Boost content</div>
            <div class="total">
              <img src="/src/assets/main/Dollar@2x.png" alt="" />{{ '999B' }}
            </div>
          </div>
          <div class="right">CALL ON</div>
        </div>
      </div>
    </div>
    <img
      @click="$router.push('/')"
      class="close"
      src="/src/assets/main1/btn_off@2x.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      listData: [
        {
          code: 'ETH1',
          isDone: false
        },
        {
          code: 'ETH2',
          isDone: false
        },
        {
          code: 'ETH3',
          isDone: false
        },
        {
          code: 'ETH4',
          isDone: false
        },
        {
          code: 'NFY',
          isDone: false
        },
        {
          code: 'ETH1',
          isDone: false
        },
        {
          code: 'ETH2',
          isDone: false
        },
        {
          code: 'ETH3',
          isDone: false
        },
        {
          code: 'ETH4',
          isDone: false
        },
        {
          code: 'NFY',
          isDone: false
        }
      ]
    }
  },
  methods: {
    optionClick (i) {
      this.active = i
    }
  }
}
</script>

<style lang="scss" scoped>
.Boost {
  padding: 0 25px;
  .close {
    width: 88px;
    height: 88px;
    position: fixed;
    top: 30px;
    right: 30px;
  }
  .list {
    .title {
      margin: 0;
      height: 46px;
      font-weight: 500;
      font-size: 30px;
      color: #f1f1f1;
      line-height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 39px;
        height: 46px;
        margin-right: 14px;
      }
    }
    .list-a {
      margin-top: 8px;
      height: calc(100% - 54px);
      overflow: auto;
    }
    height: 70vh;
    padding: 20px;
    background: linear-gradient(to top, #142f41, #071829);
    border-radius: 20px;
    .item {
      padding: 10px 30px;
      height: 161px;
      display: flex;
      align-items: center;
      background: url('/src/assets/main/list\ box@2x.png');
      background-size: 100% 100%;
      margin-bottom: 12px;
      .img {
        width: 96px;
        height: 96px;
        border-radius: 15px 15px 15px 15px;
        border: 2px solid #0df7f5;
        margin-right: 30px;
      }
      .center {
        flex: 1;
        text-align: left;
        .name {
          font-weight: 500;
          font-size: 30px;
          line-height: 30px;
          color: #f1f1f1;
        }
        .content {
          font-weight: 500;
          font-size: 24px;
          color: #80a2b9;
          line-height: 24px;
          margin: 10px 0;
        }
        .total {
          img {
            width: 39px;
            height: 46px;
            margin-right: 20px;
          }
          font-weight: 500;
          font-size: 24px;
          color: #f1f1f1;
          display: flex;
          align-items: center;
        }
      }
      .right {
        width: 162px;
        height: 72px;
        background: #0c5672;
        border-radius: 17px 17px 17px 17px;
        border: 2px solid #2efaf8;
        font-weight: 500;
        font-size: 36px;
        color: #21f8fb;
        font-style: normal;
        line-height: 68px;
      }
    }
  }
  .options {
    margin-top: 33px;
    display: flex;
    align-items: end;
    padding-left: 25px;
    .option {
      img {
        width: 20px;
        height: 20px;
        vertical-align: bottom;
        margin-right: 10px;
      }
      width: 138px;
      height: 60px;
      line-height: 60px;
      background: #0a2438;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      font-size: 20px;
      color: #80a2b9;
      border-radius: 20px 0 0;
      margin-right: 8px;

      &.active {
        width: 190px;
        height: 70px;
        background: #103c5c;
        img {
          width: 39px;
          height: 46px;
          vertical-align: bottom;
          margin-right: 10px;
        }
        font-weight: 500;
        font-size: 30px;
        color: #ffffff;
      }
    }
  }
  > .title {
    font-weight: 500;
    font-size: 72px;
    color: #70c6fe;
    margin-top: 42px;
  }
  .desc {
    font-weight: 500;
    font-size: 30px;
    color: #80a2b9;
    margin: 0 auto;
    line-height: 30px;
    font-style: normal;
    padding: 0 40px;
  }
}
</style>
