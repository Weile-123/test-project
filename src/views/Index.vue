<template>
  <div class="index">
    <div class="top">
      <div class="box1">
        <img src="/src/assets/主界面/Dollar@2x.png" alt="" />
        <span class="text">{{ '999.999BBB' }}</span>
      </div>
      <div class="box2">
        <img src="/src/assets/主界面/diamond@2x.png" alt="" />
        <span class="text">{{ '999B' }}</span>
      </div>
      <div class="box3">
        <img src="/src/assets/主界面/gold@2x.png" alt="" />
        <span class="text">{{ '999B' }}</span>
      </div>
    </div>
    <div class="list">
      <div class="item" v-for="item in listData" :key="item.code">
        <div class="img" @click="imgClick(item)"></div>
        <div class="right">
          <div class="ItemName">{{ item.code }}</div>
          <div class="mid">
            <div class="progress">
              <span class="text">22,680</span>
              <div class="progress-box" :ref="'progress-box' + item.code"></div>
            </div>
            <div class="time" style="display: inline-block">1s</div>
          </div>
          <div class="button">
            <div class="left">XI Levels</div>
            <div class="right">|999.999BBB</div>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar">
      <img class="img1" src="/src/assets/主界面/X1 buy@2x.png" alt="" />
      <div class="img2-box">
        <img class="img2" src="/src/assets/主界面/Time Warp@2x.png" alt="" />
        <div class="text">Time Warp</div>
      </div>
      <div class="img3-box">
        <img class="img3" src="/src/assets/主界面/boost@2x.png" alt="" />
        <div class="text">Boost</div>
      </div>
      <div class="img4-box">
        <img class="img4" src="/src/assets/主界面/Event@2x.png" alt="" />
        <div class="text">Event</div>
      </div>
      <div class="img5-box">
        <div class="box">
          <img
            class="img5"
            src="/src/assets/主界面/Quick  collection@2x.png"
            alt=""
          />
        </div>
        <div class="text">Quick collection</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listData: [
        {
          code: 'ETH1',
          isDone:false
        },
        {
          code: 'ETH2',
          isDone:false
        },
        {
          code: 'ETH3',
          isDone:false
        },
        {
          code: 'ETH4',
          isDone:false
        },
        {
          code: 'NFY',
          isDone:false
        },{
          code: 'ETH1',
          isDone:false
        },
        {
          code: 'ETH2',
          isDone:false
        },
        {
          code: 'ETH3',
          isDone:false
        },
        {
          code: 'ETH4',
          isDone:false
        },
        {
          code: 'NFY',
          isDone:false
        }
      ]
    }
  },
  methods: {
    imgClick (item) {
      if(item.isDone) return 
      item.isDone = true
      this.$refs['progress-box' + item.code][0].style.cssText =
        'animation:move 2s'
      setTimeout(() => {
        this.$refs['progress-box' + item.code][0].style.cssText = ''
        item.isDone = false
      }, 2000)
    }
  }
}
</script>

<style>
@keyframes move {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>
<style lang="scss" scoped>
.index {
  font-size: 16px;
  height: 100vh;
  background: #01121f;
  padding-top: 37px;
  padding-left: 22px;
  .sidebar {
    display: flex;
    align-items: self-end;
    flex-direction: column;
    position: fixed;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100px;
    padding-top: 122px;
    .text {
        font-family: Oswald, Oswald;
        font-weight: 500;
        font-size: 16px;
        text-align: center;
      }
    .img2-box {
      width: 88px;
      color: #b4931e;
    }
    .img3-box {
      width: 88px;
      color: #c618b7;
    }
    .img4-box {
      width: 88px;
      color: #02bebc;
    }
    .img5-box {
      position: absolute;
      right: 0;
      bottom: 230px;
      .box {
        width: 100px;
          height: 100px;
        .img5 {
          width: 100%;
          height: 100%;
        }
      }
      .text {
        text-align: center;
        font-family: Oswald, Oswald;
        font-weight: 500;
        font-size: 20px;
        color: #8e24f9;
        font-style: normal;
      }
    }
    .img1 {
      width: 100%;
    }
    .img2,
    .img3,
    .img4 {
      width: 100%;
      height: 89px;
      margin-top: 33px;
    }
  }
  .top {
    display: flex;
    height: 82px;
    padding-left: 7px;
    img {
      width: 61px;
      height: 70px;
      margin-right: 12px;
    }
    .text {
      font-size: 30px;
      color: #fff;
      font-family: Oswald, Oswald;
      font-weight: 500;
      font-style: normal;
    }
    .box1 {
      width: 267px;
      background: #01233b;
      border: 2px solid #023355;
      display: flex;
      align-items: center;
      padding-left: 7px;
    }
    .box2,
    .box3 {
      width: 178px;
      margin: 0 3px;
      background: #01233b;
      border: 2px solid #023355;
      display: flex;
      align-items: center;
      padding-left: 7px;
    }
  }
  .list {
    margin-top: 17px;
    height: calc(100vh - 300px);
    overflow: scroll;
    .item {
      padding: 10px;
      height: 161px;
      width: 618px;
      display: flex;
      align-items: center;
      background: url('/src/assets/主界面/list\ box@2x.png');
      background-size: 100% 100%;
      margin-bottom: 13px;
      .img {
        width: 96px;
        height: 96px;
        border-radius: 15px 15px 15px 15px;
        border: 2px solid #0df7f5;
        margin-left: 13px;
        margin-right: 13px;
      }
      > .right {
        flex: 1;
        margin-left: 5px;
        margin-right: 22px;
        height: 100%;
        .button {
          width: 448px;
          height: 50px;
          background: #02bebc;
          border-radius: 5px 5px 5px 5px;
          display: flex;
          align-content: center;
          justify-content: space-between;
          align-items: center;
          padding: 0 30px 0 5px;
          color: #011523;
          font-family: Oswald, Oswald;
          font-weight: 500;
          font-size: 30px;
          font-style: normal;
          .left {
            font-size: 24px;
          }
        }
        .ItemName {
          color: #fff;
          font-family: Oswald, Oswald;
          font-weight: 500;
          font-style: normal;
          font-size: 24px;
          margin: 0;
          text-align: left;
        }
        .mid {
          display: flex;
          .progress {
            position: relative;
            width: 359px;
            height: 30px;
            margin: 5px 0px 10px 0px;
            border-radius: 10px;
            overflow: hidden;
            border-radius: 14px 14px 14px 14px;
            border: 2px solid #127495;
            &-box {
              top: 0;
              position: absolute;
              left: 0;
              height: 100%;
              background: linear-gradient(to right, #b85e05, #ba8f07);
              border-radius: 14px 14px 14px 14px;
            }
          }
          .time {
            font-family: Oswald, Oswald;
            font-weight: 500;
            font-size: 30px;
            font-style: normal;
            flex: 1;
            color: #fff;
            display: flex;
            align-content: center;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>
