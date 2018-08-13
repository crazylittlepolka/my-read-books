import React, { Component } from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'

class ListBooks extends Component {


  render() {
 
    return (
      <div className="list-books">

          
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
          

        <div className="list-books-content">
                  
          {
            this.props.bookShelves.map(bookShelf => {
              const shelfBooks = this.props.books.filter(book => book.shelf === bookShelf.id);

              return (
                <Shelf
                  key= { bookShelf.id }
                  books= { shelfBooks }
                  bookShelves={ this.props.bookShelves }
                  updateBook={ this.props.updateBook }
                  bookShelf={ bookShelf}
                />
              )
            })
          }
        
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>      
        </div>
      </div>
    )
  }

}

export default ListBooks