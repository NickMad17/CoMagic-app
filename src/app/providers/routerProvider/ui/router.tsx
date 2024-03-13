import {createHashRouter} from "react-router-dom";
import {AuthPage, HomePage, MessengerPage} from "@/pages";
import {Paths} from "../types";
import ProtectedRoute from "@/app/providers/routerProvider/ui/ProtectedRoute.tsx";

export const router = createHashRouter([
    {
        path: Paths.HOME,
        element: (
            <ProtectedRoute>
                <HomePage/>
            </ProtectedRoute>
        )
    },
    {
        path: Paths.MESSENGER,
        element: (
            <ProtectedRoute>
                <MessengerPage/>
            </ProtectedRoute>
        )
    },
    {
        path: Paths.PROFILE,
        element: (
            <ProtectedRoute>
                <MessengerPage/>
            </ProtectedRoute>
        )
    },
    {
        path: Paths.AUTH,
        element: <AuthPage/>
    },
    {
        path: Paths.ERROR,
        element: <p>Error</p>
    }
])
