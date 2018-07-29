import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component {

  state = {
      query: '',
      matchingBooks: []
  }

  updateQuery = (query) => {
      this.setState({ query })
      
      this.showSearch(query)
  }

  showSearch = (query) => {

    if (query) {
      BooksAPI.search(query)
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

	render () {

		return (
			<div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
              
            <div className="search-books-input-wrapper">

                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={(e) => this.updateQuery(e.target.value)}
                  />
              
            </div>
        </div>
        
        <div className="search-books-results">
              
          <ol className="books-grid">
            {
              this.state.matchingBooks.map(matchingBook => {
                let shelf = 'none';

                this.props.books.map(book => (
                  book.id === matchingBook.id
                  ? shelf = book.shelf
                  : ''
                  ))

                return (
                  <li key={matchingBook.id}>
                    <Book
                      book={matchingBook}
                      updateShelf={this.props.updateShelf}
                      currentShelf={shelf}
                    />
                  </li>
                )
              })
            }
          </ol>
            
        </div>
      </div>
		)

	}

}

export default SearchPage