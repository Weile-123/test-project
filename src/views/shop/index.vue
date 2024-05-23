<template>
  <div class="shop">
    <div class="title">Shop</div>
    <div class="options">
      <div class="option" :class="{ active: active === 0 }" @click="optionClick(0)">
        <img src="/src/assets/main/diamond@2x.png" alt="" />
        Enhance
      </div>
      <div class="option" :class="{ active: active === 1 }" @click="optionClick(1)">
        <img src="/src/assets/shop/TON_null@2x.png" alt="" />
        Ton
      </div>
    </div>
    <div class="list">
      <div class="title"><img src="/src/assets/shop/TON-@2x.png" alt="" />{{ '999' }}</div>
      <div class="Enhance">
        <div class="Enhance-title">Enhance</div>
        <div class="Enhance-item">
          <div class="img"></div>
          <div class="Enhance-item-name">Product Name</div>
          <div class="Enhance-item-desc">Product description Product description</div>
          <div class="Enhance-item-num"><img src="/src/assets/main/diamond@2x.png" alt="" />{{ '10' }}</div>
          <div class="Enhance-item-rete">X{{ '2' }}</div>
        </div>
        <div class="Enhance-item">
          <div class="img"></div>
          <div class="Enhance-item-name">Product Name</div>
          <div class="Enhance-item-desc">Product description Product description</div>
          <div class="Enhance-item-num"><img src="/src/assets/main/diamond@2x.png" alt="" />{{ '10' }}</div>
          <div class="Enhance-item-rete">X{{ '2' }}</div>
        </div>
        <div class="Enhance-item">
          <div class="img"></div>
          <div class="Enhance-item-name">Product Name</div>
          <div class="Enhance-item-desc">Product description Product description</div>
          <div class="Enhance-item-num"><img src="/src/assets/main/diamond@2x.png" alt="" />{{ '10' }}</div>
          <div class="Enhance-item-rete">X{{ '2' }}</div>
        </div>
        <div class="Enhance-item">
          <div class="img"></div>
          <div class="Enhance-item-name">Product Name</div>
          <div class="Enhance-item-desc">Product description Product description</div>
          <div class="Enhance-item-num"><img src="/src/assets/main/diamond@2x.png" alt="" />{{ '10' }}</div>
          <div class="Enhance-item-rete">X{{ '2' }}</div>
        </div>
        <div class="Enhance-item">
          <div class="img"></div>
          <div class="Enhance-item-name">Product Name</div>
          <div class="Enhance-item-desc">Product description Product description</div>
          <div class="Enhance-item-num"><img src="/src/assets/main/diamond@2x.png" alt="" />{{ '10' }}</div>
          <div class="Enhance-item-rete">X{{ '2' }}</div>
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
      active: 0,
      listData: [
        {
          code: 'ETH1',
          isDone: false,
        },
        {
          code: 'ETH2',
          isDone: false,
        },
        {
          code: 'ETH3',
          isDone: false,
        },
        {
          code: 'ETH4',
          isDone: false,
        },
        {
          code: 'NFY',
          isDone: false,
        },
        {
          code: 'ETH1',
          isDone: false,
        },
        {
          code: 'ETH2',
          isDone: false,
        },
        {
          code: 'ETH3',
          isDone: false,
        },
        {
          code: 'ETH4',
          isDone: false,
        },
        {
          code: 'NFY',
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
.shop {
  padding: 0 25px;
  line-height: 1;
  font-weight: 500;
  .close {
    width: 88px;
    height: 88px;
    position: fixed;
    top: 30px;
    right: 30px;
  }
  .list {
    overflow: auto;
    .Enhance {
      display: flex;
      flex-wrap: wrap;
      &-title {
        width: 100%;
        height: 118px;
        background: url('/src/assets/shop/title_bg.png');
        background-size: 100% 100%;
        font-size: 36px;
        color: #5cafe4;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &-item {
        width: 312px;
        height: 340px;
        background: url('/src/assets/shop/list box_1@2x.png');
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin-bottom: 40px;
        &:nth-child(even) {
          margin-right: 20px;
        }
        &-rete {
          position: absolute;
          font-size: 30px;
          color: #21f8fb;
          top: 38px;
          right: 56px;
        }
        &-num {
          width: 162px;
          height: 62px;
          background: #0c5672;
          border-radius: 17px 17px 17px 17px;
          border: 2px solid #2efaf8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          color: #21f8fb;
          position: absolute;
          left: 50%;
          bottom: -10px;
          transform: translateX(-50%);
          img {
            width: 33px;
            height: 39px;
            margin-right: 20px;
          }
        }
        &-desc {
          width: 190px;
          font-size: 24px;
          color: #80a2b9;
        }
        &-name {
          font-size: 30px;
          color: #f1f1f1;
          margin: 15px 0;
        }
        .img {
          width: 97px;
          height: 97px;
          background: #a1d2d3;
          border-radius: 15px 15px 15px 15px;
          border: 2px solid #0df7f5;
          margin-top: 38px;
        }
      }
    }
    .title {
      margin-bottom: 24px;
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
    height: 75vh;
    padding: 20px;
    background: linear-gradient(to top, #142f41, #071829);
    border-radius: 20px;
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
}
</style>
