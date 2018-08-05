import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {

  state = {

    query: '',
    matchingBooks: []
        
  }


  displayQuery = (query) => {
    this.setState(
      {query: query}, this.showSearch
    ) 
  }

  showSearch = (query) => {
    if (this.state.query) {
      BooksAPI.search(this.state.query)
      .then(theSearch => {
        if (!theSearch.error) {


          const matchingBook = this.state.matchingBook;
          

          theSearch
          .map((book, matchingBook) => {

            if(book.id === matchingBook.id) {


            }
          })


          this.setState({matchingBooks: theSearch})



          
        } else {
          this.setState({metchingBooks: []})         
        }
      })
    }
  }
  render() {

    let defaultShelf = 'none';


      return (
           <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">

                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange= {e => this.displayQuery(e.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  this.state.matchingBooks
                  .map((matchingBook, id) => {

                  const shelfToCompare=this.props.booksFromListBooks.shelf;
                  const listBooks = this.props.booksFromListBooks;

                  listBooks.map(listBook => (

                    matchingBook.id === listBook.id
                    ? defaultShelf = shelfToCompare
                    : ''
                    ))

                    //for( let i = 0; i < this.props.books.length; i++) {

                     // if (matchingBook.id === this.props.book.id) {
                    //    defaultShelf = shelfId;
                    //  } else {
                    //    defaultShelf = '';
                    //  }
                    //}

                    //this.props.books.map(theBook => (
                      //theBook.id === matchingBook.id
                      //? defaultShelf = theBook.defaultShelf
                      //: ''
                      //))  


                    return (
                      <Book 
                        key={id}
                        book={matchingBook}
                        updateBooks = {this.updateBooks}
                        books={this.state.matchingBooks}
                        bookShelves={this.props.bookShelves}
                        defaultShelf={defaultShelf}

                     />
                    )
                  })
                }
              </ol>
            </div>
          </div>
        )
    }
}

export default Search