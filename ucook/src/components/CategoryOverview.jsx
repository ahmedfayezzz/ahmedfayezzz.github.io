import styled from "styled-components";
import Card from "./Card";
import { connect } from "react-redux";
import { filterByCategory } from "../redux";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

import CardMaterial from "./CardMaterial";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
}));

const CategoryOverview = (props) => {
  const name = props.name;
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
  const Cards = categoryData.recipes
    .slice(0, 3)
    .map((recipe) => <CardMaterial key={uuid()} recipe={recipe.meals[0]} />);
  const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;
  return (
    <Link
      key={uuid()}
      style={{ color: "inherit", textDecoration: "none" }}
      to={`/categories/${name}`}
      
    >
      {name}
    </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryOverview);
