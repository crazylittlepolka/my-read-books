import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
  showShelf = e => {
    //this.updateBooks
    //(this.props.book, e.target.value)
  BooksAPI.update(this.props.book,e.target.value);
  BooksAPI.getAll(this.props.books).then((books) => ({books})
    )
    //this.props.book.shelf = e.target.value;
    //this.props.updateBooks(this.props.book, e.target.value);

  }

  render() {
      return (                        
                  <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: `url("${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''}")` }}></div>
                            <div className="book-shelf-changer">
                              
                              <select
                                ///onChange={this.showShelf}
                                onChange={this.showShelf}
                                value={
                                  this.props.shelfId
                                  ? this.props.shelfId
                                  : this.props.defaultShelf

                                }

                                
                              >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>

                            </div>
                          </div>
                          <div className="book-title">{this.props.book.title}</div>
                          <div className="book-authors">{this.props.book.authors}</div>
                        </div>
        
        )
    }
}

export default Book