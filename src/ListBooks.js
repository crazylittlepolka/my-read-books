import React, { Component } from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'

class ListBooks extends Component {
<<<<<<< HEAD
  
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
      ]
  }

||||||| merged common ancestors
  
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
      ]
}
      //books : []
   
  

=======
 
>>>>>>> search
  render() {
<<<<<<< HEAD
  
      return (
          <div className="list-books">
||||||| merged common ancestors
  console.log(this.props.books)
      return (
           <div className="list-books">
=======
 
    return (
      <div className="list-books">
>>>>>>> search
          
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
          
<<<<<<< HEAD
            <div className="list-books-content">
||||||| merged common ancestors
            <div className="list-books-content">
              
                 
=======
        <div className="list-books-content">
>>>>>>> search
                  
<<<<<<< HEAD
                {
                  this.state.bookShelves.map((bookShelf) => (
                    <div key={bookShelf.id} className="bookshelf">
                      <div key={bookShelf.id}>
                        <h2 className="bookshelf-title">{bookShelf.name}</h2>
||||||| merged common ancestors
                {
                this.state.bookShelves.map((bookShelf) => (
                <div key={bookShelf.id} className="bookshelf">
                        <div key={bookShelf.id}>
              <h2 className="bookshelf-title">{bookShelf.name}</h2>
              <Shelf 
                books={this.props.books}
                bookShelves={this.state.bookShelves}
                updateBooks={this.props.updateBooks}
                bookShelf={bookShelf}
              />
                </div>
=======
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
>>>>>>> search

<<<<<<< HEAD
                        <Shelf 
                          books={this.props.books}
                          bookShelves={this.state.bookShelves}
                          updateBooks={this.props.updateBooks}
                          bookShelf={bookShelf}
                        />
                        
                      </div>

                    </div>
                  ))
                }
||||||| merged common ancestors
            </div>
                ))
                }
=======
>>>>>>> search
        
<<<<<<< HEAD
              <div className="open-search">
                <Link to='/search'>Add a book</Link>
              </div>
      
            </div>
          </div>
        )
    }
||||||| merged common ancestors
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
      
          </div>
    </div>
        )
    }
=======
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>      
        </div>
      </div>
    )
  }
>>>>>>> search
}

export default ListBooks