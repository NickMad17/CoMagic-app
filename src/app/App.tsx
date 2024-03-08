import '@/app/styles/index.scss'
import {router} from "@/app/providers/routerProvider";
import {RouterProvider} from "react-router-dom";

const App = () => {
    return (
        <div className={'app'}>
            <RouterProvider router={router}/>
        </div>
    );
};

export default App;
