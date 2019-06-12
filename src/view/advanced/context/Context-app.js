import React, { Component } from 'react'
import ThemedButton from './themed-button';
import {ThemeContext, themes} from './theme-context'
import ThemeTogglerButton from './theme-toggler-button';

// function Toolbar(props) {
//   return (
//     <ThemedButton onClick={props.changeTheme} >
//       Change Theme
//     </ThemedButton>
//   )
// }

function Content() {
  return (
    <div>
      <ThemeTogglerButton/>
    </div>
  )
}


class Contextapp extends Component {
  constructor(props){
    super(props)
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    }
    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  
  render() {
    // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
    // 而外部的组件使用默认的 theme 值
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          {/* <Toolbar changeTheme={this.toggleTheme} /> */
         <Content/>
        }
        </ThemeContext.Provider>
        <section>
          <ThemedButton>111</ThemedButton>
        </section>
      </div>
    );
  }
}



export default Contextapp