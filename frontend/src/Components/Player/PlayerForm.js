import React from 'react';
import axios from 'axios';

// creates a class component
class PlayerForm extends React.Component {
    constructor(props) {
        super(props);

        this.fistName = null;
        this.firstNameRef = element => {
            this.firstName = element;
        }

        this.lastName = null;
        this.lastNameRef = element => {
            this.lastName = element;
        }

        this.email = null;
        this.emailRef = element => {
            this.email = element;
        }

        this.phone = null;
        this.phoneRef = element => {
            this.phone = element;
        }
    }
    submitPlayer(event) {
        event.preventDefault();
        axios.post('http://localhost:4000/players', {
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            phone: this.phone.value,
            email: this.email.value,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });

    }
    state = {  }
    render() { 
        return ( 
            <div className="row">
            <form className="col s12" onSubmit={this.submitPlayer.bind(this)}> 
            {/* we bind so that we can find and use the function */}
              <div className="row">
                <div className="input-field col s6">
                  <input id="firstName" ref={this.firstNameRef} type="text"/>
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                  <input id="lastName" ref={this.lastNameRef} type="text"/>
                  <label htmlFor="last_name">Last Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                    <input id="phone" ref={this.phoneRef} type="number"/>
                    <label htmlFor="phone">Phone</label>
                </div>
                <div className="input-field col s12">
                  <input id="email" ref={this.emailRef} type="email"/>
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <button className='btn waves-effect waves-light' type="submit" name="action">Add player</button>
            </form>
          </div>
         );
    }
}
 
export default PlayerForm;