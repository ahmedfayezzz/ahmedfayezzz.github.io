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
    width: '90%',
    maxWidth: 345,
    // flexGrow:1,
    margin: "1rem",
    // backgroundColor: "#ececec",
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'unset',
    // border:'1pt solid',
    borderColor: theme.palette.primary.dark,
    [theme.breakpoints.down('sm')]: {
      // backgroundColor: theme.palette.primary.main
    }
  },
  Card: {
    // width:'30%'

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
  Chip: {
    backgroundColor: '#ffffff',
    color: theme.palette.primary.dark,
    border: '1px solid',
    borderColor: theme.palette.primary.dark,
  }
}));

export default function BigCard({ recipe }) {
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
  let sliceEnd = 6
  const ingredientLinks = ingredients.slice(0, sliceEnd).map((ingredient) => {
    if (ingredient.length > 15)
      return
    return (
      <Chip
        key={uuid()}
        // color="primary"
        className={classes.Chip}
        style={{ margin: "3px", opacity: '100%' }}
        size='medium'
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
  let recipeTitle = recipe.strMeal
  recipeTitle = recipe.strMeal.length > 26 ? `${recipeTitle.slice(0, 26)}...` : recipeTitle

  return (
    <Card className={classes.root} style={{}}>

      <CardMedia
        className={classes.media}
        image={recipe.strMealThumb}
        title={recipe.strMeal}
      />
      <CardHeader
        style={{ borderBottom: '1px solid #c0c0c0' }}
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
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
        subheader={
          <div>
            <Link
              key={uuid()}
              style={{ color: "inherit" }}
              to={`/categories/${recipe.strCategory}`}
            >
              {recipe.strCategory}
            </Link>
            {` - `}
            <Link
              key={uuid()}
              style={{ color: "inherit" }}
              to={`/areas/${recipe.strArea}`}
            >
              {recipe.strArea}
            </Link>
          </div>
        }
      />
      <CardContent>
        {ingredientLinks}
        {/* <Typography variant="body1" color="textSecondary" component="p">

          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography> */}
      </CardContent>
      <CardActions disableSpacing style={{ marginTop: 'auto' }}>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <IconButton
          // className={classes.expand}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          style={{margin:'0 auto'}}
        >
          <Link
            key={uuid()}
            style={{ color: "inherit", textDecoration: "none" }}
            to={`/recipes/${recipe.idMeal}`}
          >
            View Full Recipe
            </Link>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography>
            {recipe.strInstructions.toString()}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
