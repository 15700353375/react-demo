import React, { Suspense } from 'react';
import { Router, Route, Link } from 'react-router';
// import logo from './logo.svg';
import '../../App.css';
// import Contexts from './advanced/Contexts'
import ErrorBoundaries from './Error-Boundaries'
import Contextapp from './context/Context-app'

const Focus = React.lazy(() => import('./Focus'))



class Advanced extends React.Component {
  constructor(props){
    super(props)

  }


  render(){
    return(
      <div>
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
        
        
      </div>
    )
  }
}

export default Advanced;