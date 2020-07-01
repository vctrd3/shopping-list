import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';
import axios from 'axios';

export const getItems = () => async dispatch => {
  try{
    const res = await axios.get('/api/items')
    await dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  }catch{

  }
}

export const addItem = (item) => async dispatch => {
  try{
    const res = await axios.post('/api/items', item)
    await dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  }catch{

  }
}

export const deleteItem = (id) => async dispatch => {
  const res = await axios.delete(`/api/items/${id}`)
  await dispatch({
    type: DELETE_ITEM,
    payload: id
  })
}

export const setItemsLoading = () => {
  return{
    type: ITEMS_LOADING
  }
}