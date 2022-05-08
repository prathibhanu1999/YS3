import React from 'react'
import './adminNav.css'
import {navBarData} from './navBarData'

function adminNav() {
    return (
        <div className="Sidebar">
            <div className="title">
            <a class="navbar-brand text-center"  href="/" ><h2 style={{fontWeight:'900', color:'black'}} ><span>Dream</span><span style={{fontStyle:'italic', fontWeight:'normal'}}>Path</span></h2></a>
            </div>
            <ul className="SidebarList">
                {navBarData.map((val, key)=> {
                    return (
                        <li key={key}
                        className="row"
                        onClick={()=>{
                            window.location.pathname = val.link;
                            }}>
                            {/* <div>{val.icon}</div>{" "} */}
                            <div id="title">
                                {val.title}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default adminNav
