'use server'
import axios from 'axios'
import GenreRow from "../GenreRow/GenreRow";
import styles from './styles.module.css'

interface Book {
    id: string;
    titulo: string;
    autor: string;
    genero: string;
    preco: number;
    sinopse: string;
    capa: string;
}

async function getGenres(): Promise<string[]> {
    const response = await axios.get<Book[]>('http://localhost:3001/livros')
    const books = response.data;
    const uniqueGenres : string[] = Array.from(new Set(books.map(book  => book.genero)));
    return uniqueGenres;
}

export default async function BookList(){
    const genres = await getGenres();

    return(
        <div className={styles.bookList}>
            <ul>
                {genres.map((genre, index) => (
                    <li key={index} className={styles.row}>
                        <GenreRow rowName={genre} />
                    </li>
                ))}
            </ul>
        </div>
    )
}