import React from 'react';
import { Button } from 'antd';
import { browserHistory } from 'react-router'

import '../../App.css';
import Condition from './Condition';
import ListAndKey from './ListAndKey';
import Form from './Form';
import Composition from './Composition';

class Main extends React.Component {
  constructor(props){
    super(props)
    this.goLife = this.goLife.bind(this)
  }

  goLife(){
    // this.props.history.push('/lifeCircle')
    browserHistory.push('/main/lifeCircle')
  }
  render(){
    return(
      <div>
        <div>
          <Button type="primary" onClick={this.goLife}>生命周期</Button>
        </div>
        <div>
          <Condition/>
          <ListAndKey/>
          <hr/>
          <Form/>
          <hr />
          <Composition/>
        </div>        
      </div>
    )
  }
}

export default Main;