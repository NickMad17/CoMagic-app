import {useEffect} from "react";
import {getUsersList} from "@/widget/UsrsList/api/usersListApi.ts";
import {observer} from "mobx-react-lite";
import UsersStore from '.././store/UsersStore.ts'
import {Table} from "antd";

const UsersList = observer(() => {
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
    ];
    useEffect(() => {
        getUsersList();
    }, []);
    return (
        <>
            {
                UsersStore.users && !UsersStore.loading && (
                    <Table columns={columns} dataSource={UsersStore.users}/>
                )
            }
        </>
    )
});

export default UsersList;
