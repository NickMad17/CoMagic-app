import UsersStore from "@/widget/UsrsList/store/UsersStore.ts";
import { Avatar, List } from "antd";
import { Loader } from "@/shared";

const Messenger = () => {
  return (
    <>
      {UsersStore.users && !UsersStore.loading && (
        <List
          itemLayout="horizontal"
          dataSource={UsersStore.users}
          renderItem={(user, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                  />
                }
                title={
                  <p>
                    {user.last_name} {user.first_name}
                  </p>
                }
                description={user.status}
              />
            </List.Item>
          )}
        />
      )}
      {UsersStore.error && <p>{UsersStore.error}</p>}
      {UsersStore.loading && <Loader />}
    </>
  );
};

export default Messenger;
