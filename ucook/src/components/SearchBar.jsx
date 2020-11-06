/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { fetchAllIngredients} from "../redux";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

const SearchBar=({ingredients,fetchIngredients})=>{
  const classes = useStyles();
  const ingredientsList=ingredients.ingredients.meals
  useEffect(()=>{
    fetchIngredients()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  console.log(ingredients);
  return (
    <div className={classes.root}>
      <Autocomplete
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
      />
      {/* <Autocomplete
        multiple
        id="tags-filled"
        options={ingredients.map((option) => option.strIngredient)}
        defaultValue={[ingredients[13].strIngredient]}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} variant="filled" label="freeSolo" placeholder="Favorites" />
        )}
      /> */}
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films = [
//   { title: 'The Shawshank Redemption', year: 1994 }
// ];
const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchIngredients: () => dispatch(fetchAllIngredients())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)