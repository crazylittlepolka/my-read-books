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
        .then(theSearch => {

            if (!theSearch) {
              
              this.setState({matchingBooks: []})
              
              } else {
                
                this.setState({matchingBooks: theSearch})
                
              }
                            
          }
        )
    }
  }

  render() {

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
                  this.state.matchingBooks
                    .map( (book, id) => {

                      let bookShelf 

                      return (
                        <Book
                          key={id}
                          book={ book }
                          updateBook={ this.updateBook }
                          books={this.state.matchingBooks}
                          bookShelves={this.props.bookShelves}
                          bookShelf={bookShelf}
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