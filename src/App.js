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

  bookShelves = [
    {
      "id":"currentlyReading",
      "name":"Currently Reading"
    },
    {
      "id":"wantToRead",
      "name":"Want to Read"
    },
    {
      "id":"read",
      "name":"Read"
    }
  ]

  componentDidMount() {
    this.getData()
  }

  updateBook = (book, shelf) => {
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
              bookShelves ={ this.bookShelves} 
              books={this.state.books}
              updateBook={ this.updateBook }
            />
          )}           
         />

       
        <Route path="/search" render={({history}) => (

            <Search
              bookShelves={ this.bookShelves } 
              updateBook={ this.updateBook }
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