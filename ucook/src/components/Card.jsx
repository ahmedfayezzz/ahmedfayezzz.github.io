import React from 'react';
import styled from 'styled-components';
const Card = (props) => {
  const CardDiv=styled.div`
    /* max-width:250px; */
    min-width:250px;
    border: 1px solid black;
    display: grid;
    margin:1rem;
    grid-template-rows: 5rem 1fr 10rem;
    grid-template-areas: 
    "title"
    "description"
    "price";
    flex: 0 1 30%;
    border: 1px solid #F0A624;
    border-radius: 1%;
    background-color: #e5ffff77;
    text-align: center;
  `
  const CardImg=styled.img`

  `
  const CardP=styled.p`

  `
  return ( 
    <CardDiv>
      <CardImg src="" alt=""/>
      <CardP>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque asperiores iste assumenda dolor? Accusantium, illum id, incidunt quam quidem voluptate architecto, consectetur ab hic amet laboriosam aliquid harum corporis officia?</CardP>
    </CardDiv>
  );
}
 
export default Card;