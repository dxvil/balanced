import React from 'react'
import Link from "next/link"
import Image from "next/image";
import Head from "next/head";
import styles from '../../../../assets/scss/profile.module.scss'

export default function Profile() {
    return (
        <div className={styles.content}>
            <Head>
                <title>Profile</title>
            </Head>
            <Image
                src="/images/profile.jpg"
                height={144}
                width={144}
                alt="Your Name"
            />
            <p>It will be a profile</p>
        </div>
    )
}