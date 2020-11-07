import {FILTER_INGREDIENT_REQUEST,FILTER_INGREDIENT_SUCCESS,FILTER_INGREDIENT_FAILURE} from './actionTypes'


const initialState={
  loading:true,
  recipes:[],
  error:''
}

  const ingredientReducer=(state=initialState,action)=>{
    switch (action.type) {
    case FILTER_INGREDIENT_REQUEST:
      return{
        ...state,
          loading:true
      }
    case FILTER_INGREDIENT_SUCCESS:
      return{
        ...state,
          loading:false,
          recipes:action.payload,
          error:''
      }
    case FILTER_INGREDIENT_FAILURE:
      return{
        ...state,
          loading:false,
          recipes:[],
          error:action.payload
      }
  
    default:return state
  }
}

export default ingredientReducer