import {v4} from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
  items: [
    {id: v4(), name:'Eggs'},
    {id: v4(), name:'Bacon'},
    {id: v4(), name:'Pancake'},
    {id: v4(), name:'Tuna'}
  ]
}

export default function(state= initialState, action) {
  switch(action.type){
    case GET_ITEMS:
      return{
        ...state
      }
    case DELETE_ITEM:
      return{
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    case ADD_ITEM:
    return{
      ...state, 
      items: [action.payload, ...state.items]
    }
    default:
      return state
  }
}