import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import { fetchReceipt } from '../redux';

const ReceiptContainer = ({receiptData: receiptData,fetchReceipt}) => {
  useEffect(()=>{
    fetchReceipt()
  },[])
  return receiptData.loading ?(
    <h1>loading.....</h1>
  ): receiptData.error ? (
    <h1>{receiptData.error}</h1>
  ):(
    <ul>
      {receiptData.receipt.map((receipt)=><li>{receipt.name}</li>)}
    </ul>
  )
}
const mapStateToProps=state=>{
  return{
    receiptData:state.receipt
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    fetchReceipt:()=>dispatch(fetchReceipt())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReceiptContainer);