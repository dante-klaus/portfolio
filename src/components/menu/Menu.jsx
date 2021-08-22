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
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=> setOpenMenu(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={()=> setOpenMenu(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={()=> setOpenMenu(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
