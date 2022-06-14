import  {POST} from "@/utils/request";

export const  GetTicketList = (data) =>{
    return POST("tickets",data)
}

