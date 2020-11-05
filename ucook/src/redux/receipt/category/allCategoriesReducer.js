import {FETCH_ALL_CATEGORIES_REQUEST,FETCH_ALL_CATEGORIES_SUCCESS,FETCH_ALL_CATEGORIES_FAILURE} from './actionTypes'


const initialState={
  loading:true,
  categories:[],
  error:''
}

const allCategoriesReducer=(state=initialState,action)=>{
  switch (action.type) {
    case FETCH_ALL_CATEGORIES_REQUEST:
      return{
        ...state,
          loading:true
      }
    case FETCH_ALL_CATEGORIES_SUCCESS:
      return{
        ...state,
          loading:false,
          categories:action.payload,
          error:''
      }
    case FETCH_ALL_CATEGORIES_FAILURE:
      return{
        ...state,
          loading:false,
          categories:[],
          error:action.payload
      }
  
    default:return state
  }
}

export default allCategoriesReducer