import {Content} from "antd/es/layout/layout";
import {Layout} from "antd";
import {ReactNode} from "react";
import {SideBar} from "@/widget/SideBar";
import {ContentLayout} from "@/shared";

interface Props {
    children: ReactNode
}

export const AppLayout = ({children}: Props) => {


    return (
        <Layout className='h-[100vh]'>
            <SideBar/>
            <Content>
                <ContentLayout>
                    {children}
                </ContentLayout>
            </Content>
        </Layout>
    );
}

