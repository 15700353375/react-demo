import React, { Component } from 'react'

export default class Condition extends Component {
  constructor(props){
    super(props)
    this.state={
      isLoggedIn: false,
      unreadMessages: 0
    }
    this.change= this.change.bind(this)

  }
  Greeting(){
    const isLoggedIn = this.state.isLoggedIn
    if(isLoggedIn){
      return <UserGreeting />
    }else{
      return <GuestGreeting />
    }
  }

  change(){
    this.setState((state)=>{
      return {
          isLoggedIn: !state.isLoggedIn,
          unreadMessages: state.unreadMessages+1
      }
    })
  }
  render() {
    const unreadMessages = this.state.unreadMessages;
    return (
      <div>
        <h2>我是条件语句 <button onClick={this.change}>change</button></h2>
        {this.Greeting()}

        <div>
          {unreadMessages > 0 &&
            <h3>
              You have {unreadMessages} unread messages.
            </h3>
          }
        </div>

        <div>
          The user is <b>{this.state.isLoggedIn ? 'currently' : 'not'}</b> logged in.
        </div>

        {this.state.isLoggedIn ? (
          <UserGreeting />
        ) : (
          <GuestGreeting />
        )}
        
        <div>
          <WarningBanner isLoggedIn={this.state.isLoggedIn}/>
        </div>
      </div>
    )
  }
}


function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}


function WarningBanner(props) {
  if (!props.isLoggedIn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}