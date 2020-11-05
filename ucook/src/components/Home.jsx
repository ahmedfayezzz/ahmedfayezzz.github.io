import React from 'react';
import styled from 'styled-components';
import Recommended from './Recommended';
const Home = () => {
  const H1=styled.h1`
    text-align:center;
    font-size:2rem;
  `
  return ( 
    <>
      <H1>Recommended</H1>
      <Recommended/>
    </>
   );
}
 
export default Home;