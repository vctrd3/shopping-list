import React from 'react';
import Navbar from './AppNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import ShoppingList from './ShoppingList'

//redux setup
import { Provider } from 'react-redux';
import store from '../store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <ShoppingList />
      </div>
    </Provider>
  )
}

export default App;
