import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Search from './Search'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    listDataFromListBooks: []
    
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
//
getingListBooks = (dataFromListBooks) => {
  this.setState({listDataFromListBooks: dataFromListBooks})
}
//
  render() {
    
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <ListBooks 
              books={this.state.books}
              updateBooks={this.updateBooks}
              sendingData={this.getingListBooks}//
            />
          )}           
        />
       
        <Route path="/search" render={({history}) => (
            <Search 
              books={this.state.books}
              book={this.state.book}
              updateBooks={this.updateBooks}
              booksFromListBooks={this.state.listDataFromListBooks}
            />
          )}
        />

      </div>
    )
  }
}

export default BooksApp