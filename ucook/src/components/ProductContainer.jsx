import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import { fetchProduct } from '../redux';

const ProductContainer = ({productData,fetchProduct}) => {
  useEffect(()=>{
    fetchProduct()
  },[])
  return productData.loading ?(
    <h1>loading.....</h1>
  ): productData.error ? (
    <h1>{productData.error}</h1>
  ):(
    <ul>
      {productData.products.map((product)=><li>{product.name}</li>)}
    </ul>
  )
}
const mapStateToProps=state=>{
  return{
    productData:state.products
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    fetchProduct:()=>dispatch(fetchProduct())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer);