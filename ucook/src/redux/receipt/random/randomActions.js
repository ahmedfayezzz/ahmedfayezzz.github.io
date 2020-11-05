import axios from 'axios'

import {FETCH_RANDOM_FAILURE,FETCH_RANDOM_SUCCESS,FETCH_RANDOM_REQUEST} from './actionTypes'

import {searchRandom} from '../links'

const fetchRandomRequest=()=>{
  return{
    type:FETCH_RANDOM_REQUEST
  }
}

const fetchRandomSuccess=(users)=>{
  return{
    type:FETCH_RANDOM_SUCCESS,
    payload:users
  }
}

const fetchRandomFailure=(error)=>{
  return{
    type:FETCH_RANDOM_FAILURE,
    payload:error
  }
}

export const fetchRandom=()=>{
  return (dispatch)=>{
    dispatch(fetchRandomRequest())
    axios.get(searchRandom)
      .then((response)=>{
        const data=response.data
        dispatch(fetchRandomSuccess(data))
      })
      .catch((error)=>{
        const errorMSG=error.message
        dispatch(fetchRandomFailure(errorMSG))
      })
  }
}