/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { fetchAllAreas} from "../redux";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

const Areas=({areas,fetchAreas})=>{
  const classes = useStyles();
  const areasList=areas.areas.meals
  useEffect(()=>{
    if(!areasList)
    fetchAreas()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  console.log(areas);
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
    areas: state.areas
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAreas: () => dispatch(fetchAllAreas())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Areas)