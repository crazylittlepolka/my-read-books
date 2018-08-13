import React, { Component } from 'react'

class Book extends Component {
  
  updateShelf = e => {
    this.props.updateBook(this.props.book, e.target.value)
  }

  render() {
    return (                        
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: `url("${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''}")` }}></div>
            <div className="book-shelf-changer">

                <select
                    
                    value={ this.props.book.shelf ? this.props.book.shelf : this.props.displayedShelf }
                    onChange={ this.updateShelf }

                >
                    <optgroup label="Move to ...">

                      {
                        this.props.bookShelves.map(shelf => (
                          <option value={ shelf.id } key={ shelf.id }>{ shelf.name }</option>
                        ))
                      }
                      
                      <option value="none">None</option>
                    </optgroup>
                </select>
            </div>
        </div>

        <div className="book-title">{this.props.book.title}</div>

        <div className="book-authors">{this.props.book.authors}</div>
      </div>        
    )
  }
}

export default Book;

