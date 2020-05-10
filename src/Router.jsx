import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { LastLocationProvider } from 'react-router-last-location'
import { ThemeProvider } from './components/ThemeContext'

const Search = React.lazy(() => import('./containers/Search'))

const Router = () => {
  return (
    <main>
      <ThemeProvider>
        <LastLocationProvider>
          <Switch>
            <Route exact path="/" component={Search} />
          </Switch>
        </LastLocationProvider>
      </ThemeProvider>
    </main>
  )
}

export default Router
