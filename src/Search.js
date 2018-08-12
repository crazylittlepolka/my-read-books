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
      { query: query }, this.showSearch
    )
  }
  
  showSearch = (query) => {

    if (this.state.query) {

        BooksAPI.search(this.state.query)
        .then(matchingBooks => {

          if (!matchingBooks.error) {
            this.setState({ matchingBooks })
          } else {
            this.setState({ matchingBooks: [] })
          }
        })
    } else {
      this.setState({ matchingBooks: [] })
    }
  }

  render() {
    console.log(this.props.books)
      return (
        <div className="search-books">

          <div className="search-books-bar">

            <Link className="close-search" to='/'>Close</Link>

            <div className="search-books-input-wrapper">

                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={e => this.displayQuery(e.target.value)}
                />

            </div>
          </div>

            <div className="search-books-results">

              <ol className="books-grid">

                {
                  this.state.matchingBooks.map((matchingBook, id) => {
                    
                    let displayedShelf = 'none';
                    
                    this.props.books.map(book => (
                      book.id === matchingBook.id ? displayedShelf = book.shelf : ''))
                      

                      return (
                        <Book
                          key={ id }
                          book={ matchingBook }
                          shelf={ displayedShelf}
                          updateBook={ this.props.updateBook }
                          books={ this.state.matchingBooks }
                          bookShelves={ this.props.bookShelves }
                          
                        />
                      )
                    }                        
                  )
                }
              </ol>
            </div>
          </div>
        )
    }
}

export default Search