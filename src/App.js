import React from 'react';

import DropDown from './dropdown';

// first app
// class App extends React.Component{
//     render(){
//         return <h1>Hi there my name is  {this.props.name} and i love { this.props.action}</h1>;
//     }
// }


// Contacts search dropdown
var ContactsArray = [
    {
        id: 1,
        name: 'Darth Vader',
        phoneNumber: '+250966666666',
        image: 'img/darth.gif'
    }, {
        id: 2,
        name: 'Princess Leia',
        phoneNumber: '+250966344466',
        image: 'img/leia.gif'
    }, {
        id: 3,
        name: 'Luke Skywalker',
        phoneNumber: '+250976654433',
        image: 'img/luke.gif'
    }, {
        id: 4,
        name: 'Chewbacca',
        phoneNumber: '+250456784935',
        image: 'img/chewbacca.gif'
    }
];

class Contact extends React.Component {
    render() {
        return (
            <li className="contact">
                <img className="contact-image" src={this.props.image} width="60px" height="60px" alt=""/>
                <div className="contact-info">
                    <div className="contact-name">{this.props.name}</div>
                    <div className="contact-number">{this.props.phoneNumber}</div>
                </div>
            </li>
        );
    }
}


class ContactsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedContacts: ContactsArray
        };
        this.handleSearch = this.handleSearch.bind(this);
    }


    handleSearch(event) {
        let searchQuery = event.target.value.toLowerCase();
        let displayedContacts = ContactsArray.filter(function (el) {
            let searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });
        this.setState({
            displayedContacts: displayedContacts
        });

    }

    render() {
        return (
            <div className="contacts">
                <input type="text" placeholder="Search..." className="search-field" onChange={this.handleSearch}/>
                <ul className="contacts-list">
                    {
                        this.state.displayedContacts.map(function (el) {
                            return <Contact
                                key={el.id}
                                name={el.name}
                                phoneNumber={el.phoneNumber}
                                image={el.image}
                            />;
                        })
                    }
                </ul>
            </div>
        );
    }
}



// dropdown

class App extends React.Component{
    render(){
        return (
            <div>
                <DropDown />
            </div>
        )
    }
}


export default App;