import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';
import store from './store';
import { getInputChangeAction, getModifyButtonClick, getDeleteItemClick } from './store/actionCreators'

import 'antd/dist/antd.css';
import './css/style.css'; 

class TodoList extends Component {
  constructor (props) {
    super (props);

    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreCHange = this.handleStoreCHange.bind(this)
    this.handleClickButton = this.handleClickButton.bind(this)

    store.subscribe(this.handleStoreCHange)
  }
  render () {
    return (
      <Fragment>
        <Input
          placeholder="To do list"
          value={this.state.inputValue}
          className="input"
          onChange={this.handleInputChange}
        />
        <Button type="primary" onClick={this.handleClickButton}>Submit</Button>
        <List
          className="list"
          size="small"
          bordered
          dataSource={this.state.list}
          renderItem={
            (item, index) =>
              <List.Item onClick={this.handleListClick.bind(this,index)}>{item}</List.Item>
          }
        />
      </Fragment>
    )
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
