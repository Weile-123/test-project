<template>
  <div class="Bots">
    <div class="title">Task</div>
    <div class="options">
      <div class="option" :class="{ active: active === 0 }" @click="optionClick(0)">
        <img v-show="!(active === 0)" src="/src/assets/Invite/Invite_1@2x.png" alt="" />
        <img v-show="active === 0" src="/src/assets/Invite/Invite@2x.png" alt="" />
        Invite
      </div>
      <div class="option" :class="{ active: active === 1 }" @click="optionClick(1)">
        <img v-show="!(active === 1)" src="/src/assets/Invite/Daily_1@2x.png" alt="" />
        <img v-show="active === 1" src="/src/assets/Invite/Daily@2x.png" alt="" />
        Daily
      </div>
    </div>
    <div class="list">
      <div class="title">{{ 'Together Tasks' }}</div>
      <div class="TogetherTasks">
        <div class="top">
          <div class="top-1">
            <span class="text">Complete all together tasks</span>
            <span class="num">{{ '+3' }}</span>
            <img src="/src/assets/shop/TON-@2x.png" alt="" />
          </div>
          <div class="top-2">
            <span class="Finish">Finish:</span>
            <span class="num"
              ><span class="num-1">{{ '2' }}</span
              ><span class="num-2">{{ '/4' }}</span></span
            >
          </div>
          <div class="item" v-for="item in TogetherTasksList" :key="item.nmae">
            <img src="/src/assets/shop/wallet@2x.png" alt="" />
            <div class="item-name">{{ item.name }}</div>
            <div class="item-noJoin" v-show="!item.isJoin">Join</div>
            <img src="/src/assets/Invite/Finish@2x.png" class="item-join" v-show="item.isJoin" />
          </div>
        </div>
      </div>
      <div class="title">{{ 'Invite Tasks' }}</div>
      <div class="InviteTasks">
        <div class="top">
          <div class="item">
            <img src="/src/assets/shop/wallet@2x.png" alt="" />
            <div class="item-name">{{ 'Invite 1 friend' }}</div>
            <div class="item-num">+1<img src="/src/assets/shop/TON-@2x.png" alt="" /></div>
            <div class="item-noJoin">Invite</div>
          </div>
        </div>
      </div>
      <div class="Friends">
        <div class="Friends-title">{{ 'Friends' }}</div>
        <div class="item" v-for="item in listData" :key="item.code" @click="showDialog = true">
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
    <img @click="$router.push('/')" class="close" src="/src/assets/main1/btn_off@2x.png" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      TogetherTasksList: [
        {
          name: ' Join our TG channel',
          isJoin: true,
        },
        {
          name: ' Join our TG group',
          isJoin: true,
        },
        {
          name: '  Join our TAPPPark',
          isJoin: false,
        },
        {
          name: ' Authorization TG wallet',
          isJoin: false,
        },
      ],
      active: 0,
      listData: [
        {
          code: 'ETH1',
          isDone: false,
        },
        {
          code: 'ETH2',
          isDone: false,
        }
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
    .Friends {
      &-title {
        font-size: 36px;
        color: #ffffff;
        text-align: left;
        padding-left: 41px;
        margin-bottom: 20px;
      }
      .item {
      padding: 0px 50px 0px 41px;
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
    .InviteTasks {
      width: 650px;
      background: #09425d;
      border-radius: 0px 20px 20px 20px;
      padding: 18px 10px;
      margin-bottom: 20px;
      .item {
        height: 100px;
        background: #052b42;
        border-radius: 20px 20px 20px 20px;
        margin-top: 13px;
        display: flex;
        align-items: center;
        padding: 0 10px 0 20px;
        img {
          width: 47px;
          height: 47px;
          margin-right: 20px;
        }
        &-name {
          flex: 1;
          text-align: left;
          font-size: 30px;
          color: #ffffff;
        }
        &-noJoin {
          width: 112px;
          height: 62px;
          background: #0c5672;
          border-radius: 17px 17px 17px 17px;
          border: 2px solid #2efaf8;
          font-weight: 500;
          font-size: 30px;
          color: #21f8fb;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        &-join {
          width: 37px !important;
          height: 26px !important;
          margin-right: 30px;
        }
        &-num {
          font-size: 36px;
          color: #1ccfd7;
          display: flex;
          align-items: center;
          margin-right: 50px;
          img {
            margin-left: 10px;
            width: 34px;
            height: 40px;
          }
        }
      }
    }
    .TogetherTasks {
      width: 650px;
      height: 568px;
      background: #09425d;
      border-radius: 0px 20px 20px 20px;
      padding: 18px 10px;
      margin-bottom: 20px;
      .item {
        height: 100px;
        background: #052b42;
        border-radius: 20px 20px 20px 20px;
        margin-top: 13px;
        display: flex;
        align-items: center;
        padding: 0 10px 0 20px;
        img {
          width: 47px;
          height: 47px;
          margin-right: 20px;
        }
        &-name {
          flex: 1;
          text-align: left;
          font-size: 30px;
          color: #ffffff;
        }
        &-noJoin {
          width: 112px;
          height: 62px;
          background: #0c5672;
          border-radius: 17px 17px 17px 17px;
          border: 2px solid #2efaf8;
          font-weight: 500;
          font-size: 30px;
          color: #21f8fb;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        &-join {
          width: 37px !important;
          height: 26px !important;
          margin-right: 30px;
        }
      }
      .top {
        &-1 {
          display: flex;
          align-items: center;
          justify-content: start;
          .text {
            font-size: 30px;
            color: #80a2b9;
          }
          .num {
            font-size: 36px;
            color: #1ccfd7;
            margin: 0 10px;
          }
          img {
            width: 34px;
            height: 40px;
          }
        }
        &-2 {
          display: flex;
          align-items: center;
          justify-content: start;
          .Finish {
            font-size: 36px;
            color: #ffffff;
            margin-right: 20px;
          }
          .num {
            &-1 {
              font-size: 36px;
              color: #1ccfd7;
            }
            &-2 {
              font-size: 30px;
              color: #80a2b9;
            }
          }
        }
      }
    }
    > .title {
      width: 360px;
      height: 62px;
      background: #103c5c;
      border-radius: 20px 20px 0px 0px;
      margin: 0;

      font-size: 30px;
      color: #f1f1f1;
      line-height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .list-a {
      margin-top: 8px;
      height: calc(100% - 54px);
      overflow: auto;
    }
    overflow: auto;
    height: 80vh;
    padding: 20px;
    background: linear-gradient(to top, #142f41, #071829);
    border-radius: 20px;
    > .item {
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
          font-size: 30px;
          line-height: 30px;
          color: #f1f1f1;
        }
        .content {
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

      font-size: 20px;
      color: #80a2b9;
      border-radius: 20px 0 0;
      margin-right: 8px;

      &.active {
        width: 190px;
        height: 70px;
        background: #103c5c;
        img {
          width: 37px;
          height: 35px;
          vertical-align: bottom;
          margin-right: 10px;
        }

        font-size: 30px;
        color: #ffffff;
      }
    }
  }
  > .title {
    font-size: 72px;
    color: #70c6fe;
    margin-top: 42px;
  }
  .desc {
    font-size: 30px;
    color: #80a2b9;
    margin: 0 auto;
    line-height: 30px;
    font-style: normal;
    padding: 0 40px;
  }
}
</style>
