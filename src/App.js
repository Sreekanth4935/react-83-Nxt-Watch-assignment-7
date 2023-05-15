import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'

// Replace your code here

class App extends Component {
  state = {
    isDark: false,
  }

  onChangeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  render() {
    const {isDark} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDark,
          onChangeTheme: this.onChangeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
