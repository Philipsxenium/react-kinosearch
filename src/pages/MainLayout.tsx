import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import {useLocation} from "react-router-dom";
import {useGetConfigurationQuery, useGetGenreQuery} from "../Store/tmdbService/tmdb.api";
import ModalVideo from "../components/ModalVideo";



const MainLayout:React.FC = () => {
    useGetConfigurationQuery();
    useGetGenreQuery();

    const {pathname} = useLocation();

    return (
        <div className='wrapper'>
            <Navbar/>
            <Header pathname={pathname}/>
            <div className='frameworks'>
                <Outlet/>
            </div>

            <a href="#" className='back-to-top show'>
                <i className='fa fa-chevron-up'></i>
                {/*opacity: 0;*/}
            </a>
            <Footer/>
            <ModalVideo/>
        </div>
    );
};

export default MainLayout;