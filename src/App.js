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

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
      <Search />
        ) : (
    <ListBooks />
        )}
      </div>
    )
  }
}

export default BooksApp