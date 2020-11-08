import { useEffect } from "react";
import { connect } from "react-redux";
import { searchByID } from "../redux/";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
}));
const RecipeDetails = (props) => {
  const classes = useStyles();
  const ID = props.match.params.id;
  const searchID = props.searchID;
  const recipeData = props.recipeData;
  useEffect(() => {
    searchID(ID);
  }, []);
  console.log(recipeData);
  return recipeData.loading === true ? (
    <div className={classes.root}>
      <CircularProgress size="4rem" />
    </div>
  ) : (
    <h1>success</h1>
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