import {AppLayout} from "@/shared";
import {NewMessage} from "@/features/NewMessage";
import {List} from "antd";


const MessengerPage = () => {


    return (
        <AppLayout>
            <NewMessage/>
            <List/>
        </AppLayout>
    );
};

export default MessengerPage




