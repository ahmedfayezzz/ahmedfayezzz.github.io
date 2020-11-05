import axios from 'axios'

import {FETCH_RECEIPT_REQUEST,FETCH_RECEIPT_FAILURE,FETCH_RECEIPT_SUCCESS} from './actionTypes'
import {FETCH_RANDOM_FAILURE,FETCH_RANDOM_SUCCESS,FETCH_RANDOM_REQUEST} from './actionTypes'

const fetchReceiptRequest=()=>{
  return{
    type:FETCH_RECEIPT_REQUEST
  }
}

const fetchReceiptSuccess=(users)=>{
  return{
    type:FETCH_RECEIPT_SUCCESS,
    payload:users
  }
}

const fetchReceiptFailure=(error)=>{
  return{
    type:FETCH_RECEIPT_FAILURE,
    payload:error
  }
}



export const fetchReceipt=()=>{
  return (dispatch)=>{
    dispatch(fetchReceiptRequest())
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response)=>{
        const data=response.data
        dispatch(fetchReceiptSuccess(data))
      })
      .catch((error)=>{
        const errorMSG=error.message
        dispatch(fetchReceiptFailure(errorMSG))
      })
  }
}