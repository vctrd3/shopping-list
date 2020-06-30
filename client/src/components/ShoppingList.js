import React, { Component } from 'react';
import { v4 } from 'uuid';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


class ShoppingList extends Component {
  state={
    items:[
      {id: v4(), name:'Eggs'},
      {id: v4(), name:'Bacon'},
      {id: v4(), name:'Pancake'},
      {id: v4(), name:'Tuna'}
    ]
  }
  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={() => {
            const name = prompt('Enter Item');
            if(name){
              this.setState(state => ({
                items: [...state.items,{id: v4(), name}]
              }));
            }
          }}
        >Add Item
        </Button>

        <ListGroup>
          <TransitionGroup className="Shopping-list">
            {items.map(({ id, name}) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button className="remove-btn" color="danger" size="sm"
                  onClick={() => {
                    this.setState(state => ({
                      items: state.items.filter(item => item.id !== id)
                    }))
                  }}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>

      </Container>
    )
  }
}

export default ShoppingList
