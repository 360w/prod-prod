import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {

    const { t } = useTranslation('navbar');

    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} className={cls.mainLink} to={'/'}>{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} className={cls.aboutLink} to={'/about'}>{t('О сайте')}</AppLink>
            </div>
        </div>
    );
};

