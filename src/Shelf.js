import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {

  render() {
<<<<<<< HEAD
    console.log(this.props.books)
      return (
      
        <div className="bookshelf-books">
          <ol className="books-grid">
            
            {
              this.props.books
              .filter(book => book.shelf === this.props.bookShelf.id)
              .map(book => (
||||||| merged common ancestors
    console.log(this.props.bookShelves[1].id)
        console.log(this.props.books)
      return (
      
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                  {
                    this.props.books
                    .filter(book => book.shelf === this.props.bookShelf.id)
                  .map(book => (
                      <li key={book.id}>
                              <Book
                          book={ book }
                          updateBooks={this.props.updateBooks}
                      books={this.props.books}
                    bookShelves={this.props.bookShelves}
                    bookShelf={this.props.bookShelf}
                        />
                            </li>
                  ))
                  }
          
=======
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ this.props.bookShelf.name }</h2>
>>>>>>> search

<<<<<<< HEAD
                  <li key={book.id}>
                    <Book 
                      book = { book }
                      books = { this.props.books }
                      bookShelves = { this.props.bookShelves }
                      bookShelf = { this.props.bookShelf}
                      updateBooks={this.props.updateBooks}
                    />
                  </li>
                ))
            }
         
          </ol>
        </div>
          
        )
    }
||||||| merged common ancestors
          
          
                    </ol>
                  </div>
          
        )
    }
=======
        <div className="bookshelf-books">
          <ol className="books-grid">
              
            {
              this.props.books.map(book => (

                  <li key={book.id}>
                    <Book 
                      book = { book }
                      books = { this.props.books }
                      bookShelves = { this.props.bookShelves }
                      shelf = { this.props.bookShelf}
                      updateBook={ this.props.updateBook }
                    />
                  </li>
                ))
            }           
          </ol>
        </div>
      </div>          
    )
  }
>>>>>>> search
}

export default Shelf;