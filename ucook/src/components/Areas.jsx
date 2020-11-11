/* eslint-disable no-use-before-define */
import React, { useEffect } from "react";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { fetchAllAreas } from "../redux";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import Overview from "./Overview";
import { v4 as uuid } from "uuid";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem",
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "var(--primary)",
  },
}));

const Areas = ({ areasData, fetchAreas }) => {
  const classes = useStyles();
  console.log(areasData);
  const areasList = areasData.areas.meals;
  useEffect(() => {
    if (!areasList) fetchAreas();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let areasLinks;
  if (!areasData.loading) {
    areasLinks = areasList.map((area) => (
      <Overview key={uuid()} type="areas" name={area.strArea} />
    ));
  }
  return areasData.loading === true ? (
    <div className={classes.root}>
      <CircularProgress size="4rem" />
    </div>
  ) : (
    <div className={classes.root}>
      {areasLinks}
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
};

const mapStateToProps = (state) => {
  return {
    areasData: state.areas,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAreas: () => dispatch(fetchAllAreas()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Areas);
