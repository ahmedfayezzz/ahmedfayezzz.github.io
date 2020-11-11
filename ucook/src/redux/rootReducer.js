import { combineReducers } from "redux";

import randomReducer from "./receipt/random/randomReducer";
import allAreasReducer from "./receipt/area/allAreasReducer";
import areaReducer from "./receipt/area/areaReducer";
import allCategoriesReducer from "./receipt/category/allCategoriesReducer";
import categoryReducer from "./receipt/category/categoryReducer";
import allIngredientsReducer from "./receipt/ingredient/allIngredientsReducer";
import ingredientReducer from "./receipt/ingredient/ingredientReducer";
import searchNameReducer from "./receipt/search/searchNameReducer";
import searchIDReducer from "./receipt/search/searchIDReducer";
import NIngredientsReducer from "./receipt/ingredient/NIngredientsReducer";

const rootReducer = combineReducers({
  random: randomReducer,
  areas: allAreasReducer,
  areaFilter: areaReducer,
  categories: allCategoriesReducer,
  categoryFilter: categoryReducer,
  ingredients: allIngredientsReducer,
  ingredientFilter: ingredientReducer,
  searchName: searchNameReducer,
  searchID: searchIDReducer,
  NIngredientsFilter: NIngredientsReducer
});

export default rootReducer;
