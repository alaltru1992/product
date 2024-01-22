import {FC} from 'react';
import { Link, LinkProps} from 'react-router-dom'
import cn from 'classnames';
import classes from './styles.module.scss'


export const enum APP_LINK_THEME {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
    className?: string,
    to: string,
    theme?: APP_LINK_THEME,

}
export const AppLink: FC<AppLinkProps> = (props) =>{
   const {className, to, theme = APP_LINK_THEME.PRIMARY, children, ...otherProps} = props;

    return <Link className={cn(classes.appLink, {[classes[`appLink_${theme}`]]: true})} to={to} {...otherProps}>
            {children}
        </Link>
}