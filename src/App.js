import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from '../src/Components/Contacts/Contacts';
import uuid from 'uuid/v1';

class App extends Component {

  state = {
   contacts:  [
      {
        name: 'Irin Nahar',
        addess: 'akjs askdjh adkj',
        phone: '21334953',
        isFavorite: true,
        id: uuid()
      },
      {
        name: 'Hello WOrld',
        addess: 'akjs askdjh adkj',
        phone: '345 6546 457',
        isFavorite: false,
        id: uuid()
      },
      {
        name: 'Samsun Nahar',
        addess: 'akjs askdjh adkj',
        phone: '234 546 68',
        isFavorite: true,
        id: uuid()
      }
    ]
  }
  changeFavoriteHandler = ((contact) => {
    let index = this.state.contacts.findIndex((ct) => {
      return ct.id === contact.id
    })

    let contacts = [...this.state.contacts]
    contacts[index].isFavorite = !contacts[index].isFavorite;

    this.setState({
      contacts
    })
  })

  deleteHandler = ((contact) => {
    let index = this.state.contacts.findIndex((dt) => dt.id === contact.id)


    let contacts = [...this.state.contacts]
    contacts.splice(index, 1)
    this.setState({
      contacts
    })
  })
  render() {
    return (
      <div className="App">
        <div class="container py-5">
          <h1>Contact List</h1>
          <Contacts 
            contacts = {this.state.contacts}
            favoriteHandler = {this.changeFavoriteHandler.bind(this)}
            deleteContact = {this.deleteHandler.bind(this)}
          >
          </Contacts>
        </div>
      </div>
    );
  }
}

export default App;
