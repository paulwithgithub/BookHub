import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'

import BookHubContext from './Context/BookHubContext'
import BookDetails from './components/BookDetails'
import NotFound from './components/NotFound'

import './App.css'
import BookshelvesAll from './components/BookshelvesAll'

// use the below bookshelvesList for rendering read status of book items in Bookshelves Route

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/bookshelves" component={BookshelvesAll} />
    <ProtectedRoute exact path="/books/:id" component={BookDetails} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
