import axios from 'axios'

import {FETCH_ALL_INGREDIENTS_REQUEST,FETCH_ALL_INGREDIENTS_SUCCESS,FETCH_ALL_INGREDIENTS_FAILURE} from './actionTypes'
import {FILTER_INGREDIENT_REQUEST,FILTER_INGREDIENT_SUCCESS,FILTER_INGREDIENT_FAILURE} from './actionTypes'

import {listIngredients, filterIngredient} from '../links'

//list all available recipes categories
const fetchAllIngredientsRequest=()=>{
  return{
    type:FETCH_ALL_INGREDIENTS_REQUEST
  }
}

const fetchAllIngredientsSuccess=(ingredients)=>{
  return{
    type:FETCH_ALL_INGREDIENTS_SUCCESS,
    payload:ingredients
  }
}

const fetchAllIngredientsFailure=(error)=>{
  return{
    type:FETCH_ALL_INGREDIENTS_FAILURE,
    payload:error
  }
}

export const fetchAllIngredients=()=>{
  return (dispatch)=>{
    dispatch(fetchAllIngredientsRequest())
    axios.get(listIngredients)
      .then((response)=>{
        const data=response.data
        dispatch(fetchAllIngredientsSuccess(data))
      })
      .catch((error)=>{
        const errorMSG=error.message
        dispatch(fetchAllIngredientsFailure(errorMSG))
      })
  }
}

//filter recipes by category
const filterIngredientRequest=()=>{
  return{
    type:FILTER_INGREDIENT_REQUEST
  }
}

const filterIngredientSuccess=(recipes)=>{
  return{
    type:FILTER_INGREDIENT_SUCCESS,
    payload:recipes
  }
}

const filterIngredientFailure=(error)=>{
  return{
    type:FILTER_INGREDIENT_FAILURE,
    payload:error
  }
}

export const filterByIngredient=(ingredient)=>{
  return (dispatch)=>{
    dispatch(filterIngredientRequest())
    axios.get(filterIngredient+ingredient)
      .then((response)=>{
        const data=response.data
        dispatch(filterIngredientSuccess(data))
      })
      .catch((error)=>{
        const errorMSG=error.message
        dispatch(filterIngredientFailure(errorMSG))
      })
  }
}