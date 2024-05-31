'use client';
import React from 'react';
//import Image from 'next/image'
import styles from './download.module.css'


export default function HomeDownload () {
    return(
        <>
        <section className={styles.wraper}>
            <div className={styles.textwraper}>
                <h2 className={styles.header}>Download now</h2>
                <p>The app is free to download for you as a user. However, your municipality must be registered as a customer with us for our app to be valid in your area. If our app is not available in your municipality, you are welcome to contact us or suggest us to your municipality!</p>
                    <div className={styles.download}>
                        <img className={styles.googleimage} src="/images/AppStore.png" alt="appstore"/>
                        <img className={styles.googleimage} src="/images/GooglePlay.png" alt="goggleStore" />
                    </div>                                  
            </div>
            <div className={styles.imageWraper}>
                <img className={styles.parkingImage} src="/images/dowload.png" alt="download" />
            </div>
         </section>   
        </>
    )
}

