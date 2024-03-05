import cn from 'classnames'
import cls from './Header.module.scss'
import {useTheme} from "@/app/providers/themeProvider";
import {Theme} from "@/app/providers/themeProvider/lib/ThemeContext.ts";
import {Link,} from "react-router-dom";
import {Paths} from "@/app/providers/routerProvider";
import {Button, ThemeButton} from "@/shared";

export const Header = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={cn(cls.header)}>
            <Button theme={ThemeButton.REVERSE} onClick={toggleTheme}
            >{theme == Theme.DARK ? "Темная" : "Светлая"}</Button>
            <nav className={cls.nav}>
                <Link className={cls.nav__link} to={Paths.HOME}>
                    Home
                </Link>
                <Link className={cls.nav__link} to={Paths.FORM}>
                    Form
                </Link>
            </nav>
        </div>
    );
};

