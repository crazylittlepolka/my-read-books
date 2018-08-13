import React from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import './App.css'

import Search from './Search'
import ListBooks from './ListBooks'


class BooksApp extends React.Component {
  state = {
<<<<<<< HEAD
    books: []    
||||||| merged common ancestors
    books: []
    
=======
    books: []
>>>>>>> search
  }

<<<<<<< HEAD
componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({books})
  })
}
||||||| merged common ancestors
componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({ books })
    })
}
=======
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
>>>>>>> search

<<<<<<< HEAD
updateBooks = (book, shelf) => {
  BooksAPI.update(book, shelf);
  
  BooksAPI.getAll().then((books) => {
   this.setState({ books })
  })
}
||||||| merged common ancestors
updateBooks = (book, shelf) => {
  BooksAPI.update(book, shelf);
}
=======
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
>>>>>>> search

  render() {
    
    return (
      
      <div className="app">
        <Route exact path="/" render={() => (
<<<<<<< HEAD
            <ListBooks 
              books={this.state.books}
              book={this.state.book}
              updateBooks={this.updateBooks}
            />
          )}           
        />
||||||| merged common ancestors
        <ListBooks 
          books={this.state.books}
        updateBooks={this.updateBooks}
        />
      )}           
       />
=======
            <ListBooks
              bookShelves ={ this.bookShelves} 
              books={this.state.books}
              updateBook={ this.updateBook }
            />
          )}           
         />
>>>>>>> search
       
        <Route path="/search" render={({history}) => (
<<<<<<< HEAD
            <Search 

            />
||||||| merged common ancestors
          <Search 

          />
=======
            <Search
              bookShelves={ this.bookShelves } 
              updateBook={ this.updateBook }
              books={this.state.books}
              book={this.state.book}
            />
>>>>>>> search
          )}
        />

      </div>
    )
  }
}

export default BooksApp