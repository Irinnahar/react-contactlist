import React ,  {Component } from 'react'
import Contact from '../Contact/Contact'

class Contacts extends Component{

    render(){
        if(this.props.contacts.length == 0 ){
            return <h2>No Contact List</h2>
        }
        return(
            <ul className='list-group'>
                {this.props.contacts.map( contact => {
                    return <Contact 
                        key = {contact.id}
                        favoriteHandler = {this.props.favoriteHandler}
                        deleteContact = {this.props.deleteContact}
                        contact = {contact} 
                        >
                    </Contact>
                })}

            </ul>
        )
    }
}

export default Contacts;