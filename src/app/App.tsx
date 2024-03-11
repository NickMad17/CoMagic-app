import '@/app/styles/index.scss'
import {router} from "@/app/providers/routerProvider";
import {RouterProvider} from "react-router-dom";
import {Suspense} from "react";
import {Loader} from "@/shared";
import {AuthProvider} from "@/app/providers/AuthProvider";

const App = () => {

    return (
        <div className={'app'}>
            <Suspense fallback={<Loader/>}>
                <AuthProvider>
                    <RouterProvider router={router}/>
                </AuthProvider>
            </Suspense>
        </div>
    );
};

export default App;
