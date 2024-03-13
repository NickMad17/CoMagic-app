import '@/app/styles/index.scss'
import {router} from "@/app/providers/routerProvider";
import {RouterProvider} from "react-router-dom";
import {Suspense} from "react";
import {AuthProvider} from "@/app/providers/AuthProvider";
import {PageLoader} from "@/shared/ui/Loaders/AppLoader/AppLoader.tsx";

const App = () => {


    return (
        <div className={'app'}>
            <Suspense fallback={<PageLoader/>}>
                <AuthProvider>
                    <RouterProvider router={router}/>
                </AuthProvider>
            </Suspense>
        </div>
    );
};

export default App;
