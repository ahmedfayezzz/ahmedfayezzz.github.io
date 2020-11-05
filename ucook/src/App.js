import {Provider} from 'react-redux'
import { Switch,Route,BrowserRouter as Router,Redirect } from "react-router-dom"
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

// import ProductContainer from './components/ProductContainer'
import store from './redux/store';
import NavBar from './components/NavBar';
import Home from './components/Home';
import NotFound from './components/NotFound';

import About from './components/About';
import GlobalStyle from './components/styled/globalStyles';


function App() {
  return (
    <>
      <Provider store={store}>
        {/* <NavBar/> */}
        <Router>
          <NavBar/>
          <Switch>
            <Redirect exact from="/ "to="/home" />
            <Route path="/home"  component={Home} />
            <Route path="/about"  component={About}/>
            <Route path="/notfound"  component={NotFound} />
            <Redirect to="/notfound" />
          </Switch>
          <GlobalStyle/>
        </Router>
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
