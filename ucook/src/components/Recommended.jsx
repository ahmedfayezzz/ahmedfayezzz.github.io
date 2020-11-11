import styled from "styled-components";
import BigCard from "./BigCard";
import { connect } from "react-redux";
import { fetchRandom } from "./../redux/receipt/random/randomActions";
import { useEffect } from "react";
import { v4 as uuid } from 'uuid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent:'center'
  },
}));

const Recommended = ({ randomData, fetchRandom }) => {
  const classes = useStyles();
  useEffect(() => {
    if (randomData.first) {
      for (let i = 0; i < 6; i++) {
        fetchRandom();
      }
    }
  }, []);
  const Cards = randomData.random.map((recipe)=><BigCard key={uuid()} recipe={recipe.meals[0]}/>);
  const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
  `;
  return randomData.loading===true ?(
    <div className={classes.root}>
      <CircularProgress size='4rem'/>
    </div>
  )
  :(
    <CardContainer>
      {Cards}
    </CardContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Recommended);
