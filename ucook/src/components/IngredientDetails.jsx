import { useEffect } from 'react';
import { connect } from 'react-redux';
import { filterByIngredient } from '../redux/';
import { filterIngredient } from './../redux/receipt/links';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardContainer from './CardsContainer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent:'center'
  },
}));
const IngredientDetails = (props) => {
  const classes=useStyles()
  const name=props.match.params.name
  const filterIngredient=props.filterIngredient
  const ingredientsData=props.ingredientsData
  useEffect(()=>{
    filterIngredient(name.replaceAll(' ','_').toLowerCase())
  },[])
  return ingredientsData.loading===true ?(
    <div className={classes.root}>
      <CircularProgress size='4rem'/>
    </div>
  )
  :( 
    <CardContainer name={name} recipes={ingredientsData.recipes.meals}/>
  );
}
const mapStateToProps = (state) => {
  return {
    ingredientsData: state.ingredientFilter
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    filterIngredient: (name) => dispatch(filterByIngredient(name))
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(IngredientDetails);