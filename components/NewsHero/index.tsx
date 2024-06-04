import styles from './NewsHero.module.css';

const NewsHero = () => {
    return (
        <div className={styles.NewsHero}>
            <div className={styles.overlay}>
                <ul>
                    <li><span>News</span></li>
                </ul>
                <span className={styles.title}>
                We are Tranforming <br/>
                Parking Experiences
                </span>
            </div>
        </div>
    )
}

export default NewsHero