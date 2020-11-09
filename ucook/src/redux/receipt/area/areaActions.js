import axios from 'axios'

import {FETCH_ALL_AREAS_REQUEST,FETCH_ALL_AREAS_SUCCESS,FETCH_ALL_AREAS_FAILURE} from './actionTypes'
import {FILTER_AREA_REQUEST,FILTER_AREA_SUCCESS,FILTER_AREA_FAILURE} from './actionTypes'

import {listAreas, filterArea} from '../links'

//list all available recipes categories
const fetchAllAreasRequest=()=>{
  return{
    type:FETCH_ALL_AREAS_REQUEST
  }
}

const fetchAllAreasSuccess=(areas)=>{
  return{
    type:FETCH_ALL_AREAS_SUCCESS,
    payload:areas
  }
}

const fetchAllAreasFailure=(error)=>{
  return{
    type:FETCH_ALL_AREAS_FAILURE,
    payload:error
  }
}

export const fetchAllAreas=()=>{
  return (dispatch)=>{
    dispatch(fetchAllAreasRequest())
    axios.get(listAreas)
      .then((response)=>{
        const data=response.data
        dispatch(fetchAllAreasSuccess(data))
      })
      .catch((error)=>{
        const errorMSG=error.message
        dispatch(fetchAllAreasFailure(errorMSG))
      })
  }
}

//filter recipes by category
const filterAreaRequest=()=>{
  return{
    type:FILTER_AREA_REQUEST
  }
}

const filterAreaSuccess=(recipes)=>{
  return{
    type:FILTER_AREA_SUCCESS,
    payload:recipes
  }
}

const filterAreaFailure=(error)=>{
  return{
    type:FILTER_AREA_FAILURE,
    payload:error
  }
}

export const filterByArea=(area)=>{
  return (dispatch)=>{
    dispatch(filterAreaRequest())
    axios.get(filterArea+area)
      .then((response)=>{
        const data=response.data
        dispatch(filterAreaSuccess(data))
      })
      .catch((error)=>{
        const errorMSG=error.message
        dispatch(filterAreaFailure(errorMSG))
      })
  }
}