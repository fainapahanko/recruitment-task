import React from "react";
import { NavLink } from 'react-router-dom';
import logo from '@assets/logo.svg';
import "@components/NavBar.css";


interface SinglePage {
    url: string;
    id: string;
}

interface PagesProps {
    pages: SinglePage[];
}


const NavBar = ({ pages }: PagesProps) => {

    return (
        <header className="header">
            <div className="header_inner">
                <div className="header_left">
                    <NavLink to="/">
                        <img className="header_img" src={logo} alt="My logo" />
                    </NavLink>
                    <nav className="menu">
                        {pages?.filter((page: SinglePage) => page["url"] !== "/").map((page: SinglePage) => {
                            return (
                                <NavLink className="menu_item" key={page["id"]} to={page["url"]}>
                                    {upperString(page["url"].split("/")[1])}
                                </NavLink>
                            )
                        })}
                    </nav>
                </div>
                <button type="button" className="button_pink">Contact us</button>
            </div>
        </header>
    )
}

const upperString = (str: string) => {
    return str.charAt(0).toUpperCase() + str.substring(1)
}


export default NavBar