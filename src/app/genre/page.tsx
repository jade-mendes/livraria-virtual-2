import axios from "axios";
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom";
import BackToHomeButton from "../../components/BackToHomeButton";
import styles from './styles.module.css'
import BookCard from "../../components/BookCard";
import { BookCardType } from "../../types/BookCardType";

export default function BooksByGenre(){
    const [books, setBooks] = useState<BookCardType[]>([]);
    const [query, setQuery] = useState("");
    let params = useParams();

    const filteredBooks = books.filter(book => {
        return book.titulo.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    })

    useEffect(() => {
        axios.get(`http://localhost:3001/livros?genero=${params.genreName}`)
        .then(response => setBooks(response.data))
        .catch(error => {console.error('Algo deu errado: ' + error)})
    }, []);

    if (books.length == 0) return (<h4> Gênero não encontrado</h4>)
    else return (
        <>
            <section className={styles.searchBar}>
                <input 
                    type="text" 
                    placeholder="Pesquisar por título"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </section>
            <section className={styles.content}>
                <BackToHomeButton innerText={params.genreName!}/>
                <ul className={styles.booksByGenreList}>
                    {filteredBooks.map((book) => (
                        <li key={book.id}>
                            <Link to={`/book/${book.id}`}><BookCard cover={book.capa} title={book.titulo} author={book.autor} price={book.preco} variant="expanded" /></Link>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}