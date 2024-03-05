import cn from 'classnames'
import cls from './FormPage.module.scss'
import {AppLayout} from "@/components/AppLayout/AppLayout.tsx";

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

export const FormPage = () => {
    return (
        <AppLayout>
            <div className={cn(cls.form)}>
               home
            </div>
        </AppLayout>
    );
};





