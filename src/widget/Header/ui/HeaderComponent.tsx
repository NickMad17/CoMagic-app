import {Button} from "antd";
import {Header} from "antd/es/layout/layout";
import supabase from "@/app/config/supabase.ts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {Paths} from "@/app/providers/routerProvider";
import {useAuth} from "@/app/providers/AuthProvider";

const HeaderComponent = observer(() => {
    const navigate = useNavigate()
    const auth = useAuth()


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
        <Header className="bg-white flex justify-end items-center">
            <Button size='large' onClick={logOut}>Log Out</Button>
        </Header>
    );
});

export default HeaderComponent;
