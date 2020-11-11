/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles,styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { fetchAllIngredients} from "../redux";
import { connect } from "react-redux";
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width:' 90%',
    maxWidth:600,
    margin: '0 auto',
    paddingBottom:'2rem',
    display:'flex',
    flexDirection:'column',
    
  },
  textField:{
    outline:'#ffffff',
    background:theme.palette.error,
    color:theme.palette.text,
    margin: '0 auto',
    boxShadow: '0 1px 3px rgba(0,0,0,0.19)'
  },
  button:{
    display:'flex',
    margin: '1rem auto',
    alignSelf:'center',
    // shadowBox:'none',
    
  }
}));

const SearchBar=(props)=>{
  
  const classes = useStyles();
  const btnDisabled=props.btnDisabled
  const handleChange=props.handleChange 
  const handleSubmit=props.handleSubmit
  const ingredients=props.ingredients
  const fetchIngredients=props.fetchIngredients
  const ingredientsList=ingredients.ingredients.meals
  useEffect(()=>{
    if(!ingredientsList)
      fetchIngredients()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  // console.log(ingredients);
  
  
  
  return (
    <div className={classes.root}>
      <form >
        <Autocomplete
          multiple
          id="tags-outlined"
          options={ingredients.loading===true ? []:ingredientsList}
          getOptionLabel={ingredients.loading===true?()=>{}:(option) => option.strIngredient}
          // defaultValue={ingredients.loading===true?[]:[ingredientsList[13]]}
          filterSelectedOptions
          onChange={(e,value)=>handleChange(e,value)}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              // label="Select your ingredients"
              placeholder="Ingredients"
              color="primary"
              // onChange={handleChange}
              className={classes.textField}
            />
          )}
        />
        <Button onClick={handleSubmit} disabled={btnDisabled} className={classes.button} variant="contained">See Available Recipes</Button>

      </form>
      
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