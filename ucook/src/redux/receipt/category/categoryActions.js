import axios from 'axios'

import {FETCH_ALL_CATEGORIES_REQUEST,FETCH_ALL_CATEGORIES_SUCCESS,FETCH_ALL_CATEGORIES_FAILURE} from './actionTypes'
import {FILTER_CATEGORY_REQUEST,FILTER_CATEGORY_SUCCESS,FILTER_CATEGORY_FAILURE} from './actionTypes'

import {listCategories, filterCategory} from '../links'

//list all available recipes categories
const fetchAllCategoriesRequest=()=>{
  return{
    type:FETCH_ALL_CATEGORIES_REQUEST
  }
}

const fetchAllCategoriesSuccess=(categories)=>{
  return{
    type:FETCH_ALL_CATEGORIES_SUCCESS,
    payload:categories
  }
}

const fetchAllCategoriesFailure=(error)=>{
  return{
    type:FETCH_ALL_CATEGORIES_FAILURE,
    payload:error
  }
}

export const fetchAllCategories=()=>{
  return (dispatch)=>{
    dispatch(fetchAllCategoriesRequest())
    axios.get(listCategories)
      .then((response)=>{
        const data=response.data
        dispatch(fetchAllCategoriesSuccess(data))
      })
      .catch((error)=>{
        const errorMSG=error.message
        dispatch(fetchAllCategoriesFailure(errorMSG))
      })
  }
}

//filter recipes by category
const filterCategoryRequest=()=>{
  return{
    type:FILTER_CATEGORY_REQUEST
  }
}

const filterCategorySuccess=(recipes)=>{
  return{
    type:FILTER_CATEGORY_SUCCESS,
    payload:recipes
  }
}

const filterCategoryFailure=(error)=>{
  return{
    type:FILTER_CATEGORY_FAILURE,
    payload:error
  }
}

export const filterByCategory=(category)=>{
  return (dispatch)=>{
    dispatch(filterCategoryRequest())
    axios.get(filterCategory+category)
      .then((response)=>{
        const data=response.data
        dispatch(filterCategorySuccess(data))
      })
      .catch((error)=>{
        const errorMSG=error.message
        dispatch(filterCategoryFailure(errorMSG))
      })
  }
}