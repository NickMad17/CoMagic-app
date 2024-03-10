import {createBrowserRouter} from "react-router-dom";
import {AuthPage, HomePage, MessengerPage, СonfirmEmailPage} from "@/pages";
import {Paths} from "../types";

export const router = createBrowserRouter([
    {
        path: Paths.HOME,
        element: <HomePage/>
    },
    {
        path: Paths.MESSENGER,
        element: <MessengerPage/>
    },
    {
        path: Paths.AUTH,
        element: <AuthPage/>
    },
    {
        path: Paths.CONFIRM_EMAIL,
        element: <СonfirmEmailPage/>
    },
])
