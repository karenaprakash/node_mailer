/**
 *  actions : all actions which are used in this project
 */
import axios from 'axios';

//clearBookWithReviewer : clear book used when we go inside perticuler book and come outside  
export function sendMail(data){
    console.log(data)
    const request = axios.post("/api/sendMail",data)
    .then( response => response.data )
    return{
    type : 'SEND_MAIL',
    payload : request
    } 
}
