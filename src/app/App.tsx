import '@/app/styles/index.scss'
import {router} from "@/app/providers/routerProvider";
import {RouterProvider} from "react-router-dom";
import {Suspense} from "react";
import {Loader} from "@/shared";

const App = () => {
    return (
        <div className={'app'}>
            <Suspense fallback={<Loader/>}>
                <RouterProvider router={router}/>
            </Suspense>
        </div>
    );
};

export default App;
