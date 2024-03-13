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
                    borderRadius: 4,
                    colorBgBase: '#fff'
                },
                components: {
                    Input: {
                        fontSize: 18,
                        paddingBlock: 9
                    },
                    Menu: {
                        itemSelectedColor: '#fff',
                        itemColor: '#fff',
                        itemBg: 'transparent',
                        itemHoverColor: '#fff',
                        itemSelectedBg: '#6C70EB',
                        itemHoverBg: 'rgba(108,112,235,0.78)',
                        itemHeight: 50,
                    },
                    Layout: {
                        bodyBg: '#fff',
                    }
                }

            }}
        >
            {children}
        </ConfigProvider>
    );
};

export default ThemeProvider
