import {FETCH_RECEIPT_REQUEST,FETCH_RECEIPT_FAILURE,FETCH_RECEIPT_SUCCESS} from './actionTypes'


const initialState={
  loading:true,
  receipts:[],
  error:''
}

const receiptReducer=(state=initialState,action)=>{
  switch (action.type) {
    case FETCH_RECEIPT_REQUEST:
      return{
        ...state,
          loading:true
      }
    case FETCH_RECEIPT_SUCCESS:
      return{
        ...state,
          loading:false,
          receipts:action.payload,
          error:''
      }
    case FETCH_RECEIPT_FAILURE:
      return{
        ...state,
          loading:false,
          receipts:[],
          error:action.payload
      }
  
    default:return state
  }
}

export default receiptReducer