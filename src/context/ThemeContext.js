import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  onChangeTheme: () => {},
  savedVideos: [],
  onChangeSavedVideos: () => {},
})

export default ThemeContext
