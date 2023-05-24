import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItem from './components/VideoItem'
import TrendingRoute from './components/TrendingRoute'

// Replace your code here

class App extends Component {
  state = {
    isDark: false,
    savedVideos: [],
  }

  onChangeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  onChangeSavedVideos = newVideo =>
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, newVideo],
    }))

  render() {
    const {isDark, savedVideos} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDark,
          onChangeTheme: this.onChangeTheme,
          savedVideos,
          onChangeSavedVideos: this.onChangeSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/videos/:id" component={VideoItem} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
