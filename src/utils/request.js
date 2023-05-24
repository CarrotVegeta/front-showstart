import axios from "axios";
import store from "@/store";

let baseURL = 'http://127.0.0.1:8000/api/'
const axiosObj = axios.create({
    baseURL: baseURL,
    timeout: 99999
})
// http request 拦截器
axiosObj.interceptors.request.use(
    config => {
        config.headers = {
            'content-type': "application/json",
            'Cuuserref': store.state.Cookie.Cuuserref,
            'St_flpv': store.state.Cookie.StFlpv,
            'Cusut': store.state.Cookie.Cusut,
            ...config.headers
        }
        return config
    }
)

export const POST = (api, data) => {
    return axiosObj({
        method: "post",
        url: api,
        data
    });
}
export const GET = (data) => {
    axiosObj({
        method: "get",
        data
    })
}
export const SetCookie = (data) => {
    store.commit({
        type: 'updateCookieInfo',
        cuuserref: data.cuuserref,
        st_flpv: data.st_flpv,
        cusut: data.cusut
    })
}
