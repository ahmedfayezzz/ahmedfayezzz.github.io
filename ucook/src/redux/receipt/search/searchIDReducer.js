import {SEARCH_ID_REQUEST,SEARCH_ID_SUCCESS,SEARCH_ID_FAILURE} from './actionTypes'

const initialState={
  loading:true,
  random:[],
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
          random:action.payload,
          error:''
      }
    case SEARCH_ID_FAILURE:
      return{
        ...state,
          loading:false,
          random:[],
          error:action.payload
      }
  
    default:return state
  }
}

export default searchIDReducer