import {createBrowserRouter} from "react-router-dom";
import {Paths} from "../types";
import {FormPage, HomePage} from "@/pages";

export const router = createBrowserRouter([
    {
        path: Paths.HOME,
        element: <HomePage/>
    },
    {
        path: Paths.FORM,
        element: <FormPage/>
    },
])