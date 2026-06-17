import React from "react";
import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <a className={styles.header__logo} href="/">
                *Movie*
            </a>
            <nav className={styles.header__nav}>
                <ul className={styles.header__menu}>
                    <li className={styles.header__listItem}>Продукты</li>
                    <li className={styles.header__listItem}>Услуги</li>
                    <li className={styles.header__listItem}>Поддержка</li>
                    <li className={styles.header__listItem}>Медиа</li>
                </ul>
            </nav>
        </header>
    )
}