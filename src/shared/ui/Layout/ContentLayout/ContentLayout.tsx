import {Layout} from "antd";
import {ReactNode} from "react";

interface Props {
    children: ReactNode
}

export const ContentLayout = ({children}: Props) => {


    return (
        <Layout className='px-10 h-[100vh]'>
            {children}
        </Layout>
    );
}

