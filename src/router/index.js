import axios  from "axios";
import {reactive} from "vue";
let baseURL = 'http://127.0.0.1:9000/'
let request ;
const Cookie = {
    state: reactive({
        Cuuserref: '',
        St_flpv: '',
        Cusut: ''
    }),
    methods: {
        initAxios() {
           request =  axios.create({
                baseURL: baseURL,
                headers: {
                    'content-type': "application/json",
                    'Cuuserref': Cookie.state.Cuuserref,
                    'St_flpv': Cookie.state.St_flpv,
                    'Cusut': Cookie.state.Cusut
                }
            })
        },
        async GetActivityDetail(activity_id){
            this.initAxios()
            console.log(request.headers)
            await request.post("./activity/detail",{
                activity_id:activity_id,
            }).then(res=>{
                console.log(res)
            })
        },
         async GetTicketList(activity_id) {
            this.initAxios()
            let data = [];
            await request.post("./tickets", {
                activity_id: Number(activity_id),
            }).then(res => {
                data = res.data.data
            })
            return data
        }
    }
}
export default Cookie

