import React from 'react'
import Link from "next/link"
import styles from '../../../../assets/scss/nav.module.scss'
function Navigation() {
    return (
        <div>
            <nav className={styles.navigation}>
               <Link href="../../../feature/auth/Auth.js">
                   <a className={styles.navigation__link}>Authorization</a>
               </Link>
                <Link href="../profile/Profile.js">
                    <a className={styles.navigation__link}>Profile</a>
                </Link>
                <Link href="">
                    <a className={styles.navigation__link}>Statistic</a>
                </Link>
                <Link href="">
                    <a className={styles.navigation__link}>Dashboard</a>
                </Link>
            </nav>
        </div>
    )
}

export default Navigation;