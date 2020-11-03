import {FETCH_PRODUCT_REQUEST,FETCH_PRODUCT_FAILURE,FETCH_PRODUCT_SUCCESS} from './actionTypes'


const initialState={
  loading:true,
  products:[],
  error:''
}

const productReducer=(state=initialState,action)=>{
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return{
        ...state,
          loading:true
      }
    case FETCH_PRODUCT_SUCCESS:
      return{
        ...state,
          loading:false,
          products:action.payload,
          error:''
      }
    case FETCH_PRODUCT_FAILURE:
      return{
        ...state,
          loading:false,
          products:[],
          error:action.payload
      }
  
    default:return state
  }
}

export default productReducer