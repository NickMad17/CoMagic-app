import {ReactNode} from 'react';
import {ConfigProvider} from "antd";

interface Props {
    children: ReactNode
}
const ThemeProvider = ({children}: Props) => {
    return (
        <ConfigProvider
            theme={{
                token:{
                    colorPrimary: '#6C70EB',
                    fontSize: 16
                }
            }}
        >
            {children}
        </ConfigProvider>
    );
};

export default ThemeProvider
