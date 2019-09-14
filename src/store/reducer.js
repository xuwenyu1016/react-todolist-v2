import { INPUT_CHANGE_VALUE, MODIFY_BUTTON_CLICK, DELETE_ITEM_CLICK, INIT_LIST_ACTION } from './actionTypes';

const defalutState = {
  inputValue: '',
  list: []
}

export default (state = defalutState, action) => {
  if(action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }

  if(action.type === INPUT_CHANGE_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === MODIFY_BUTTON_CLICK){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if(action.type === DELETE_ITEM_CLICK){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
}