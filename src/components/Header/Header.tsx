import cn from 'classnames'
import cls from './Header.module.scss'
import {useTheme} from "@/app/providers/themeProvider";
import {Theme} from "@/app/providers/themeProvider/lib/ThemeContext.ts";
import {Button} from "antd";
import {NavLink} from "react-router-dom";
import {Paths} from "@/app/providers/routerProvider";

export const Header = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={cn(cls.header)}>
            <Button className={cls.themeSwitcher} onClick={toggleTheme}
                    type='primary'>{theme == Theme.DARK ? "Темная" : "Светлая"}</Button>
            <nav className={cls.nav}>
                <NavLink to={Paths.HOME}>
                    <Button type='link' className={cls.nav__link} >Home</Button>
                </NavLink>
                <NavLink to={Paths.FORM}>
                    <Button type='link' className={cls.nav__link}>Form</Button>
                </NavLink>
            </nav>
        </div>
    );
};

