import {FILTER_AREA_REQUEST,FILTER_AREA_SUCCESS,FILTER_AREA_FAILURE} from './actionTypes'


const initialState={
  first:true,
  loading:true,
  recipes:[],
  error:''
}

const areaReducer=(state=initialState,action)=>{
  switch (action.type) {
    case FILTER_AREA_REQUEST:
      return{
        ...state,
          loading:true
      }
    case FILTER_AREA_SUCCESS:
      return{
        ...state,
          first:false,
          loading:false,
          recipes:action.payload,
          error:''
      }
    case FILTER_AREA_FAILURE:
      return{
        ...state,
          loading:false,
          recipes:[],
          error:action.payload
      }
  
    default:return state
  }
}

export default areaReducer