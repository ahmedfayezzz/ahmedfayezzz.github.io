import { useEffect } from "react";
import { connect } from "react-redux";
import { searchByID } from "../redux/";

import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Chip from "@material-ui/core/Chip";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import IngredientTable from "./IngredientsTable";
import Typography from "@material-ui/core/Typography";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "auto 0",
    // alignItems:'center'
  },
  table: {
    width: "100%",
    maxWidth: 400,
  },
  grid: {
    padding: "1rem",
  },
}));
const IMG = styled.img`
  width: 100%;
  /* max-width: 300px; */
  /* margin: 1rem auto; */
`;
const UL = styled.ul`
  padding-left:1rem;
`;
const LI = styled.li`
  /* padding-left:1rem; */
`;
const RecipeDetails = (props) => {
  console.log('RecipeDetails re-rending')
  useEffect(() => {
    searchID(ID);
  }, []);
  const classes = useStyles();
  const ID = props.match.params.id;
  const searchID = props.searchID;
  const recipeData = props.recipeData;
  let recipe = [];
  let ingredients = [];
  let measures = [];
  let instructions = [];
  let instructionsList = [];
  if (!recipeData.loading) {
    recipe = recipeData.recipe.meals[0];

    let ingredientIndex = 1;
    while (recipe["strIngredient" + ingredientIndex]) {
      ingredients.push(recipe["strIngredient" + ingredientIndex]);
      ingredientIndex += 1;
    }
    let measureIndex = 1;
    while (recipe["strMeasure" + measureIndex]) {
      measures.push(recipe["strMeasure" + measureIndex]);
      measureIndex += 1;
    }
    instructions = recipe.strInstructions.split('\r\n');
    instructionsList = instructions.map((instruction) => {
      if(instruction){  
        return(
          <LI key={uuid()}>
            {instruction}
            <br/>
            <br/>
          </LI>
        )
      }
    }
      
      
    );
  }

  // console.log(instructionsList);
  console.log(instructions);
  return recipeData.loading === true ? (
    <div className={classes.root}>
      <CircularProgress size="4rem" />
    </div>
  ) : (
    <Grid container spacing={0}>
      <Grid item xs={2} />
      
      <Grid container item xs={12} sm={8}>
      <Grid item xs={12}>
        <Typography align="center" variant='h3'>{recipe.strMeal}</Typography>
      </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          // style={{ display: "flex", padding: "1rem 1rem  1rem 0" }}
          className={classes.grid}
        >
          <IMG
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            style={{ margin: "auto" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{ display: "flex" }}
          className={classes.grid}
        >
          {/* <div style={{ margin: "auto" }}> */}
          <IngredientTable column1={ingredients} column2={measures} />
          {/* </div> */}
        </Grid>
        <Grid item xs={12} className={classes.grid}>
          <UL>
            {instructionsList}
          </UL>
        </Grid>
        <Grid item xs={12} className={classes.grid}>
          {recipe.strYoutube&&(
          <iframe 
            title={recipe.strMeal}
            width="727" 
            height="409" 
            src={recipe.strYoutube.replace('watch?v=','embed/')} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen> 
            </iframe>)}
        </Grid>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};
const mapStateToProps = (state) => {
  return {
    recipeData: state.searchID,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    searchID: (ID) => dispatch(searchByID(ID)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);
