import React from 'react';
import Navbar from './AppNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import ShoppingList from './ShoppingList'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ShoppingList />
    </div>
  )
}

export default App;
