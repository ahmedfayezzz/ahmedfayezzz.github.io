import styled from "styled-components";
import { connect } from "react-redux";
import { fetchRandom } from "./../redux/receipt/random/randomActions";
import { useEffect } from "react";
import { v4 as uuid } from 'uuid';

import Card from './CardMaterial';
import SmallCard from './SmallCard';
import Grid  from '@material-ui/core/Grid';


const CardContainer = ({ name, recipes }) => {
  
  const Cards = recipes.map((recipe)=><SmallCard key={uuid()} recipe={recipe}></SmallCard>);
  const CardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
  `;
  return (
    <Grid container>
      <Grid item xs={2} />
      
      <Grid container item xs={12} sm={8}>
      <CardDiv>
        {Cards}
      </CardDiv>
      
      </Grid>
      <Grid item xs={2} />
    </Grid>
    
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
