/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { fetchAllCategories} from "../redux";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

const Categories=({categories,fetchCategories})=>{
  const classes = useStyles();
  const categoriesList=categories.categories.meals
  useEffect(()=>{
    if(!categoriesList)
      fetchCategories()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  console.log(categories);
  return (
    <div className={classes.root}>
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
    categories: state.categories
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchAllCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories)