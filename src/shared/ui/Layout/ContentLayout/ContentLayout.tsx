import {Layout} from "antd";
import {ReactNode} from "react";

interface Props {
    children: ReactNode
}

export const ContentLayout = ({children}: Props) => {


    return (
        <Layout className='scrollbar px-10 h-[100vh] overflow-x-auto'>
            {children}
        </Layout>
    );
}

