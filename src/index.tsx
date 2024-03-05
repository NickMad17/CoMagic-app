import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "@/app/App.tsx";
import {ThemeProvider} from "@/app/providers/themeProvider";
import {ConfigProvider} from "antd";

const app = (
    <React.StrictMode>
        <ConfigProvider theme={{
            token: {
                colorPrimary: '#4243d7',
            }
        }}>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ConfigProvider>
    </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root')!).render(app);
