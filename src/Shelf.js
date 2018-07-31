import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
state = {
	bookShelfs: []
}
	render() {

    	return (
              
               
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.state.bookShelfs.name}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                       <Book />
                      </li>
                    </ol>
                  </div>
                </div>
               
             
            
        )
    }
}

export default Shelf