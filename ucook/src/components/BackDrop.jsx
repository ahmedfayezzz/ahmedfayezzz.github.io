import React from 'react';
import styled from 'styled-components';

const BackDrop = () => {
  const DIV=styled.div`
    top:0;
    left:0;
    position:fixed;
    width:100vw;
    height:100vh;
    background-color:rgba(14, 14, 14, 0.144);
    /* z-index:10; */
  `
  return ( 
    <DIV/>
  );
}
 
export default BackDrop;