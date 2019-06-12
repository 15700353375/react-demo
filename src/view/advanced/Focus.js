
import React, { Component } from 'react'

function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state={
      isOpen: false
    }
    this.inputElement = React.createRef();
    this.toggleContainer = React.createRef();

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }


  componentDidMount() {
    // 现在你就可以在需要时设置焦点了
    this.inputElement.current.focus();
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler);
  }

  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  onClickOutsideHandler(event) {
    if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  }
  
  render() {
    return (
      <div>
        <CustomTextInput inputRef={this.inputElement} />

        <div ref={this.toggleContainer}>
          <button onClick={this.onClickHandler}>Select an option</button>
          {this.state.isOpen ? (
            <ul style={{background:'#ddd',width: '200px'}}>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}
