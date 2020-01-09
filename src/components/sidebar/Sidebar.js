import React, { Component } from 'react';
import './Sidebar.scss';


export default class Sidebar extends Component {
  render() {
    return (
        <div data-component="sidebar">
            <div className="sidebar">
                <ul className="list-group flex-column d-inline-block py-item first-menu ">
                    <li className="list-group-item pl-3 py-2">
                        <a href="#"><span className="ml-3 box align-middle">Button 1</span></a>
                    </li> 
                                   
                    <li className="list-group-item pl-3 py-2">
                        <a href="#"><span className="ml-3 box align-middle">Button 2</span></a>
                    </li> 
                    
                    <li className="list-group-item pl-3 py-2">
                        <a href="#"><span className="ml-3 box align-middle">Button 3</span></a>
                    </li>
                    
                    
                    <li className="list-group-item pl-3 py-2">
                        <a href="#"><span className="ml-3 box align-middle">Button 4</span></a>
                    </li>
                    
                    <li className="list-group-item pl-3 py-2">
                        <a href="#"><span className="ml-3 box align-middle">Button 5</span></a>
                    </li>
                    
                    <li className="list-group-item pl-3 py-2">
                        <a href="#"><span className="ml-3 box align-middle">Button 6</span></a>
                    </li>                
                </ul>
            </div>
        </div>
    )
  }
}
