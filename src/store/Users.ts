import { Module } from "vuex";
import { Authentication } from "@/store/Type";
import axios, { AxiosResponse } from "axios";

export const state: Authentication.UserState = {
  items: [],
  item: undefined,
  current_page: 1,
  last_page: 2,
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UsersModule: Module<Authentication.UserState, any> = {
  namespaced: true,
  state,
  actions: {
    getUsers({ commit }) {
      axios
        .get(`https://reqres.in/api/users`,
        {params:{page:state.current_page}})
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((rep: AxiosResponse<any>) => {
          commit("append", rep.data.data);
          commit("setLastPage", rep.data.total_pages);
          return rep.data.data;
        });
    },
    getUser({ commit }) {
      axios
        .get("https://reqres.in/api/users/2")
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((resp: AxiosResponse<any>) => {
          commit("setItem", resp.data.data);
        });
    },
  },
  mutations: {
    setPage(state, rep) {
      state.current_page = rep;
    },
    reset(state) {
      state.items = [];
      state.current_page = 0;
    },
    append(state, rep) {
      state.items = rep;
    },
    setItem(state, rep) {
      state.item = rep;
    },
    setLastPage(state, rep) {
      state.last_page = rep;
    },
    update(state,rep) {
      const index = state.items?.findIndex(item =>item.id ===rep.id)
      if (index !== -1) {
        state.items![index!]=rep
      }
    },
  },
  getters: {
    items: (state) => state.items,
    item: (state) => state.item,
    current_page: (state) => state.current_page,
    last_page: (state) => state.last_page,
  },
};
