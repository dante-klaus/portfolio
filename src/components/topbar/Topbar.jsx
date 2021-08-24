import React from 'react'
import './topbar.scss'
import {Person, Mail, LinkedIn, GitHub, AssignmentInd} from "@material-ui/icons";

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
                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/dante-klaus/">
                            <LinkedIn style={{ fontSize: 40 }} className="icon" color="primary"/>
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://github.com/dante-klaus">
                            <GitHub style={{ fontSize: 40 }} fontSize="large" className="icon" color="primary"/>
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://docs.google.com/document/u/1/d/e/2PACX-1vR-A1wo7jZ5sINmSG8ei4YykjXDOjxiZi2EE2VpAJRPqUfQ0E9jGZ94KSQ0iXrVV063hxd3VktLdXbS/pub">
                            <AssignmentInd style={{ fontSize: 40 }} fontSize="large" className="icon" color="primary"/>
                        </a>
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
