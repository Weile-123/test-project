<template>
  <div class="Bots">
    <div class="title">Ranking</div>
    <div class="desc">They are called to serve and help you to annihilate the Universe.</div>
    <div class="options">
      <div class="option option1" :class="{ active: active === 0 }" @click="optionClick(0)">
        <img v-show="active === 0" src="/src/assets/Ranking/pesonal_1@2x.png" alt="" />
        <img v-show="!(active === 0)" src="/src/assets/Ranking/personal@2x.png" alt="" />

        Ranking
      </div>
      <div class="option" :class="{ active: active === 1 }" @click="optionClick(1)">
        <img v-show="active === 1" src="/src/assets/Ranking/squad@2x.png" alt="" />
        <img v-show="!(active === 1)" src="/src/assets/Ranking/squad_1@2x.png" alt="" />
        Squad
      </div>
    </div>
    <div class="list">
      <div class="title">
        <div>
          {{ 'The top 100 players can divide' }}
          <span class="num">{{ '1000' }}</span
          ><img src="/src/assets/main/Dollar@2x.png" alt="" />
        </div>
        <div>
          {{ 'You history highest score:' }}<span class="num">{{ '1000' }}</span>
        </div>
      </div>
      <div class="list-a">
        <div class="item" v-for="(item, index) in listData" :key="item.code" @click="showDialog = true">
          <div class="sort" v-show="![0, 1, 2].includes(index)">
            {{ index + 1 }}
          </div>
          <img v-if="index === 0" class="sortImg" src="/src/assets/Ranking/one@2x.png" alt="" />
          <img v-if="index === 1" class="sortImg" src="/src/assets/Ranking/two@2x.png" alt="" />
          <img v-if="index === 2" class="sortImg" src="/src/assets/Ranking/组 37@2x.png" alt="" />
          <div class="img"></div>
          <div class="center">
            <div class="name">Player Name</div>
            <div class="content">Boost content</div>
          </div>
          <div class="right">
            <div class="Score">Score</div>
            <div class="total">5222</div>
          </div>
        </div>
      </div>
    </div>
    <div class="last-one">
      <div class="item" >
        <div class="sort">
          {{ '100' }}
        </div>
        <div class="img"></div>
        <div class="center">
          <div class="name">Player Name</div>
          <div class="content">Boost content</div>
        </div>
        <div class="right">
          <div class="Score">Score</div>
          <div class="total">5222</div>
        </div>
      </div>
    </div>
    <van-popup v-model:show="showDialog" class="popup">
      <div class="dialog">
        <div class="dialog-title">Ranking rewards</div>
        <div class="dialog-item">
          <div class="No">{{ 'No 1' }}</div>
          <div class="num">{{ '1000' }}</div>
          <img src="/src/assets/shop/TON-@2x.png" class="icon" alt="" />
        </div>
        <img @click="showDialog = false" class="dialog-close" src="/src/assets/main1/btn_off@2x.png" alt="" />
      </div>
    </van-popup>
    <img @click="$router.push('/')" class="close" src="/src/assets/main1/btn_off@2x.png" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false, // 弹窗显示
      active: 0, // 选项卡激活索引
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
.Bots {
  padding: 0 25px;
  .popup {
     background: transparent;
     overflow: unset;
    .dialog {
      width: 687px;
      height: 732px;
      background: url('/src/assets/Pop-upbox.png') transparent;
      background-size: 100% 100%;
      padding: 0 44px;
      position: relative;
      border-top: 1px solid transparent;
      &-close {
        position: absolute;
        width: 86px;
        height: 86px;
        right: 0;
        top: -116px;
      }
      &-title {
        font-weight: 500;
        font-size: 48px;
        color: #21f8fb;
        margin-top: 72px;
        margin-bottom: 72px;
      }
      &-item {
        height: 101px;
        background: #163044;
        border-radius: 20px 20px 20px 20px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        padding: 0 25px 0 50px;
        .icon {
          width: 34px;
          height: 40px;
          margin-left: 30px;
        }
        .num {
          flex: 1;
          text-align: right;
          font-weight: 500;
          font-size: 36px;
          color: #eee;
        }
        .No {
          font-weight: 500;
          font-size: 36px;
          color: #eee;
        }
      }
    }
  }

  .close {
    width: 88px;
    height: 88px;
    position: fixed;
    top: 30px;
    right: 30px;
  }
  .last-one {
    width: 699px;
    height: 155px;
    position: fixed;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    .item {
      padding: 0px 72px 0px 102px;
      height: 161px;
      display: flex;
      align-items: center;
      background: #316d97;
      margin-bottom: 12px;
      border-radius: 40px;
      position: relative;
      .sortImg {
        width: 38px;
        height: 48px;
        position: absolute;
        left: 23px;
        top: 33px;
      }
      .sort {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 20px;
        font-weight: 500;
        font-size: 36px;
        color: #80a2b9;
        line-height: 1;
      }

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
          margin: 20px 0 0 0;
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
        .Score {
          line-height: 1;
          font-weight: 500;
          font-size: 24px;
          color: #80a2b9;
        }

        .total {
          line-height: 1;
          font-weight: 500;
          font-size: 36px;
          color: #21f8fb;
          margin-top: 20px;
        }
      }
    }
  }
  .list {
    .title {
      > div {
        display: flex;
        align-items: center;

        .num {
          font-weight: 500;
          font-size: 30px;
          color: #21f8fb;
          margin: 0 10px;
        }
      }

      margin: 0;
      height: 80px;
      font-weight: 500;
      font-size: 30px;
      color: #f1f1f1;
      line-height: 40px;
      text-align: left;

      img {
        width: 34px;
        height: 40px;
      }
    }

    .list-a {
      margin-top: 8px;
      height: calc(100% - 84px);
      overflow: auto;
    }

    height: 72vh;
    padding: 20px;
    background: linear-gradient(to top, #142f41, #071829);
    border-radius: 20px;

    .item {
      padding: 0px 50px 0px 82px;
      height: 161px;
      display: flex;
      align-items: center;
      background: url('/src/assets/main/list\ box@2x.png');
      background-size: 100% 100%;
      margin-bottom: 12px;
      position: relative;
      .sortImg {
        width: 38px;
        height: 48px;
        position: absolute;
        left: 23px;
        top: 33px;
      }
      .sort {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 38px;
        font-weight: 500;
        font-size: 36px;
        color: #80a2b9;
        line-height: 1;
      }

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
          margin: 20px 0 0 0;
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
        .Score {
          line-height: 1;
          font-weight: 500;
          font-size: 24px;
          color: #80a2b9;
        }

        .total {
          line-height: 1;
          font-weight: 500;
          font-size: 36px;
          color: #21f8fb;
          margin-top: 20px;
        }
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
        height: 22px;
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

    .option1 {
      img {
        width: 22px !important;
        height: 49px !important;
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
