import {RadiusBottomrightOutlined, UserOutlined,} from '@ant-design/icons';
import {Avatar, Button, notification, Space} from 'antd';


const NewMessage = () => {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = () => {
        api.open({
            icon: <Avatar icon={<UserOutlined/>}/>,
            message: `name`,
            description: 'message',
            placement: "bottomRight",
        });
    };


    return (
        <>
            {contextHolder}
            <Space>
                <Button
                    className='bg-primary'
                    type="primary"
                    onClick={() => openNotification()}
                    icon={<RadiusBottomrightOutlined/>}
                >
                    bottomRight
                </Button>
            </Space>
        </>
    );
};

export default NewMessage;
