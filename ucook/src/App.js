import {Provider} from 'react-redux'
import { Switch,Route,BrowserRouter as Router,Redirect } from "react-router-dom"
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import { ThemeProvider } from "@material-ui/core";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

// import ProductContainer from './components/ProductContainer'
import store from './redux/store';
import NavBar from './components/NavBar';
import Home from './components/Home';
import NotFound from './components/NotFound';

import About from './components/About';
import GlobalStyle from './components/styled/globalStyles';
import Categories from './components/Categories';
import Areas from './components/Areas';
import IngredientDetails from './components/IngredientDetails';
import RecipeDetails from './components/RecipeDetails'
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4AB07B',
    },
    secondary: {
      main: '#009688',
    },
  }
});

function App() {
  return (
    <>
      <Provider store={store}>
        {/* <NavBar/> */}
        <ThemeProvider theme={theme}> 
          <Router>
            <NavBar/>
            <Switch>
              <Redirect exact from="/ "to="/home" />
              <Route path="/home"  component={Home} />
              <Route path="/categories"  component={Categories}/>
              <Route path="/areas"  component={Areas}/>
              <Route path="/about"  component={About}/>
              <Route
                path="/ingredients/:name"
                
                component={IngredientDetails}
              />
              <Route
                path="/recipes/:id/:name?"
                
                component={RecipeDetails}
              />
              <Route path="/notfound"  component={NotFound} />
              <Redirect to="/notfound" />
            </Switch>
            <GlobalStyle/>
          </Router>
        </ThemeProvider>
      </Provider>
    </>
      
          // // <Router>
          //   <Provider store={store}>
              
          //   <NavBar/>
          //   {/* <Switch>
          //     <Route path='/'/>
          //   </Switch> */}
          //   {/* <ProductContainer/> */}
          //   </Provider>
          // // </Router>

  );
}

export default App;
