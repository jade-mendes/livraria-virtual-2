import styles from './styles.module.css'
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
            <img className={styles.bookCover} src={cover} alt={`capa do livro ${title}`}></img>
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