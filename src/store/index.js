import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blog: 0
  },
  mutations: {
     setBlog: (state,data) =>{
         state.blog = data;
     },
  },
  getters:{
      getBlog: state => {
         return state.blog
      }
  },
  actions: {},
  modules: {}
});
