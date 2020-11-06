import React from 'react';
import styled from 'styled-components';
import Recommended from './Recommended';
import SearchBar  from "./SearchBar";
const Home = () => {
  const H1=styled.h1`
    text-align:center;
    font-size:2rem;
  `
  return ( 
    <>
      <SearchBar/>
      <H1>Recommended</H1>
      <Recommended/>
    </>
   );
}
 
export default Home;