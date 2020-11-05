import {FETCH_RANDOM_FAILURE,FETCH_RANDOM_SUCCESS,FETCH_RANDOM_REQUEST} from './actionTypes'


const initialState={
  first:true,
  loading:true,
  random:[],
  error:''
}

const randomReducer=(state=initialState,action)=>{
  switch (action.type) {
    case FETCH_RANDOM_REQUEST:
      return{
        ...state,
          loading:true
      }
    case FETCH_RANDOM_SUCCESS:
      return{
        ...state,
          first:false,
          loading:false,
          random:[...state.random,action.payload],
          error:''
      }
    case FETCH_RANDOM_FAILURE:
      return{
        ...state,
          loading:false,
          random:[],
          error:action.payload
      }
  
    default:return state
  }
}

export default randomReducer