import {Button} from "antd";
import {Header} from "antd/es/layout/layout";
import supabase from "@/app/config/supabase.ts";
import {observer} from "mobx-react-lite";

const HeaderComponent = observer(() => {
    const signUp = async () => {
        const {data, error} = await supabase.auth.signUp({
            email: 'vlad030911@gmail.com',
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
        <Header className="bg-white flex justify-between items-center">
            <Button size='large' className='bg-primary' type='primary' onClick={login}>Login</Button>
            <Button size='large' onClick={logOut}>Log Out</Button>
            <Button onClick={signUp}>Sign up</Button>
        </Header>
    );
});

export default HeaderComponent;
