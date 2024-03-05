import cn from 'classnames'
import cls from './HomePage.module.scss'
import {AppLayout} from "@/components/AppLayout/AppLayout.tsx";
export const HomePage = () => {
    return (
        <div className={cn(cls.home)}>
            <AppLayout>
                Home
            </AppLayout>
        </div>
    );
};

