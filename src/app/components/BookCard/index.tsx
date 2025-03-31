import styles from './styles.module.css'
import '../../globals.css'
import Image from 'next/image';
import { formatPrice } from "../../utils/formatPrice";

interface BookCardProps {
    cover: string
    title: string
    author: string
    price: number
    variant? : "default" | "expanded"
}

export default function BookCard({cover, title, author, price, variant}: BookCardProps){
    return(
        <div className={variant === "default" ? styles.defaultCard : styles.expandedCard}>
            <Image
                src={cover}
                alt={`capa do livro ${title}`}
                className={styles.bookCover}
                width={200}
                height={300}
            />
            <div className={styles.bookInfo}>
                <div className={styles.bookInfo_text}>
                    <h4>{title}</h4>
                    <h5>{author}</h5>
                </div>
                <p className={styles.bookInfo_price}>R$ {formatPrice(price)}</p>
            </div>
        </div>
    )
}