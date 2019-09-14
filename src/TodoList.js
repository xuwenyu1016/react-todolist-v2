import React, { Component } from 'react';

import store from './store';
import { getInputChangeAction, getModifyButtonClick, getDeleteItemClick, getTodoList } from './store/actionCreators'

import 'antd/dist/antd.css';
import './css/style.css'; 
import TodoListUI from './TodoListUI';


class TodoList extends Component {
  constructor (props) {
    super (props);

    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreCHange = this.handleStoreCHange.bind(this)
    this.handleClickButton = this.handleClickButton.bind(this)
    this.handleListClick = this.handleListClick.bind(this)
    store.subscribe(this.handleStoreCHange)
  }
  render () {
    return (
      <TodoListUI 
        inputValue={this.state.inputValue}
        handleInputChange = {this.handleInputChange}
        handleClickButton = {this.handleClickButton}
        list={this.state.list}
        handleListClick = {this.handleListClick}
      />
    )
  }

  componentDidMount () {
    const action = getTodoList();
    store.dispatch(action)
  }

  handleInputChange (e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreCHange () {
    this.setState(store.getState())
  }
  handleClickButton () {
    const action = getModifyButtonClick()
    store.dispatch(action)
  }
  handleListClick (index) {
    const action = getDeleteItemClick(index)
    store.dispatch(action)
  }
}

export default TodoList;
