'use server'
import axios from 'axios'
import BookCard from '../BookCard/BookCard'
import styles from './styles.module.css'
import { BookCardType } from '../../types/BookCardType'
import Link from 'next/link'

interface rowProps {
    rowName: string
}

function getFirstFourBooks(books : BookCardType[]) : BookCardType[]{
    const fourBookRow : BookCardType[] = [];
    const limit = 4;
    for (let i = 0; i < limit; i++){
        fourBookRow.push(books[i]);
    }
    return fourBookRow;
}

async function fetchBooksByGenre(genre : string): Promise<BookCardType[]> {
    const response = await axios.get(`http://localhost:3001/livros?genero=${genre}`);
    return getFirstFourBooks(response.data);
}


export default async function GenreRow({rowName} : rowProps){
    const books = await fetchBooksByGenre(rowName);

    return(
        <div className={styles.rowContainer}>
            <div className={styles.rowHeader}>
                <h3>{rowName}</h3>
                <Link href={`/genre/${rowName}`}>Ver mais</Link>
            </div>
            <ul className={styles.booksRow}>
                {books.map((book : BookCardType) => (
                    <li key={book.id}>
                        <Link href={`/book/${book.id}`}> 
                            <BookCard 
                                cover={book.capa} 
                                title={book.titulo} 
                                author={book.autor} 
                                price={book.preco} 
                                variant="default"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}