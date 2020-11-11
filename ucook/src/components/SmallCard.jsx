import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Chip from "@material-ui/core/Chip";
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
  root: {
    width:'10vw',
    minWidth: 150,
    margin: "1rem",
    backgroundColor: "#ffffff",
    boxShadow:'unset',
    position:'relative'
  },
  Card: {
    width:'30%'
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  CardHeader:{
    textAlign:'center',
    position:'absolute',
    width:'100%',
    height:'100%',
    color:'white',
    // opacity:''
    backgroundColor:'rgba(15, 15, 15, 0.753)'
  }
}));

export default function SmallCard({ recipe }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  let ingredientIndex = 1;
  let ingredients = [];
  // console.log(recipe);

  while (recipe["strIngredient" + ingredientIndex]) {
    ingredients.push(recipe["strIngredient" + ingredientIndex]);
    ingredientIndex += 1;
  }
  const ingredientLinks = ingredients.slice(0, 6).map((ingredient) => {
    return (
      <Chip
        key={uuid()}
        color="secondary"
        style={{ margin: "3px" }}
        label={
          <Link
            key={uuid()}
            style={{ color: "inherit", textDecoration: "none" }}
            to={`/ingredients/${ingredient}`}
          >
            {ingredient}
          </Link>
        }
      />
    );
  });
  let recipeTitle=recipe.strMeal
  recipeTitle =recipe.strMeal.length>20? `${recipeTitle.slice(0,15)}...`:recipeTitle
  // console.log(ingredientLinks);

  return (
    <Card className={classes.root} style={{display:'flex', flexDirection:'column'}}>
      
      <CardMedia
        className={classes.media}
        image={recipe.strMealThumb}
        title={recipe.strMeal}
      />
      <CardHeader
        style={{padding:'0'}}
        className={classes.CardHeader}
        titleTypographyProps={{variant:'body2'}}
        title={
          <Tooltip title={recipe.strMeal}>
            <Link
              key={uuid()}
              style={{ color: "inherit", textDecoration: "none" }}
              to={`/recipes/${recipe.idMeal}`}
            >
              {recipeTitle}
            </Link>
          </Tooltip>
        }
      />
      {/* <CardContent>
        {ingredientLinks}
      </CardContent> */}
      {/* <CardActions disableSpacing style={{marginTop:'auto'}}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
}
