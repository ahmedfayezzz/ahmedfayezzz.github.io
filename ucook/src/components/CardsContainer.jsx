import styled from "styled-components";
import Card from "./Card";
import { connect } from "react-redux";
import { fetchRandom } from "./../redux/receipt/random/randomActions";
import { useEffect } from "react";
import { v4 as uuid } from 'uuid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import CardMaterial from './CardMaterial';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent:'center'
  },
}));

const CardContainer = ({ name, recipes }) => {
  const classes = useStyles();
  
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
