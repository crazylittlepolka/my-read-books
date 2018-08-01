import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Search from './Search'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
books: []
    
  }

ComponentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({books})
    })
}

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
        <ListBooks 
          books={this.state.books}
        />
      )}           
       />
       
        <Route path="/search" render={({history}) => (
          <Search 

          />
          )}
          />

      </div>
    )
  }
}

export default BooksApp