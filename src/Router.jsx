import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { LastLocationProvider } from 'react-router-last-location'

const Home = React.lazy(() => import('./containers/Home'))

const Router = () => {
  return (
    <main>
      <LastLocationProvider>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </LastLocationProvider>
    </main>
  )
}

export default Router
