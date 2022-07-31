import InfoBtn from "./ui/InfoBth";
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
                    <NavLink to="/recruitment-task">
                        <img className="header_img" src={logo} alt="My logo" />
                    </NavLink>
                    <nav className="menu">
                        {pages?.filter((page: SinglePage) => page["url"] !== "/").map((page: SinglePage) => {
                            return (
                                <NavLink className="menu_item" key={page["id"]} to={"/recruitment-task" + page["url"]}>
                                    {upperString(page["url"].split("/")[1])}
                                </NavLink>
                            )
                        })}
                    </nav>
                </div>
                <InfoBtn type="button" text="Contact us" />
            </div>
        </header>
    )
}

const upperString = (str: string) => {
    return str.charAt(0).toUpperCase() + str.substring(1)
}


export default NavBar