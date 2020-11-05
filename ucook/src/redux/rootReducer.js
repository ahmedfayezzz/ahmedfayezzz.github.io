import {combineReducers} from 'redux'

// import receiptReducer from './receipt/receiptReducer';
import randomReducer from './receipt/random/randomReducer';


const rootReducer =combineReducers({
  // receipt:Reducer,
  random:randomReducer
})

export default rootReducer