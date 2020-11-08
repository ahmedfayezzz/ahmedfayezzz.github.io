import styled from "styled-components";
import { connect } from "react-redux";
import { fetchRandom } from "./../redux/receipt/random/randomActions";
import { useEffect } from "react";
import { v4 as uuid } from 'uuid';

import Card from './CardMaterial';


const CardContainer = ({ name, recipes }) => {
  
  const Cards = recipes.map((recipe)=><h1 key={uuid()}>{recipe.strMeal}</h1>);
  const CardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
  `;
  return (
    <CardDiv>
      {Cards}
    </CardDiv>
  )
  
};
const mapStateToProps = (state) => {
  return {
    randomData: state.random,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchRandom: () => dispatch(fetchRandom()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
