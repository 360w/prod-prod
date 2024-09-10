import { FC, useContext } from 'react';
import { Counter } from './Components/Counter';
import { Route, Routes, Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Suspense, useState } from 'react';
import { ThemeContext } from './theme/ThemeContext';
import { Themes } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';



const App: FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', { hovered: true, selected: false, red: false }, [theme, 'cls1', 'cls2'])}>
            <button onClick={toggleTheme}>Toggle Theme Button ya its me</button> <br />
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
            <Counter />
        </div>
    );
};

export default App;