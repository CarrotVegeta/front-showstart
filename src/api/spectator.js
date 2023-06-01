import  {POST} from "@/utils/request";

export const  GetSpectator = (data) =>{
    return POST("spectators",data)
}
