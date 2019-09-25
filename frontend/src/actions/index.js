/**
 *  actions : all actions which are used in this project
 */
import axios from 'axios';
import {reset} from 'redux-form';


function mailSendSuccess(response) {
    return{
        type : 'SEND_MAIL',
        payload : response
    } 
}

function mailSendError(error) {
   // console.log(error);
	return {
		type: 'SEND_MAIL',
		payload: error
	};
}


//clearBookWithReviewer : clear book used when we go inside perticuler book and come outside  
export const sendMail = (data) => (dispatch) =>{
    //console.log(data)
    const request = axios.post("/api/sendMail",data)
    .then(response => {
      //  console.log(response.data);
        if(response.data.post){
            alert('Email Sent successfully.')
            dispatch(reset('sendMail'))
            dispatch(mailSendSuccess(response.data))
        }else{
            dispatch(mailSendError(response.data));
            alert('Error while sending email.Please try again later')
        }
        return response.data 
    })
    .catch((err) => {
         dispatch(mailSendError(err));
         alert('Error while sending email.Please try again later')
    });
}
