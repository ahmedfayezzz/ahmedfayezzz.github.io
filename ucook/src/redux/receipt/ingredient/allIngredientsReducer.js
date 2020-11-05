import {FETCH_ALL_INGREDIENTS_REQUEST,FETCH_ALL_INGREDIENTS_SUCCESS,FETCH_ALL_INGREDIENTS_FAILURE} from './actionTypes'


const initialState={
  loading:true,
  ingredients:[],
  error:''
}

const allIngredientsReducer=(state=initialState,action)=>{
  switch (action.type) {
    case FETCH_ALL_INGREDIENTS_REQUEST:
      return{
        ...state,
          loading:true
      }
    case FETCH_ALL_INGREDIENTS_SUCCESS:
      return{
        ...state,
          loading:false,
          ingredients:action.payload,
          error:''
      }
    case FETCH_ALL_INGREDIENTS_FAILURE:
      return{
        ...state,
          loading:false,
          ingredients:[],
          error:action.payload
      }
  
    default:return state
  }
}

export default allIngredientsReducer