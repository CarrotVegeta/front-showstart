import {POST} from "@/utils/request";

export const GetActivityDetail=(data)=>{
     return POST("/activity/detail",data)
}
