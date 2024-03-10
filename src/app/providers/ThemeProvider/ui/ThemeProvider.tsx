import {ReactNode} from 'react';
import {ConfigProvider} from "antd";

interface Props {
    children: ReactNode
}

const ThemeProvider = ({children}: Props) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#6C70EB',
                    fontSize: 16,
                    borderRadius: 4
                },
                components: {
                    Input: {
                        fontSize: 18,
                        paddingBlock: 9
                    }
                }

            }}
        >
            {children}
        </ConfigProvider>
    );
};

export default ThemeProvider
