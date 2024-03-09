import {useEffect, useState} from "react";
import supabase from "@/app/config/supabase.ts";
import {AppLayout} from "@/shared";
import {Button} from "antd";


const MessengerPage = () => {

    const [name, setName] = useState<string | null>(null)

    useEffect(() => {
        const fetsch = async () => {
            const {data, error} = await supabase
                .from('users')
                .select("*")
            if (data) {
                setName(data[0].first_name)
                console.log(data)
            }
            if (error) {
                console.log(error)
            }
        }
        fetsch()
    }, []);

    const add = async () => {
        const {data, error} = await supabase
            .from('users')
            .insert([
                {
                    user_id: '776c69ba-428d-4145-8492-e385385bf145',
                    age : 20,
                    first_name: 'Down'
                }
            ])
            .select()

        if (data) {
            console.log(data)
        }
        if (error) {
            console.log(error)
        }
    }

    return (
        <AppLayout>
            <div>{name}</div>
            <Button onClick={add}>Добавить данные</Button>
        </AppLayout>
    );
};

export default MessengerPage




