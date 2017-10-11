
import React, {Component} from 'react';



// class App extends Component{
//     render(){
//         return <h1>Hi there my name is  {this.props.name} and i love { this.props.action}</h1>;
//     }
// }

let CONTACTS = [
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

class Contact extends Component{
    render(){
        return(
            <li>
                <img src={this.props.image} width="60px" height="60px" />
                <div>{this.props.name}</div>
                <div>{this.props.phoneNumber}</div>
            </li>
        );
    }
}

class ContactsList extends Component{
    render(){
        return(
            <div>
                <ul>
                    {
                        CONTACTS.map(function(el){
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
        )
    }
}




// export default App;
export default ContactsList;