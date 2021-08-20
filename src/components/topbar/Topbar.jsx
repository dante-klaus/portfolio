import React from 'react'
import './topbar.scss'
import {Person, Mail} from "@material-ui/icons";

export default function topbar({openMenu, setOpenMenu}) {
    return (
        // if menu is open, set to active
        <div className={"topbar " + (openMenu && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Dante Klaus.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>210 739 9064</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>danteklausdev@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=> setOpenMenu(!openMenu)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
