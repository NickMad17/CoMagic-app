import React, {useState} from 'react';
import {Button, Checkbox, Form, type FormProps, Input, message} from 'antd';
import {LockFilled, UserAddOutlined} from "@ant-design/icons";
import Link from "antd/es/typography/Link";
import {useNavigate} from "react-router-dom";
import {Paths} from "@/app/providers/routerProvider";
import {login, registration, User} from "@/features/User";


interface Props {
    className: string
}

type FieldType = {
    email: string;
    password: string;
    remember: string;
    'confirm password'?: string;
};

export const AuthForm: React.FC<Props> = ({className}) => {
    const navigate = useNavigate()
    const [messageApi, contextHolder] = message.useMessage();
    const [regMode, setRegMode] = useState<boolean>(false)

    const success = (text: string = "аунтификация пройдна") => {
        messageApi.open({
            type: 'success',
            content: text,
        });
    };

    const error = (text:string='Ошибка формы') => {
        messageApi.open({
            type: 'error',
            content: text,
        });
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
        console.log('Failed:', errorInfo);
        error('Пожалуйста, исправьте ошибки ')
    };

    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        console.log('Success:', values);
        if (values.remember) {
            if (regMode){
                console.log("registration")
                registration(values.email, values.password).then(() => {
                    console.log(User)
                    if (User.error) {
                        error("Такой пользователь уже существует")
                    } else {
                        success()
                        setTimeout(() => {
                            navigate(Paths.CONFIRM_EMAIL)
                        },800)
                    }
                })

            } else {
                login(values.email, values.password).then(() => {
                    console.log(User)
                    if (User.error) {
                        error("Неверная почта или пароль")
                    } else {
                        success()
                        setTimeout(() => {
                            navigate(Paths.HOME)
                        },800)
                    }
                })
            }
            return
        }
        error()
    };

    return (<>
            {contextHolder}
            <Form
                className={className}
                name="basic"
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    hasFeedback
                    className='pb-3'
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста введите почту!'
                        }, {
                            type: 'email',
                            message: 'Пожалуйста укажите действительную почту'
                        }]}

                >
                    <Input placeholder='email' prefix={<UserAddOutlined/>}/>
                </Form.Item>

                <Form.Item<FieldType>
                    hasFeedback
                    className='pb-3'
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста введите пароль!'
                        },
                        {
                            min: 6,
                            message: "Минимальное количество символов 6"
                        }
                    ]}
                >
                    <Input.Password placeholder='password' prefix={<LockFilled/>}/>
                </Form.Item>

                {regMode && (
                    <Form.Item<FieldType>
                        hasFeedback
                        className='pb-3'
                        name="confirm password"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста введите пароль!'
                            },
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') == value) {
                                        return Promise.resolve()
                                    }
                                    return Promise.reject(
                                        'Пароли не совпадают'
                                    )
                                }
                            })
                        ]}
                    >
                        <Input.Password placeholder='password' prefix={<LockFilled/>}/>
                    </Form.Item>
                )}

                <Form.Item<FieldType>
                    name="remember"
                    valuePropName="checked"
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                        <Link type='secondary' onClick={() => setRegMode(!regMode)}>
                        {regMode ? 'Еще не зарегестрированны ?' : 'Хотите войти ?'}
                    </Link>
                </Form.Item>

                <Form.Item>
                    <Button block className='bg-primary grow-1 ' size='large' type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
};

