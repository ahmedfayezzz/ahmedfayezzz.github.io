import axios from 'axios'

import {FETCH_PRODUCT_REQUEST,FETCH_PRODUCT_FAILURE,FETCH_PRODUCT_SUCCESS} from './actionTypes'


const fetchProductRequest=()=>{
  return{
    type:FETCH_PRODUCT_REQUEST
  }
}

const fetchProductSuccess=(users)=>{
  return{
    type:FETCH_PRODUCT_SUCCESS,
    payload:users
  }
}

const fetchProductFailure=(error)=>{
  return{
    type:FETCH_PRODUCT_FAILURE,
    payload:error
  }
}

export const fetchProduct=()=>{
  return (dispatch)=>{
    dispatch(fetchProductRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response)=>{
        const data=response.data
        dispatch(fetchProductSuccess(data))
      })
      .catch((error)=>{
        const errorMSG=error.message
        dispatch(fetchProductFailure(errorMSG))
      })
  }
}