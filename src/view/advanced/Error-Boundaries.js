import React, { Component } from 'react'
// 当抛出错误后，请使用 static getDerivedStateFromError() 渲染备用 UI ，
// 使用 componentDidCatch() 打印错误信息。
export default class ErrorBoundaries extends Component {
  constructor(props){
    super(props)
    this.state={
      hasError: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    
    try {
      // Do something that could throw
    } catch (error) {
      this.setState({ error });
    }
  }

  static getDerivedStateFromError(){
    return { hasError: true }
  }

  componentDidCatch(error,info){
    console.log(error, info);
  }
  render() {
    if(this.state.hasError){
      return <h1>Something went wrong</h1>
    }

    return (
      <div onClick={this.handleClick}>Click Me</div>
    )

    // return this.props.children
    
  }
}


// 然后你可以将它作为一个常规组件去使用：

// <ErrorBoundary>
//   <MyWidget />
// </ErrorBoundary>


/* 注意：
1、错误边界仅可以捕获其子组件的错误，它无法捕获其自身的错误。
2、错误边界的工作方式类似于 JavaScript 的 catch {}，不同的地方在于错误边界只针对 React 组件。
只有 class 组件才可以成为成错误边界组件。 */