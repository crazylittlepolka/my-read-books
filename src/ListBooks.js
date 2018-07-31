import React, { Component } from 'react'
import Shelf from './Shelf'

class ListBooks extends Component {
    state = {
      bookShelfs: [
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

  render() {
      console.log(this.state.bookShelfs)
      return (
           <div className="list-books">
          
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
          
            <div className="list-books-content">
                
                {
                this.state.bookShelfs.map((bookShelf) => (
                <div key={bookShelf.id}>
              <Shelf bookShelfs={this.state.bookShelfs} />
                </div>
                ))
                }
            
                
        
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
      
          </div>
    </div>
        )
    }
}

export default ListBooks