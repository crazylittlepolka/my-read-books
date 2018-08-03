import React, { Component } from 'react'
import Shelf from './Shelf'
//import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class ListBooks extends Component {
  
  state = {
    
      shelves: [
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
}
      //books : []
   
  

  render() {
  console.log(this.props.books)
      return (
           <div className="list-books">
          
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
          
            <div className="list-books-content">
              
                 
                  
                {
                this.state.shelves.map((shelf) => (
                <div key={shelf.id} className="bookshelf">
                        <div key={shelf.id}>
              <h2 className="bookshelf-title">{shelf.name}</h2>
              <Shelf 
                books={this.props.books}
                shelves={this.state.shelves}
                updateBooks={this.props.updateBooks}
                shelf={shelf}
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