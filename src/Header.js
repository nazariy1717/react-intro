import React from 'react';


class Header extends React.Component {

    render(){
        console.log('items', this.props.items);
        return(
            <ul>
                {this.props.items.map((item, index)=>
                    <li>
                        <a href={item.link} key={index}>{item.label}</a>
                    </li>
                )}
            </ul>
        )

    }
}

export default Header;