import '@/app/styles/index.scss'
import cn from 'classnames'
import {useTheme} from '@/app/providers/themeProvider';
import {router} from "@/app/providers/routerProvider";
import {RouterProvider} from "react-router-dom";

const App = () => {
    const {theme} = useTheme()
    return (
        <div className={cn('app', theme)}>
            <RouterProvider router={router}/>
        </div>
    );
};

export default App;