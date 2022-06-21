import  {POST} from "@/utils/request";

export const  GetTicketList = (data) =>{
    return POST("tickets",data)
}

export const Order = (data) => {
    return POST("order",data)
}
