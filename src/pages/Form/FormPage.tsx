import cn from 'classnames'
import cls from './FormPage.module.scss'
import {AppLayout} from "@/components/AppLayout/AppLayout.tsx";
import {Form} from "@/components/Form/Form.tsx";
import {ChangeEvent, useState} from "react";
import {Button, Input, ThemeButton} from "@/shared";


export const FormPage = () => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [date, setDate] = useState<string>("2011-09-29");
    const [showForm, setShowForm] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const inputPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    return (
        <AppLayout>
            <div className={cn([cls.FormPage, 'center'])}>
                {showForm ?
                    (<>
                        <h1 className={cls.title}>Сегодня <span style={{color: 'yellow'}}>{date}</span></h1>
                        <p className={cls.title}>Привет, {name}. Думаю это отличное начало)</p>
                        <Button theme={showPassword ? ThemeButton.REVERSE : undefined} onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Скрыть пароль" : "Показать пароль"}</Button>
                        {showPassword && <Input onInput={inputPassword} style={{width: '300px'}} className={cls.password} value={password}/>}
                    </>)
                    :
                    (
                        <Form name={name} date={date} password={password} setDate={setDate} setName={setName}
                              setPassword={setPassword} setShowForm={setShowForm}/>

                    )
                }
            </div>
        </AppLayout>
    );
};





