import { INPUT_CHANGE_VALUE, MODIFY_BUTTON_CLICK, DELETE_ITEM_CLICK, INIT_LIST_ACTION } from './actionTypes'
import axios from 'axios';

export const getInputChangeAction = (value) => ({
  type: INPUT_CHANGE_VALUE,
  value
})

export const getModifyButtonClick = () => ({
  type: MODIFY_BUTTON_CLICK
})

export const getDeleteItemClick = (index) => ({
  type: DELETE_ITEM_CLICK,
  index
})

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/api/list.json').then( (res) => {
      const data = res.data;
      const action = initListAction(data);
      dispatch(action);
      // const action = initListAction(data);
      // store.dispatch(action)
    })
  }
}