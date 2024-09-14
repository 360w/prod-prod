import { FC } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage/index';
import { MainPage } from 'pages/MainPage/index';
import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';



const App: FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', { hovered: true, selected: false, red: false }, [theme, 'cls1', 'cls2'])}>
            <button onClick={toggleTheme}>Toggle Theme Button ya its me</button> <br />
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/about'} element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;