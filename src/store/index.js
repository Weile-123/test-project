import { createStore } from 'vuex'
export default createStore({
  state: {
    sourceMsg:{},
    walletInfo:{}
  },
  mutations: {
    SAVE_RESOURCE(state,msg){
      state.sourceMsg = msg;
    },
    CHANGE_WALLET_INFO(state,walletInfo){
      state.walletInfo = walletInfo;
    }
  },
  actions: {
    saveResource({ commit },imgMsg){
      commit('SAVE_RESOURCE',imgMsg)
    },
    changeWalletInfo({commit},walletInfo){
      console.log('walletInfo=======',walletInfo)
      commit('CHANGE_WALLET_INFO',walletInfo)
    }
  },
  modules: {
  }
})
