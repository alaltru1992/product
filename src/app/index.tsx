import {Suspense} from "react";
import {Route, Routes, Link} from 'react-router-dom'
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from 'app/providers/router'
import './styles/index.scss';

export default () =>{
     const {theme, toggleTheme} = useTheme();



    return <div className={`app ${theme}`}>
        <button onClick={toggleTheme}>TOGGLE</button>
        <Link to={'./'}>Main</Link>
        <Link to={'./about'}>About</Link>
        <AppRouter />
    </div>
}