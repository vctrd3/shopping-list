import React from 'react';
import Navbar from './AppNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import ShoppingList from './ShoppingList'
import ItemModal from './ItemModal';
import { Container } from 'reactstrap'

//redux setup
import { Provider } from 'react-redux';
import store from '../store';

 

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  )
}

export default App;
