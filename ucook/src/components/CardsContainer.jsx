import styled from "styled-components";
import { connect } from "react-redux";
import { fetchRandom } from "./../redux/receipt/random/randomActions";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";

import BigCard from "./BigCard";
import SmallCard from "./SmallCard";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    color: "#2e5247",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.623)",
  },
}));
const CardContainer = ({ name, recipes }) => {
  const classes = useStyles();
  const Cards = recipes.map((recipe) => (
    <SmallCard key={uuid()} recipe={recipe}></SmallCard>
  ));
  const CardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* background-color:rgba(255, 255, 255, 0.479); */
  `;
  return (
    <>
      <Grid container>
        <Grid item sm={2} />

        <Grid className={classes.container} container item sm={12} md={8}>
          <Typography
            className={classes.root}
            style={{ paddingBottom: "1rem" }}
            variant="h4"
            align="center"
          >
            {name}
          </Typography>
          <CardDiv>{Cards}</CardDiv>
        </Grid>
        <Grid item sm={2} />
      </Grid>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    randomData: state.random,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchRandom: () => dispatch(fetchRandom()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
