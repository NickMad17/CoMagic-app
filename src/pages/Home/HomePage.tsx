import cn from 'classnames'
import cls from './HomePage.module.scss'
import {AppLayout} from "@/components/AppLayout/AppLayout.tsx";
import {Preview} from "@/shared/ui/Preview/Preview.tsx";

export const HomePage = () => {
    return (
        <AppLayout>
            <div className={cn(cls.home)}>
                <div className={cls.box}>
                    <Preview/>
                </div>
                <h1 className={cls.title}>Home Page</h1>
                <p className={cls.text}>Перейдите на страницу заполнения формы</p>
            </div>
        </AppLayout>
    );
};

