import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} className={cls.mainLink} to={'/'}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} className={cls.aboutLink} to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    );
};

