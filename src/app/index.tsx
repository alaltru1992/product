import {Suspense} from "react";
import {Route, Routes, Link} from 'react-router-dom'
import {AboutPageLazy} from "pages/AboutPageLazy";
import {MainPageLazy} from "pages/MainPageLazy";
import {useTheme} from "themes/useTheme";
import './styles/index.scss';

export default () =>{
     const {theme, toggleTheme} = useTheme();



    return <div className={`app ${theme}`}>
        <button onClick={toggleTheme}>TOGGLE</button>
        <Link to={'./'}>Main</Link>
        <Link to={'./about'}>About</Link>
        <Suspense fallback='Loading...'>
            <Routes>
                <Route path={'/'} element={<MainPageLazy />}/>
                <Route path={'/about'} element={<AboutPageLazy />}/>
            </Routes>
        </Suspense>
    </div>
}