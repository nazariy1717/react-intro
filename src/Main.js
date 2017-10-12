import React from 'react';

import Header from './Header';


const menu = [
    {
        link: '/articles',
        label: 'Articles'
    },
    {
        link: '/contacts',
        label: 'Contacts'
    },
    {
        link: '/posts',
        label: 'Posts'
    }
];


class Main extends React.Component{
    render(){
        return (
            <div>
                <Header items={menu}/>
            </div>
        )
    }
}


export default Main;