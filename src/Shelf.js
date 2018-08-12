import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ this.props.bookShelf.name }</h2>

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
}

export default Shelf;