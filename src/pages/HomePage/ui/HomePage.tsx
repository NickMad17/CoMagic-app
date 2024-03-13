import {AppLayout} from "@/shared";
import {UsersList} from "@/widget/UsrsList";
import {Image} from "antd";

const HomePage = () => {
    return (
        <AppLayout>
            <UsersList/>
            <Image.PreviewGroup>

            </Image.PreviewGroup>

        </AppLayout>
    );
};

export default HomePage
