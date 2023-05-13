import React from 'react'

const DarkThemeContext = React.CreateContext({
  isDarkTheme: false,
  changeTheme: () => {},
})

export default DarkThemeContext
