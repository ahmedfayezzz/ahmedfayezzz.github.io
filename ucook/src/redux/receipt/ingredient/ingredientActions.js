import axios from "axios";

import {
  FETCH_ALL_INGREDIENTS_REQUEST,
  FETCH_ALL_INGREDIENTS_SUCCESS,
  FETCH_ALL_INGREDIENTS_FAILURE,
} from "./actionTypes";
import {
  FILTER_INGREDIENT_REQUEST,
  FILTER_INGREDIENT_SUCCESS,
  FILTER_INGREDIENT_FAILURE,
} from "./actionTypes";
import {
  FILTER_N_INGREDIENT_REQUEST,
  FILTER_N_INGREDIENT_SUCCESS,
  FILTER_N_INGREDIENT_FAILURE,
  FILTER_N_INGREDIENT_INTERSECT,
  FILTER_N_INGREDIENT_RESET,
} from "./actionTypes";

import { listIngredients, filterIngredient } from "../links";

//list all available recipes ingredients
const fetchAllIngredientsRequest = () => {
  return {
    type: FETCH_ALL_INGREDIENTS_REQUEST,
  };
};
const fetchAllIngredientsSuccess = (ingredients) => {
  return {
    type: FETCH_ALL_INGREDIENTS_SUCCESS,
    payload: ingredients,
  };
};
const fetchAllIngredientsFailure = (error) => {
  return {
    type: FETCH_ALL_INGREDIENTS_FAILURE,
    payload: error,
  };
};
export const fetchAllIngredients = () => {
  return (dispatch) => {
    dispatch(fetchAllIngredientsRequest());
    axios
      .get(listIngredients)
      .then((response) => {
        const data = response.data;
        dispatch(fetchAllIngredientsSuccess(data));
      })
      .catch((error) => {
        const errorMSG = error.message;
        dispatch(fetchAllIngredientsFailure(errorMSG));
      });
  };
};
//filter recipes by ingredient
const filterIngredientRequest = () => {
  return {
    type: FILTER_INGREDIENT_REQUEST,
  };
};
const filterIngredientSuccess = (recipes) => {
  return {
    type: FILTER_INGREDIENT_SUCCESS,
    payload: recipes,
  };
};
const filterIngredientFailure = (error) => {
  return {
    type: FILTER_INGREDIENT_FAILURE,
    payload: error,
  };
};
export const filterByIngredient = (ingredient) => {
  return (dispatch) => {
    dispatch(filterIngredientRequest());
    axios
      .get(`${filterIngredient}${ingredient}`)
      .then((response) => {
        const data = response.data;
        dispatch(filterIngredientSuccess(data));
      })
      .catch((error) => {
        const errorMSG = error.message;
        dispatch(filterIngredientFailure(errorMSG));
      });
  };
};
// filter by number of ingredients
const filterNIngredientRequest = () => {
  return {
    type: FILTER_N_INGREDIENT_REQUEST,
  };
};
const filterNIngredientIntersect = () => {
  return {
    type: FILTER_N_INGREDIENT_INTERSECT,
  };
};
const filterNIngredientSuccess = (recipes) => {
  return {
    type: FILTER_N_INGREDIENT_SUCCESS,
    payload: recipes,
  };
};
const filterNIngredientFailure = (error) => {
  return {
    type: FILTER_N_INGREDIENT_FAILURE,
    payload: error,
  };
};
const filterNIngredientReset = () => {
  return {
    type: FILTER_N_INGREDIENT_RESET,
  };
};
export const filterByNIngredient = (ingredients) => {
  return (dispatch, getState) => {
    dispatch(filterNIngredientReset());
    let prev = [];
    ingredients.forEach((ingredient, i) => {
      const recipes = getState().NIngredientsFilter.recipes;
      // console.log(recipes);
      dispatch(filterNIngredientRequest());
      axios
        .get(`${filterIngredient}${ingredient}`)
        .then((response) => {
          const data = response.data.meals;

          if (i === 0) {
            dispatch(filterNIngredientSuccess(data));
            prev = data;
          } else {
            
            const intersect = data.filter((value) =>
              prev.find((prevValue) => value.strMeal === prevValue.strMeal)
            );
            // dispatch(filterNIngredientSuccess(data));
            prev = intersect;
            console.log(intersect);
            // dispatch(filterNIngredientReset());
            dispatch(filterNIngredientSuccess(intersect));
          }
        })
        .catch((error) => {
          const errorMSG = error.message;
          dispatch(filterNIngredientFailure(errorMSG));
        });
    });
  };
};
