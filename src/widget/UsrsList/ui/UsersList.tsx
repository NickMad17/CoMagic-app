import {useEffect} from 'react';
import {Avatar, List} from "antd";
import UsersStore from ".././store/UsersStore.ts";
import {getUsersList} from "@/widget/UsrsList/api/usersListApi.ts";
import {observer} from "mobx-react-lite";
import {Loader} from "@/shared";

const UsersList = observer(() => {

    useEffect(() => {
        getUsersList()
    }, []);
    return (
        <>
            {UsersStore.users && !UsersStore.loading && (
                <List
                    itemLayout="horizontal"
                    dataSource={UsersStore.users}
                    renderItem={(user, index) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}/>}
                                title={<p>{user.last_name} {user.first_name}</p>}
                                description={user.status}
                            />
                        </List.Item>
                    )}
                />
            )}
            {UsersStore.error && <p>{UsersStore.error}</p>}
            {UsersStore.loading && <Loader/>}
        </>
    )
})

export default UsersList;
