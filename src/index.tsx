import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "@/app/App.tsx";
import {ThemeProvider} from "@/app/providers/themeProvider";

const app = (
    <React.StrictMode>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root')!).render(app);
