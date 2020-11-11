import {
  FILTER_N_INGREDIENT_REQUEST,
  FILTER_N_INGREDIENT_SUCCESS,
  FILTER_N_INGREDIENT_FAILURE,
  FILTER_N_INGREDIENT_INTERSECT,
  FILTER_N_INGREDIENT_RESET
} from "./actionTypes";

const initialState = {
  first: true,
  loading: true,
  recipes: [],
  error: "",
};

const NInggredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_N_INGREDIENT_RESET:
      return {
        ...state,
        recipes:[]
      };
    case FILTER_N_INGREDIENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FILTER_N_INGREDIENT_INTERSECT:
      return {
        ...state,
          recipes:action.payload
      };
    case FILTER_N_INGREDIENT_SUCCESS:
      // console.log(state);
      return {
        ...state,
        first: false,
        loading: false,
        recipes: [...action.payload],
        error: "",
      };
    case FILTER_N_INGREDIENT_FAILURE:
      return {
        ...state,
        loading: false,
        recipes: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default NInggredientsReducer;
