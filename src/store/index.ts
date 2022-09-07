import Vue from 'vue'
import Vuex from 'vuex'
import {UsersModule} from "@/store/Users";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    User:UsersModule
  }
})
