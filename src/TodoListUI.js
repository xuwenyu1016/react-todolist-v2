import React, { Fragment } from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return (
    <Fragment>
        <Input
          placeholder="To do list"
          value={props.inputValue}
          className="input"
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleClickButton}>Submit</Button>
        <List
          className="list"
          size="small"
          bordered
          dataSource={props.list}
          renderItem={
            (item, index) =>
              <List.Item onClick={ 
                () => {props.handleListClick(index)}
              }>
                {item}
              </List.Item>
          }
        />
      </Fragment>
  )
}

// class TodoListUI extends Component {
//   render() {
//     return (
//       <Fragment>
//         <Input
//           placeholder="To do list"
//           value={this.props.inputValue}
//           className="input"
//           onChange={this.props.handleInputChange}
//         />
//         <Button type="primary" onClick={this.props.handleClickButton}>Submit</Button>
//         <List
//           className="list"
//           size="small"
//           bordered
//           dataSource={this.props.list}
//           renderItem={
//             (item, index) =>
//               <List.Item onClick={ 
//                 () => {this.props.handleListClick(index)}
//               }>
//                 {item}
//               </List.Item>
//           }
//         />
//       </Fragment>
//     )
//   }
// }

export default TodoListUI;