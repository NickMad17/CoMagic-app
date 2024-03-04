import '@/app/styles/index.scss'
import cn from 'classnames'
import {useTheme} from "@/app/providers/themeProvider";

const App = () => {
    const {theme} = useTheme()
    return (
        <div className={cn('app', theme)}>
            hello world
        </div>
    );
};

export default App;