import { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';




const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', { hovered: true, selected: false, red: false }, [theme, 'cls1', 'cls2'])}>
            <Suspense fallback>
                <NavBar />
                <div className='content-page'>
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;