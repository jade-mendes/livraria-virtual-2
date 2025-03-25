import styles from './styles.module.css'
import bannerImage from '../../../../public/assets/banner.jpeg'
import Image from 'next/image'

export default function Banner(){
    return(
        <div className={styles.bannerContainer}>
            <Image className={styles.bannerImage} src={bannerImage} alt="Livros do Paulo Coelho"/>
            <div className={styles.bannerText}>
                <h2 className={styles.bannerTitle}>25% de desconto</h2>
                <p className={styles.bannerSubtitle}>nos livros do Paulo Coelho!</p>
            </div>
        </div>
    )
}