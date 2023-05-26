import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItem from './components/VideoItem'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import NotFound from './components/NotFound'
// Replace your code here

class App extends Component {
  state = {
    sideButtonActiveId: '',
    isDark: false,
    savedVideos: [],
  }

  onChangeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  onChangeRemoveSavedVideo = videoSaved => {
    const {savedVideos} = this.state
    const updatedSavedVideos = savedVideos.filter(
      eachVideo => videoSaved.id !== eachVideo.id,
    )
    this.setState({
      savedVideos: updatedSavedVideos,
    })
  }

  onChangeSavedVideos = newVideo => {
    const {savedVideos} = this.state
    console.log(savedVideos)
    const isVideoAlreadyPresent = savedVideos.find(
      eachVideo => eachVideo.id === newVideo.id,
    )

    if (!isVideoAlreadyPresent) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, newVideo],
      }))
    }
    console.log(savedVideos)
  }

  changeActiveButton = id => {
    this.setState({
      sideButtonActiveId: id,
    })
  }

  render() {
    const {isDark, savedVideos, sideButtonActiveId} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDark,
          onChangeTheme: this.onChangeTheme,
          savedVideos,
          onChangeSavedVideos: this.onChangeSavedVideos,
          onChangeRemoveSavedVideo: this.onChangeRemoveSavedVideo,
          changeActiveButton: this.changeActiveButton,
          sideButtonActiveId,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/videos/:id" component={VideoItem} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
