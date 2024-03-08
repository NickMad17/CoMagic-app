import {Button} from "antd";
import {Header} from "antd/es/layout/layout";
import supabase from "@/app/config/supabase.ts";

const HeaderComponent = () => {
    const signUp = async () => {
        const {data, error} = await supabase.auth.signUp({
            email: 'Nikson3417@yandex.ru',
            password: '12345671'
        })
        if (data) {
            console.log(data)
        }
        if (error) {
            console.log(error)
        }
    }

    const login = async () => {
        const {data, error} = await supabase.auth.signInWithPassword({
            email: 'Nikson3417@yandex.ru',
            password: '12345671'
        })
        if (data) {
            console.log(data)
        }
        if (error) {
            console.log(error)
        }
    }

    const logOut = async () => {
        const {error} = await supabase.auth.signOut()
        if (error) {
            console.log(error)
        }
    }
    return (
        <Header style={{background: '#fff', display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Button size='large' type='primary' onClick={login}>Login</Button>
            <Button size='large' onClick={logOut}>Log Out</Button>
        </Header>
    );
};

export default HeaderComponent;
