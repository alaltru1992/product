import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from 'app/providers/router'
import {NavBar} from 'widgets/NavBar'
import './styles/index.scss';

export default () =>{
     const {theme, toggleTheme} = useTheme();



    return <div className={`app ${theme}`}>
       <NavBar />
       <AppRouter />
    </div>
}