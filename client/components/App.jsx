import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'

//COMPONENTS
import Body from './Body'


const App = () => {
  return (
    <>

    <Route exact path='/' component={Home} />

    <h1>React development has begun!</h1>
    <Body/>

    </>
  )
}

export default App
