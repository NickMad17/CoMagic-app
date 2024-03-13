import {Menu} from "antd";
import {Paths} from "@/app/providers/routerProvider";
import {AliwangwangFilled, MessageOutlined, SettingFilled, TeamOutlined, UserOutlined} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "@/app/providers/AuthProvider";
import supabase from "@/app/config/supabase.ts";

const SideBar = () => {
    const navigate = useNavigate()
    const location = useLocation().pathname
    const auth = useAuth()

    const setLocation = (path: Paths) => {
        if (location === path)
            return 'bg-primary'
    }

    const logOut = async () => {
        const {error} = await supabase.auth.signOut()
        if (error) {
            console.log(error)
        }
        localStorage.removeItem('token');
        auth?.setSession(null);
        navigate(Paths.AUTH);
    }

    return (
        <Sider className='z-20' theme='light' style={{background: 'rgb(15,23,35)'}} collapsed={true}>
            <div className='flex flex-col justify-between h-[100%]'>
                <div>
                    <Menu className='pt-2' items={[
                        {
                            label: 'Search for new acquaintances',
                            className: setLocation(Paths.HOME),
                            icon: <AliwangwangFilled/>,
                            key: 'Home',
                            onClick: () => {
                                navigate(Paths.HOME)
                            }
                        }
                    ]}/>
                    <Menu className='pb-10' items={[

                        {
                            label: 'Messenger',
                            className: setLocation(Paths.MESSENGER),
                            icon: <MessageOutlined/>,
                            key: 'Messenger',
                            onClick: () => {
                                navigate(Paths.MESSENGER)
                            }
                        },
                        {
                            label: 'Friends',
                            icon: <TeamOutlined/>,
                            key: 'People'
                        },
                        {
                            label: 'Settings',
                            icon: <SettingFilled/>,
                            key: 'Settings',
                            onClick: () => logOut()
                        }
                    ]}/>
                </div>
                <Menu items={[
                    {
                        label: 'Profile',
                        className: setLocation(Paths.PROFILE),
                        icon: <UserOutlined/>,
                        key: 'Home',
                        onClick: () => {
                            navigate(Paths.PROFILE)
                        }
                    },
                ]}/>
            </div>
        </Sider>
    );
};

export default SideBar;
