import React, { Component } from 'react'
import Shelf from './Shelf'
//import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class ListBooks extends Component {
  
    state = {
      bookShelves: [
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
      ]```,
      books : []```
   }
  

  render() {
  console.log(this.state.books)
      return (
           <div className="list-books">
          
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
          
            <div className="list-books-content">
              
                 
                  
                {
                this.state.bookShelves.map((bookShelf) => (
                <div key={bookShelf.id} className="bookshelf">
                        <div key={bookShelf.id}>
              <h2 className="bookshelf-title">{bookShelf.name}</h2>
              <Shelf 
                books={this.state.books}
                bookShelves={this.state.bookShelves}
                updateBooks={this.props.updateBooks}
                bookShelf={this.props.bookShelf}
              />
                </div>

            </div>
                ))
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