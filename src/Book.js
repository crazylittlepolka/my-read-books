import React, { Component } from 'react'


class Book extends Component {


	render() {
		let bookCover; 
		if (this.props.book.imageLinks) {
			bookCover = this.props.book.imageLinks.thumbnail;
		} else {
			bookCover = '';
		}

		return (

                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${bookCover}"`}}></div>
                            <div className="book-shelf-changer">
                              <select
                              	value={this.props.currentShelf}
								onChange={(e) => this.props.updateShelf(
									this.props.book, e.target.value
								)}							
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