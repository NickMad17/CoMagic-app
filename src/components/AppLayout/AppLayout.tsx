import {Header} from "@/components/Header/Header.tsx";
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
}
export const AppLayout = ({children}: Props) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
};

