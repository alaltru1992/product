import { Link} from 'react-router-dom'
import {useTheme} from "app/providers/ThemeProvider";
import {AppLink, APP_LINK_THEME} from "shared/AppLink";
import cn from 'classnames';
import classes from './styles.module.scss'


interface NavBarProps{
    className?: string
}
export default ({className}: NavBarProps) =>{
    const {theme, toggleTheme} = useTheme();

    return <div className={cn(classes.nav, {className})}>
        <button onClick={toggleTheme}>TOGGLE</button>
        <div className={classes.nav_links}>
            <AppLink to={'./'} theme={APP_LINK_THEME.SECONDARY}>Main</AppLink>
            <AppLink to={'./about'} theme={APP_LINK_THEME.SECONDARY}>About</AppLink>
        </div>
    </div>
}