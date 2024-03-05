import cls from './Button.module.scss'
import cn from "classnames";
import {ButtonHTMLAttributes} from "react";

export enum ThemeButton {
    NOT_ACTIVE = 'not-active',
    REVERSE = 'reverse'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string | undefined,
    theme?: ThemeButton
}

export const Button = (props: ButtonProps) => {
    const {
        children,
        className,
        theme,
        ...otherProps
    } = props

    return (
        <button className={cn(cls.Button, {}, [className, theme ? cls[theme] : ''])}
                {...otherProps}
                disabled={theme === ThemeButton.NOT_ACTIVE}
        >
            {children}
        </button>
    );
};

