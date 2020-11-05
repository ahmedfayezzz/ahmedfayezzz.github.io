import {FILTER_CATEGORY_REQUEST,FILTER_CATEGORY_SUCCESS,FILTER_CATEGORY_FAILURE} from './actionTypes'


const initialState={
  loading:true,
  recipes:[],
  error:''
}

const categoryReducer=(state=initialState,action)=>{
  switch (action.type) {
    case FILTER_CATEGORY_REQUEST:
      return{
        ...state,
          loading:true
      }
    case FILTER_CATEGORY_SUCCESS:
      return{
        ...state,
          loading:false,
          recipes:action.payload,
          error:''
      }
    case FILTER_CATEGORY_FAILURE:
      return{
        ...state,
          loading:false,
          recipes:[],
          error:action.payload
      }
  
    default:return state
  }
}

export default categoryReducer