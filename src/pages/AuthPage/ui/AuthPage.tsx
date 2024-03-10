import {Layout} from "antd";
import {AuthForm} from "@/widget/AuthForm";
import {UserOutlined} from "@ant-design/icons";

function AuthPage() {
    return (
        <Layout className=' xl:px-[25vw]  md:px-[200px] sm:px-[10vh] px-[5vh]'>
            <div className='flex justify-center'>
                <div
                    className='bg-primary text-white rounded-[50%] w-[100px] h-[100px] flex justify-center items-center text-[50px] mt-6'>
                    <UserOutlined />
                </div>
            </div>

            <h2 className='text-center text-[25px] font-medium mt-[6vh]'>Login to Acquaintance</h2>
            <AuthForm className='mt-[36px]'/>
        </Layout>
    );
}

export default AuthPage;
