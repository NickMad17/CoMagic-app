import cn from 'classnames';
import cls from './Form.module.scss'
import {Button, Input, ThemeButton} from "@/shared";
import {ChangeEvent, Dispatch, MouseEvent, SetStateAction} from "react";

interface FormProps {
    className?: string | undefined
    name: string
    date: string
    password: string
    setName: Dispatch<SetStateAction<string>>
    setDate: Dispatch<SetStateAction<string>>
    setPassword: Dispatch<SetStateAction<string>>
    setShowForm: Dispatch<SetStateAction<boolean>>
}

export const Form = ({className, name, setName, date, setDate, setPassword, password, setShowForm}: FormProps) => {


    const inputName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const inputPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const inputDate = (e: ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value)
    }

    const submit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setShowForm(prevState => !prevState)
    }
    return (
        <form className={cn(cls.Form, {}, [className])}>
            <h2 className={cls.title}>Заполните форму</h2>
            <p className={cls.subtitle}>Введите дату</p>
            <Input className={cls.date} defaultValue={date} type='date' onInput={inputDate}/>
            <p className={cls.subtitle}>Введите имя</p>
            <Input onInput={inputName}/>
            <p className={cls.subtitle}>Введите пароль</p>
            <Input type='password' onInput={inputPassword}/>
            <Button
                className={cls.btn}
                theme={(name === "" || password === "" || date === "")
                    ? ThemeButton.NOT_ACTIVE : undefined
                }
                onClick={submit}
            >
                Отправить
            </Button>
        </form>
    );
};
