import {createBrowserRouter} from "react-router-dom";
import {Paths} from "../types";
import {HomePage} from "@/pages";
import Messenger from "@/pages/Messenger/MessengerPage.tsx";

export const router = createBrowserRouter([
    {
        path: Paths.HOME,
        element: <HomePage/>
    },
    {
        path: Paths.MESSENGER,
        element: <Messenger/>
    },
])
