import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import styles from './Header.module.css';

export function Header() {
    const [isDark, setIsDark] = useState(true);

    // Применяем тему к тегу <html>
    useEffect(() => {
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, [isDark]);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a href="#" className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <img src="/img/logo_2.png" alt="Logo" />
                    </div>
                    <span>Daria</span>
                </a>

                <nav className={styles.nav}>
                    <a href="#about">Обо мне</a>
                    <a href="#projects">Проекты</a>
                    <a href="#contacts">Контакты</a>

                    <button className={styles.themeBtn} onClick={() => setIsDark(!isDark)} title="Сменить тему">
                        {isDark ? <Sun size={24} /> : <Moon size={24} />}
                    </button>
                </nav>
            </div>
        </header>
    );
}