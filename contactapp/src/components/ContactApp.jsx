import React, { Component } from 'react'
import ContactList from './ContactList';
import Axios from 'axios';
import ContactDetails from './ContactDetails';

class ContactApp extends Component {

    constructor(props){
        super(props);
        this.state={
            users:[],
            selectedUserDetails: {},
        }
    }

    selectedUser = (user) => {
        console.log("Child to Parent", user.name.last);
        this.setState({ selectedUserDetails: user });
      };

    componentDidMount(){
        Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist').then((res)=>{this.setState({users:res.data});
        console.log(this.state.users);
    })
    .catch()
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <ContactList users={this.state.users} 
                             selectedUser={this.selectedUser}
                            />
                            
                        </div>

                        <div className="col-md-4">
                            <ContactDetails details={this.state.selectedUserDetails}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ContactApp
