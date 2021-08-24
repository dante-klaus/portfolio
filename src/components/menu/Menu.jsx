import React from 'react'
import './menu.scss'

export default function Menu({ openMenu, setOpenMenu }) {
    return (
        <div className={"menu "+(openMenu && "active") }>
            <ul>
                <li onClick={()=> setOpenMenu(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=> setOpenMenu(false)}>
                    <a href="#portfolio">Projects</a>
                </li>
                <li onClick={()=> setOpenMenu(false)}>
                    <a href="#contact">Contact</a>
                </li>
                <li onClick={()=> setOpenMenu(false)}>
                    <a href="https://docs.google.com/document/u/1/d/e/2PACX-1vR-A1wo7jZ5sINmSG8ei4YykjXDOjxiZi2EE2VpAJRPqUfQ0E9jGZ94KSQ0iXrVV063hxd3VktLdXbS/pub">Resume</a>
                </li>
            </ul>
        </div>
    )
}
