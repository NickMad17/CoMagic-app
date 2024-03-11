import {useEffect, useState} from "react";
import supabase from "@/app/config/supabase.ts";
import {AppLayout} from "@/shared";
import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";


const MessengerPage = () => {



    return (
        <AppLayout>
            <Button type='dashed'>Добавить данные</Button>
        </AppLayout>
    );
};

export default MessengerPage




