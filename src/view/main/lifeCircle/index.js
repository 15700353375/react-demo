import React, { Component } from 'react'
import ReactDOM from 'react-dom';
export default class LifeCircle extends Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
    ReactDOM.findDOMNode(this)
  }
  componentDidMount(){
    ReactDOM.findDOMNode(this)
  }
  render() {
    return (
      <div>
        <h1>生命周期-我出来了</h1>
      </div>
    )
  }
}
