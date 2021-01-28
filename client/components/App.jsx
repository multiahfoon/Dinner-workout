import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'

// COMPONENTS
import Body from './Body'

const zero = {
  margin: '0',
  fontFamily: 'Arial, Helvetica, sans-serif',
  border: 'solid',
  height: '100%'
}

const container = {
  width: '70%',
  margin: '0 auto'
}

const App = () => {
  return (
    // div and section is for styling
    <div style={zero}>
      <section style={container}>
        <Body/>
        <Route exact path='/' component={Home} />
      </section>
    </div>
  )
}

export default App
