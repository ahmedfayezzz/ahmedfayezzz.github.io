import {FETCH_ALL_AREAS_REQUEST,FETCH_ALL_AREAS_SUCCESS,FETCH_ALL_AREAS_FAILURE} from './actionTypes'


const initialState={
  loading:true,
  areas:[],
  error:''
}

const allAreasReducer=(state=initialState,action)=>{
  switch (action.type) {
    case FETCH_ALL_AREAS_REQUEST:
      return{
        ...state,
          loading:true
      }
    case FETCH_ALL_AREAS_SUCCESS:
      return{
        ...state,
          loading:false,
          areas:action.payload,
          error:''
      }
    case FETCH_ALL_AREAS_FAILURE:
      return{
        ...state,
          loading:false,
          areas:[],
          error:action.payload
      }
  
    default:return state
  }
}

export default allAreasReducer