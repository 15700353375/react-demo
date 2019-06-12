import {ThemeContext} from './theme-context';
import React, { Component } from 'react'

export default class ThemeTogglerButton extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({theme, toggleTheme}) =>(
          <button
          onClick={toggleTheme}
          style={{backgroundColor: theme}}>
             Toggle Theme
          </button>
        )}
      </ThemeContext.Consumer>
    )
  }
}
