import React from 'react'

const ThemeContext = React.createContext([{}, () => {}])

const theme = {
  light: 'white',
  dark: 'black',
}

const ThemeProvider = (props) => {
  return <ThemeContext.Provider value={theme.light}>{props.children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider }
