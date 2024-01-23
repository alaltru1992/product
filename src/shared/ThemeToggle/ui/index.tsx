import {FC} from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {Button, ButtonTheme} from "shared/Button";
import DarkImage from '../../assets/img/themeDark.svg'
import LightImage from '../../assets/img/themeLight.svg'

interface ThemeToggleProps {
    className?: string,
}

export const ThemeToggler: FC<ThemeToggleProps> = (props) => {
    const {theme, toggleTheme} = useTheme();
    return (
        <Button theme={ButtonTheme.CLEAR}  onClick={toggleTheme}>
            {theme === 'dark' ? <DarkImage />: <LightImage />}
        </Button>
    )
}