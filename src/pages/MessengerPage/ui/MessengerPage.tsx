import {AppLayout} from "@/shared";
import {NewMessage} from "@/features/NewMessage";
import {UsersList} from "@/widget/UsrsList";


const MessengerPage = () => {


    return (
        <AppLayout>
            <NewMessage/>
            <UsersList/>
        </AppLayout>
    );
};

export default MessengerPage




