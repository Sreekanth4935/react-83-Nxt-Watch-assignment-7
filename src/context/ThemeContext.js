import React from 'react'

const ThemeContext = React.createContext({
  activeSideButton: '',
  changeActiveButton: () => {},
  isDark: false,
  onChangeTheme: () => {},
  savedVideos: [],
  onChangeSavedVideos: () => {},
  onChangeRemoveSavedVideo: () => {},
})

export default ThemeContext
