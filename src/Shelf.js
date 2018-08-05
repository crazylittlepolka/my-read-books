import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {

  render() {
    //console.log(this.props.bookShelves[1].id)
      //console.log(this.props.books)
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
                              shelfId={this.props.bookShelf.id}
                            />
                          </li>
                        ))
                      }
                    </ol>
                  </div>
          
        )
    }
}

export default Shelf;