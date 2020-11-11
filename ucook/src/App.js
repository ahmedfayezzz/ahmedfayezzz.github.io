import { Provider } from "react-redux";
import {
  Switch,
  Route,
  // BrowserRouter as Router,
  HashRouter as Router,
  Redirect,
} from "react-router-dom";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import { ThemeProvider, responsiveFontSizes } from "@material-ui/core";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

import store from "./redux/store";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

import About from "./components/About";
import GlobalStyle from "./components/styled/globalStyles";
import Categories from "./components/Categories";
import Areas from "./components/Areas";
import IngredientDetails from "./components/IngredientDetails";
import RecipeDetails from "./components/RecipeDetails";
import CategoryDetails from "./components/CategoryDetails";
import styled from "styled-components";
import AreaDetails from "./components/AreaDetails";
let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4AB07B",
    },
    secondary: {
      // main: "#009688",
      main: "#ffff",
    },
    typography: {
      fontFamily: `'Cabin', sans-serif'`,
    },
  },
});
const DIV = styled.div`
  background-color: #77aa77;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2377aa77'/%3E%3Cstop offset='1' stop-color='%234fd'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  padding-top: 2rem;
  width:100%;
  height:100%;
`;
theme = responsiveFontSizes(theme);
function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router className="background">
            <NavBar />
            <DIV>

              <Switch>
                <Route exact path="/" component={Home}>
                  <Redirect  to="/home" />
                </Route>
                {/* <Redirect exact from="/ " to="/home" />
                <Route path="/home" component={Home} /> */}
                <Route path="/home" component={Home} /> 
                <Route path="/categories" exact component={Categories} />
                <Route path="/areas" exact component={Areas} />
                <Route path="/about" component={About} />
                <Route path="/ingredients/:name" component={IngredientDetails} />
                <Route path="/recipes/:id/:name?" component={RecipeDetails} />
                <Route path="/categories/:name" component={CategoryDetails} />
                <Route path="/areas/:name" component={AreaDetails} />
                <Route path="/notfound" component={NotFound} />
                <Redirect from="." to="/home" />
                <Redirect to="/notfound" />
              </Switch>
            </DIV>
            <GlobalStyle />
          </Router>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
