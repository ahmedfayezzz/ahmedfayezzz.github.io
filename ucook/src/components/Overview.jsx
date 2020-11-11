import styled from "styled-components";
import { connect } from "react-redux";
import { filterByCategory } from "../redux";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  Chip:{
    backgroundColor:'#ffffff',
    color:theme.palette.primary.dark,
    border:'1px solid',
    borderColor:theme.palette.primary.dark,
  }
}));

const Overview = (props) => {
  const name = props.name;
  const type = props.type;
  const filterCategory = props.filterCategory;
  const categoryData = props.categoryData;
  const classes = useStyles();
  useEffect(() => {
    if (categoryData.first) {
      for (let i = 0; i < 6; i++) {
        filterCategory();
      }
    }
  }, []);
  // const Cards = categoryData.recipes
  //   .slice(0, 3)
  //   .map((recipe) => <CardMaterial key={uuid()} recipe={recipe.meals[0]} />);
  const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;
  return (
    <Chip
        key={uuid()}
        // color="primary"
        className={classes.Chip}
        style={{ margin: "3px", opacity:'100%' }}
        size='medium'
        label={
          <Link
            key={uuid()}
            style={{ color: "inherit", textDecoration: "none" }}
            to={`/${type}/${name}`}
            
          >
            {name}
          </Link>
        }
      />
    
    // <CardContainer>
    //   {Cards}
    // </CardContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    categoryData: state.categoryFilter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategory: (category) => dispatch(filterByCategory(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
