import React from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import './App.css'

import Search from './Search'
import ListBooks from './ListBooks'


class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getData()
  }

  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf);

    this.getData()
  }

  getData() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <ListBooks 
              books={this.state.books}
              updateBooks={this.updateBooks}
            />
          )}           
         />
       
        <Route path="/search" render={({history}) => (
            <Search 
              updateBooks={this.updateBooks}
              books={this.state.books}
              book={this.state.book}
            />
          )}
          />

      </div>
    )
  }
}

export default BooksApp