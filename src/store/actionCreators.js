import { INPUT_CHANGE_VALUE, MODIFY_BUTTON_CLICK, DELETE_ITEM_CLICK } from './actionTypes'

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