import React, { Component } from 'react'

class Contact extends Component {

    render(){

        let avatarStyle= {
            width: '50px',
            height:'50px',
            backgroundColor: '#cc2e2ecc',
            fontSize: '25px',
            borderRadius: '50px',
            textAlign: 'center',
            lineHeight: '50px',
            color: 'white',
            fontWeight: 'bold',
            marginRight: '20px',
        }

        let iconstyle = {
            cursor: 'pointer'
        }

        return (
            <li class="list-group-item d-flex">
                <div style= {avatarStyle}> {this.props.contact.name.charAt(0)} </div>
                <div className="mx-3">
                
                    <h5>{this.props.contact.name} </h5>
                    <p> {this.props.contact.phone} </p>
                </div>
                {/* favorite */}
                <div className="ml-auto d-flex" >
                    <div  className="mx-2"  style = {iconstyle} onClick = {() => this.props.favoriteHandler(this.props.contact)}>
                        {this.props.contact.isFavorite ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
                    </div>
                    {/* delete */}
                    <div className="mx-2" style = {iconstyle} onClick = {() => {this.props.deleteContact(this.props.contact)} }>
                        <i class="fas fa-trash-alt"></i>
                    </div>
                    {/* edit */}
                    <div className="mx-2" style = {iconstyle}>
                        <i class="fas fa-edit"></i>
                    </div>
                </div>
               
            </li>

        )
    }
}

export default Contact;