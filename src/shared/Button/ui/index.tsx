import {FC} from 'react';
import {ButtonHTMLAttributes} from "react";
import cn from "classnames";
import classes from './styles.module.scss'

export enum ButtonTheme{
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
    const {className, onClick, theme, children, ...otherProps} = props;
    return (
        <button className={cn(classes.Button, classes[theme], className)} {...otherProps} onClick={onClick}>
            {children}
        </button>
    )
}