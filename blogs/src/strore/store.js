import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        navData: '',
        articleData_m: '',
        states: false,
    },
    mutations: {
        navData_m(state, data) {
            state.navData = data;
        },
        articleData_m(state, data) {
            state.articleData_m = data;
        },
        state_m(state, data) {
            state.states = data;
            console.log(state.states)
        }
    },
    actions: {
        getAllData({ commit }) {
            var dataNav = function() {
                return new Promise((resolve, reject) => {
                    this.axios.get("/api/front_article/getNav").then(data => {
                        commit("navData_m", data.data.data)
                        resolve()
                    })
                })
            }
            var dataArticle = function() {
                return new Promise((resolve, reject) => {
                    this.axios.get("/api/front_article/getArticleAll").then(data => {
                        commit("articleData_m", data.data.data);
                        resolve();
                    })
                })
            }
            return {
                axios: this.axios,
                dataNav,
                dataArticle
            }
        },
        defaultData({ dispatch, commit }, fn) {
            console.log(2222)
            commit('state_m', 'start')
            dispatch('getAllData').then((data) => {
                Promise.all([data.dataNav(), data.dataArticle()]).then(() => {
                    commit('state_m', 'end')

                }, () => {
                    commit('state_m', false)
                })
            })
        }
    }
})

export default store;