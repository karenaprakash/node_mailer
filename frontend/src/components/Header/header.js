   /**
    * Header.js : header component
    *  
    */
import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import  { Link } from 'react-router-dom';


class Header extends Component {


    render() {
        return (
            <header>
             <div className="top">
                    <h3>Node Mailer</h3>
                </div>
            </header>
         )
    }
}

export default  Header;
        