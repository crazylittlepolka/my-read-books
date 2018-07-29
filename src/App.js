import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchPage from './SearchPage'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /** OK
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //showSearchPage: false
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateShelf = (book,shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    console.log(this.state.books);
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks 
            books={this.state.books}
            updateShelf={this.updateShelf}
          />
          )}
        />


        <Route path="/search" render={({history}) => (
          <SearchPage
            books={this.state.books} 
            updateShelf={this.updateShelf}
          />
          )}
          />


      </div>
    )
  }
}

export default BooksApp
