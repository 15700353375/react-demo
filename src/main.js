import React, { Suspense } from 'react';
import { Router, Route, Link } from 'react-router';
// import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem';
import Condition from './main/Condition';
import ListAndKey from './main/ListAndKey';
import Form from './main/Form';
import Composition from './main/Composition';
// import Contexts from './advanced/Contexts'
import ErrorBoundaries from './advanced/Error-Boundaries'
import Contextapp from './advanced/context/Context-app'
import Chess from './course/Chess'
const Focus = React.lazy(() => import('./advanced/Focus'))

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


class App extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      inputValue: '',
      list: []
    }
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }
  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }

  handleAdd(){
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
    this.setState((state,props)=>{
      return{
        list: [...state.list, state.inputValue],
        inputValue: ''
      }
    })
  }

  deleteItem(index){
    const list = this.state.list
    list.splice(index, 1)
    this.setState({list})
  }

  getTodoItems(){
    return(
      this.state.list.map((item,index)=>{
        return(
            <TodoItem 
            key={index} 
            deleteItem={this.deleteItem} 
            content={item} index={index} /> 
          )
        }
      )
    )
  }

  render(){
    return(
      <div>
        
        <div style={{display: 'none'}} >
          <div>
            <input style={{color: 'red'}} value={this.state.inputValue} onChange={this.handleInputChange} />
            <button className='input-btn' onClick={this.handleAdd}>add</button>
            
          </div>
          <ul>{ this.getTodoItems() }</ul>

          <Condition/>
          <ListAndKey/>
          <hr/>
          <Form/>
          <hr />
          <Composition/>
        </div>

        <hr/>
        <Suspense fallback={<div>Loading...</div>}>
          <Focus/>
        </Suspense>
        <hr/>
        <Link to="/contexts">Contexts</Link>
        {/* <Router>
          <Route path="contexts" component={Contexts} >Contexts</Route>
        </Router> */}
        {/* <Contexts/> */}
        <hr/>
        <Contextapp />
        <hr/>
        <ErrorBoundaries/>

        <hr/>
        <Chess/>
        
      </div>
    )
  }
}

export default App;