// 创建一个新的 store 实例
import {createStore} from "vuex";

export default createStore({
    state: {
        Cookie: {
            StFlpv: '',
            Cusut: '',
            Cuuserref: ''
        }
    },
    mutations: {
        // 定义mutations，用于修改状态(同步)
        updateCookieInfo(state, payload) {
            state.Cookie.StFlpv = payload.st_flpv
            state.Cookie.Cusut = payload.cusut
            state.Cookie.Cuuserref = payload.cuuserref
        }
    },
    getters: {
        getCookieInfo(state){
            return state.Cookie
        }
    },
})
