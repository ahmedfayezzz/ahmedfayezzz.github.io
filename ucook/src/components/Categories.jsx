/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { fetchAllCategories} from "../redux";
import { connect } from "react-redux";
import Overview from './Overview';
import {v4 as uuid} from 'uuid'
import CircularProgress  from '@material-ui/core/CircularProgress';
const useStyles = makeStyles((theme) => ({
  root: {
    padding:'1rem',
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    color:'var(--primary)'
  },
}));

const Categories=({categoriesData,fetchCategories})=>{
  const classes = useStyles();
  const categoriesList=categoriesData.categories.meals
  useEffect(()=>{
    if(!categoriesList)
      fetchCategories()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  let categoriesLinks
  if(!categoriesData.loading){
    categoriesLinks=categoriesList.map(category=>(
      <Overview key={uuid()} type="categories" name={category.strCategory}/>
    ))
  }
  // console.log(categoriesLinks);
  return categoriesData.loading === true ? (
    <div className={classes.root}>
      <CircularProgress size="4rem" />
    </div>
  ) : (
    <div className={classes.root}>
      {categoriesLinks}
      {/* <Autocomplete
        multiple
        id="tags-outlined"
        options={ingredients.loading===true ? 'loading...':ingredientsList}
        getOptionLabel={ingredients.loading===true?'loading...':(option) => option.strIngredient}
        defaultValue={ingredients.loading===true?[]:[ingredientsList[13]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Select your ingredients"
            placeholder="Ingredients"
          />
        )}
      /> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categoriesData: state.categories
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchAllCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories)