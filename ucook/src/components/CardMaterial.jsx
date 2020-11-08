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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "1rem",
    backgroundColor: "#ffffff",
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
}));

export default function CardMaterial({ receipt: recipe }) {
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
    // console.log('strIngredient'+ingredientIndex.toString());

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
  // console.log(ingredientLinks);

  return (
    <Card className={classes.root}>
      <CardHeader
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
          <Link
            key={uuid()}
            style={{ color: "inherit", textDecoration: "none" }}
            to={`/recipes/${recipe.idMeal}`}
          >
            {recipe.strMeal}
          </Link>
        }
        subheader={
          <div>
            <Link
              key={uuid()}
              style={{ color: "inherit" }}
              to={`/ingredients/${recipe.strCategory}`}
            >
              {recipe.strCategory}
            </Link>
            {` - `}
            <Link
              key={uuid()}
              style={{ color: "inherit" }}
              to={`/ingredients/${recipe.strArea}`}
            >
              {recipe.strArea}
            </Link>
          </div>
        }
        subheader2={recipe.strArea}
      />
      <CardMedia
        className={classes.media}
        image={recipe.strMealThumb}
        title={recipe.strMeal}
      />
      <CardContent>
        {ingredientLinks}
        {/* <Typography variant="body1" color="textSecondary" component="p">

          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography> */}
      </CardContent>
      <CardActions disableSpacing>
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
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography>
            {recipe.strInstructions.toString()}
            {/* <ul>
              {methodItems}
            </ul> */}
          </Typography>
          {/* <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  );
}
