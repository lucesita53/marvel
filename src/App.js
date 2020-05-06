import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Router from './Router'
import { Default } from 'react-awesome-spinners'

const Main = () => {
  return (
    <>
      <Helmet>
        <title>{'Marvel'}</title>
      </Helmet>
      <Default />
      <Router />
    </>
  )
}

function App() {
  return (
    <Suspense fallback={<Default />}>
      <BrowserRouter basename="/">
        <Main />
      </BrowserRouter>
    </Suspense>
  )
}

export default App
