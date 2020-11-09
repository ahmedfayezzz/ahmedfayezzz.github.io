import { useEffect } from 'react';
import { connect } from 'react-redux';
import { filterByCategory } from '../redux/';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardContainer from './CardsContainer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent:'center'
  },
}));
const CategoryDetails = (props) => {
  const classes=useStyles()
  const name=props.match.params.name
  const filterCategory = props.filterCategory;
  const categoryData = props.categoryData;
  useEffect(()=>{
    filterCategory(name)
  },[])
  console.log(categoryData)
  return categoryData.loading===true ?(
    <div className={classes.root}>
      <CircularProgress size='4rem'/>
    </div>
  )
  :( 
    <CardContainer name={name} recipes={categoryData.recipes.meals}/>
  );
}
const mapStateToProps = (state) => {
  return {
    categoryData: state.categoryFilter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    filterCategory: (category) => dispatch(filterByCategory(category)),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(CategoryDetails);