import React from 'react'
import Navbar from './components/layouts/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Error from './components/pages/Error'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import MyProvider from './context'

export default function App() {
  return (
    <MyProvider>
      <Router>
          <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route component={Error}/>
        </Switch>
      </Router>
    </MyProvider>
  )
}
