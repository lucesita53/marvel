import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { LastLocationProvider } from 'react-router-last-location'
import { ThemeProvider } from './components/ThemeContext'

const Home = React.lazy(() => import('./containers/Home'))

const Router = () => {
  return (
    <main>
      <ThemeProvider>
        <LastLocationProvider>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </LastLocationProvider>
      </ThemeProvider>
    </main>
  )
}

export default Router
