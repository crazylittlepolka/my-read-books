import React, { Component } from 'react'

class Book extends Component {
  //
state = {
    shelf: 'none'
}

componentDidMount() {
  const { book } = this.props;
  if(book.shelf) {
    this.setState({ shelf: book.state})
  }
}
  //
  render() {

      return (                        
                  <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: `url("${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''}")` }}></div>
                            <div className="book-shelf-changer">
                              <select
                                value={this.state.shelf}
                                ///value={
                                  //this.props.shelf
                                  //? this.props.shelf.id
                                 // : 'none'
                                //}
                                onChange={e => this.props.updateBooks(
                                  this.props.book, e.target.value)}
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