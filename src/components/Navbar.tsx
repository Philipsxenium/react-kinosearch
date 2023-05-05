import React, {RefObject, useState} from 'react';
import logoIcon from '../public/SVG/Paulo F  I  L  M  S.svg'
import {Link} from "react-router-dom";
import {navbarMenu} from "../mock/statick";

export type NavbarType = {
    navbarRef: RefObject<HTMLDivElement>
}

const Navbar: React.FC<NavbarType> = ({navbarRef}) => {
    const [isActive, setIsActive] = useState(0)
    const onChangeMenu = (idx: number) => {
        setIsActive(idx)
    }
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='tel'>
                    <Link to="tel: +66 65 335 62 63">
                        <i className='fa fa-phone'></i>
                        +66 65 335 62 63
                    </Link>
                </div>
            </div>
            <div className='container'>
                <div ref={navbarRef}
                    className='navbar-main'>
                    <div className='navbar-logo'>
                        <Link to="/">
                            <img src={logoIcon} alt="logo"/>
                        </Link>
                        {/*<button>burger</button>*/}
                    </div>
                    <div className='navbar-panel'>
                        <ul>
                            {navbarMenu.map((obj, index) => (
                                <li
                                    key={obj.title}
                                    onClick={() => onChangeMenu(index)}
                                    className={isActive === index ? 'active' : ''}>
                                    <Link to={obj.url}>{obj.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;