import cls from './Input.module.scss'
import cn from "classnames";
import {InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string | undefined,
}

export const Input = (props: InputProps) => {
    const {
        className,
        ...otherProps
    } = props

    return (
        <input
            className={cn(cls.Input, {}, [className])}
            {...otherProps}
        />
    );
};

