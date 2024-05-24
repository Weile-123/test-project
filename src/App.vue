<template>
  <start-page v-if="showStartPage" :step="startStep" />
  <update-page v-if="showUpdatePage" />
  <div id="rootContent" @touchmove="moveEvent" :class="['root_content', pageSizeRate > 0.65 && winHeight < 600 && 'small_window', pageSizeRate > 0.65 && winHeight > 600 && 'pad_window', pageSizeRate < 0.65 && 'phone_window']">
    <div class="root_main">
      <van-pull-refresh v-model="loading" @refresh="onRefresh" style="min-height: 100vh">
        <template #pulling>
          <div></div>
        </template>
        <template #loosing>
          <div></div>
        </template>
        <template #loading>
          <div></div>
        </template>
        <router-view />
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
import StartPage from './components/start.vue'
import UpdatePage from './components/update.vue'
import loadingSourceMsg from './resource/index'

const overflow = 100
document.body.style.overflowY = 'hidden'
document.body.style.marginTop = `${overflow}px`
document.body.style.height = window.innerHeight + overflow + 'px'
document.body.style.paddingBottom = `${overflow}px`
window.scrollTo(0, overflow)

export default {
  components: { StartPage, UpdatePage },
  data() {
    return {
      loading: false,
      winHeight: 0,
      pageSizeRate: 1,
      startStep: 0,
      showStartPage: true,
      showUpdatePage: false,
      ts: 0,
    }
  },
  created() {
    this.$g.init('#000')
    let winWidth = window.innerWidth
    let winHeight = window.innerHeight
    this.winHeight = winHeight
    this.pageSizeRate = winWidth / winHeight
    this.$g.fullScreen()
    this.init()
  },
  async mounted() {
    let html = document.getElementsByTagName('html')[0]
    let defaultWidth = 375
    let defaultFontSize = 20
    let currentWidth = window.innerWidth
    let fontSize = defaultFontSize * (currentWidth / defaultWidth)
    html.style.fontSize = fontSize + 'px'
    window.onresize = function () {
      let currentWidth = window.innerWidth
      let fontSize = defaultFontSize * (currentWidth / defaultWidth)
      html.style.fontSize = fontSize + 'px'
    }
    try {
      let isShowUpdatePage = await this.$g.isShowUpdatePage()
      this.showUpdatePage = isShowUpdatePage
      await this.loadingSourceEvent()
    } catch (error) {
      this.$g.toast(error)
    }
    this.$nextTick(() => {
      // let scrollableEl = document.getElementById('rootContent');
      // console.log('scrollableEl====',scrollableEl)
      // document.documentElement.addEventListener('touchstart', (e)=>{this.ts = e.touches[0].clientY}, { passive: false })
      // document.documentElement.addEventListener('touchmove', (e)=>{
      //   const scroll = scrollableEl.scrollTop
      //   console.log('scroll=======',scroll)
      //   const te = e.changedTouches[0].clientY
      //   if (scroll <= 0 && this.ts >= te) {
      //     e.preventDefault()
      //   }
      // }, { passive: false })
    })
  },
  methods: {
    async init() {
      Telegram.WebApp.ready()
      Telegram.WebApp.expand()   
      const initData = window.Telegram.WebApp.initData
      this.$store.state.user.initData = initData
      console.log('电报对象',initData)
      const res =  await this.$api.usersLogin() // 注册/登录接口
      await this.$api.usersGetuser()  // 获取用户信息及挂机列表
      // this.$router.push('/home')
      this.showStartPage = false
    },
    moveEvent() {
      return false
    },
    onRefresh() {
      this.loading = false
    },
    handleWheel(event) {
      const container = this.$refs.rootContent
      // console.log(event.target , container)
      // 判断滚动事件发生的位置，如果不是在容器内部，则直接返回，禁用滚动
      if (event.target !== container) return false
    },
    loadingSourceEvent() {
      return new Promise(async (resolve, reject) => {
        try {
          let loadResourceKey = 'first'
          let loadingSourceArr = loadingSourceMsg[loadResourceKey]
          let imgsObj = {}
          let itemAdd = 25 / loadingSourceArr.length
          console.log('----itemAdd----',itemAdd)
          for (let i = 0; i < loadingSourceArr.length; i++) {
            this.startStep = this.startStep + itemAdd
            imgsObj[loadingSourceArr[i].name] = await this.$g.loadImg(loadingSourceArr[i].path)
          }
          console.log('imgsObj=====================',imgsObj);
          this.$store.dispatch('saveResource', imgsObj)
          return resolve()
        } catch (error) {
          return reject('Resource load fail')
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import url('./config/scss/global.scss');
@import url('./scss/index.scss');
* {
  box-sizing: border-box;
}
.root_main {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 1px;
  left: 0;
  z-index: 1;
  overflow-y: scroll;
}
</style>
