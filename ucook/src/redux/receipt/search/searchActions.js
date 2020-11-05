import axios from 'axios'

import {SEARCH_ID_REQUEST,SEARCH_ID_SUCCESS,SEARCH_ID_FAILURE} from './actionTypes'
import {SEARCH_NAME_REQUEST,SEARCH_NAME_SUCCESS,SEARCH_NAME_FAILURE} from './actionTypes'

import {searchID,searchName} from '../links'

//search by ID actions

const searchIDRequest=()=>{
  return{
    type:SEARCH_ID_REQUEST
  }
}

const searchIDSuccess=(recipes)=>{
  return{
    type:SEARCH_ID_SUCCESS,
    payload:recipes
  }
}

const searchIDFailure=(error)=>{
  return{
    type:SEARCH_ID_FAILURE,
    payload:error
  }
}

export const searchByID=(ID)=>{
  return (dispatch)=>{
    dispatch(searchIDRequest())
    axios.get(searchID+ID)
      .then((response)=>{
        const data=response.data
        dispatch(searchIDSuccess(data))
      })
      .catch((error)=>{
        const errorMSG=error.message
        dispatch(searchIDFailure(errorMSG))
      })
  }
}
//search by name actions
const searchNameRequest=()=>{
  return{
    type:SEARCH_NAME_REQUEST
  }
}

const searchNameSuccess=(recipes)=>{
  return{
    type:SEARCH_NAME_SUCCESS,
    payload:recipes
  }
}

const searchNameFailure=(error)=>{
  return{
    type:SEARCH_NAME_FAILURE,
    payload:error
  }
}

export const searchByName=(name)=>{
  return (dispatch)=>{
    dispatch(searchNameRequest())
    axios.get(searchName+name)
      .then((response)=>{
        const data=response.data
        dispatch(searchNameSuccess(data))
      })
      .catch((error)=>{
        const errorMSG=error.message
        dispatch(searchNameFailure(errorMSG))
      })
  }
}