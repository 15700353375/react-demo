import React from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';
import TodoItem from './TodoItem';
import AddInput from './AddInput';

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      id: 1,
    }
    
    this.handleAdd = this.handleAdd.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  componentDidMount(){
    console.log(ReactDOM.findDOMNode(this))
  }
  

  handleAdd(values) {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
    this.setState((state, props) => {
      return {
        list: [...state.list, {name: values,id: state.id++}],
      }
    })

    console.log(this.state.list)
  }

  deleteItem(index) {
    const list = this.state.list
    list.splice(index, 1)
    this.setState({ list })
  }

  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem
            key={index}
            deleteItem={this.deleteItem}
            content={item} index={index} />
        )
      }
      )
    )
  }

  render() {
    return (
      <div>
        <AddInput handleAdd={this.handleAdd} />
        {/* <ul>{this.getTodoItems()}</ul> */}
        <TodoItem list={this.state.list} deleteItem={this.deleteItem}/>
      </div>
    )
  }
}

export default TodoList;