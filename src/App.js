import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import DrinksPage from './Drinks';
import FoodPage from './FoodItem'; // Correct the import
import AddItemPage from './AddItemPage'; // Add this import
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/drinks" component={DrinksPage} />
          <Route path="/food" component={FoodPage} />
          <Route path="/add-item" component={AddItemPage} /> {/* Add this route */}
          <Redirect to="/" /> {/* Handle 404 */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
