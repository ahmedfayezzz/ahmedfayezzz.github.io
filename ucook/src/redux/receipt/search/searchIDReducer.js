import {SEARCH_ID_REQUEST,SEARCH_ID_SUCCESS,SEARCH_ID_FAILURE} from './actionTypes'

const initialState={
  loading:true,
  recipe:[],
  error:''
}

const searchIDReducer=(state=initialState,action)=>{
  switch (action.type) {
    case SEARCH_ID_REQUEST:
      return{
        ...state,
          loading:true
      }
    case SEARCH_ID_SUCCESS:
      return{
        ...state,
          loading:false,
          recipe:action.payload,
          error:''
      }
    case SEARCH_ID_FAILURE:
      return{
        ...state,
          loading:false,
          recipe:[],
          error:action.payload
      }
  
    default:return state
  }
}

export default searchIDReducer