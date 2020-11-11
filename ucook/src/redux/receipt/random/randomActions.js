import axios from "axios";

import {
  FETCH_RANDOM_FAILURE,
  FETCH_RANDOM_SUCCESS,
  FETCH_RANDOM_REQUEST,
} from "./actionTypes";

import { searchRandom } from "../links";

const fetchRandomRequest = () => {
  return {
    type: FETCH_RANDOM_REQUEST,
  };
};
const checkDuplicates = () => {};
const fetchRandomSuccess = (recipes) => {
  return {
    type: FETCH_RANDOM_SUCCESS,
    payload: recipes,
  };
};

const fetchRandomFailure = (error) => {
  return {
    type: FETCH_RANDOM_FAILURE,
    payload: error,
  };
};
const checkDuplicate = (item, random) => {
  if (random.length >= 1) 
    return random.some(recipe=>recipe.strMeal===item.strMeal)
  return false
};
export const fetchRandom = () => {
  return (dispatch, getState) => {
    const random = getState().random.random;
    dispatch(fetchRandomRequest());
    axios
      .get(searchRandom)
      .then((response) => {
        const data = response.data;

        if (checkDuplicate(data, random)) {
          console.log('includes');
          fetchRandom();
        } else {
          dispatch(fetchRandomSuccess(data));
        }
      })
      .catch((error) => {
        const errorMSG = error.message;
        dispatch(fetchRandomFailure(errorMSG));
      });
  };
};
