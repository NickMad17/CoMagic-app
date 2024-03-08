import {useEffect, useState} from "react";
import supabase from "@/app/config/supabase.ts";
import {AppLayout} from "@/shared";


const MessengerPage = () => {

    const [name, setName] = useState<string | null>(null)

    useEffect(() => {
        const fetsch = async () => {
            const {data, error} = await supabase
                .from('users_data')
                .select('name')
            if (data) {
                setName(data[0]?.name)
            }
            if (error) {
                console.log(error)
            }
        }
        fetsch()
    }, []);


    return (
        <AppLayout>
            <div>{name}</div>
        </AppLayout>
    );
};

export default MessengerPage




