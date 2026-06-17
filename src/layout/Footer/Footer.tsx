import React from 'react';
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__socialsWrapper}>
                <a className={styles.footer__social} href="/">
                    tg
                </a>
                <a className={styles.footer__social} href="/">
                    vk
                </a>
                <a className={styles.footer__social} href="/">
                    yt
                </a>
            </div>
            <nav className={styles.footer__nav}>
                <ul className={styles.footer__menu}>
                    <li className={styles.footer__listItem}>Продукты</li>
                    <li className={styles.footer__listItem}>Услуги</li>
                    <li className={styles.footer__listItem}>Поддержка</li>
                    <li className={styles.footer__listItem}>Медиа</li>
                </ul>
            </nav>
        </footer>
    )
}