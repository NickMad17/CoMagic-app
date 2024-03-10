import {Content} from "antd/es/layout/layout";
import {Layout, Menu} from "antd";
import Sider from "antd/es/layout/Sider";
import {ReactNode, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Paths} from "@/app/providers/routerProvider";
import {HeaderComponent} from "@/widget/Header";

interface Props {
    children: ReactNode
}

export function AppLayout({children}: Props) {
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);


    return (
        <Layout>
            <HeaderComponent/>
            <Layout>
                <Sider theme='light' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <Menu items={[
                        {
                            label: 'Home',
                            key: 'Home',
                            onClick: () => {
                                navigate(Paths.HOME)
                            }
                        },
                        {
                            label: 'MessengerPage',
                            key: 'MessengerPage',
                            onClick: () => {
                                navigate(Paths.MESSENGER)
                            }
                        },
                        {
                            label: 'People',
                            key: 'People'
                        },
                        {
                            label: 'Friends',
                            key: 'Friends'
                        }
                    ]}>
                    </Menu>
                </Sider>
                <Content>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}

