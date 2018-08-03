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

componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({ books })
    })
}

updateBooks = (book, shelf) => {
  BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
    this.setState({ books })
    })
}

  render() {
    console.log(this.state.books);
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