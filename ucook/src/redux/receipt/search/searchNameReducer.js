import {SEARCH_NAME_REQUEST,SEARCH_NAME_SUCCESS,SEARCH_NAME_FAILURE} from './actionTypes'

const initialState={
  loading:true,
  random:[],
  error:''
}

const searchNameReducer=(state=initialState,action)=>{
  switch (action.type) {
    case SEARCH_NAME_REQUEST:
      return{
        ...state,
          loading:true
      }
    case SEARCH_NAME_SUCCESS:
      return{
        ...state,
          loading:false,
          random:action.payload,
          error:''
      }
    case SEARCH_NAME_FAILURE:
      return{
        ...state,
          loading:false,
          random:[],
          error:action.payload
      }
  
    default:return state
  }
}

export default searchNameReducer