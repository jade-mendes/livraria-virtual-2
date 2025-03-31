'use server'

import axios from "axios"
import styles from './styles.module.css'
import '../../globals.css'
import { BookType } from "../../types/BookType"
import { formatPrice } from "../../utils/formatPrice";
import BackToHomeButton from "../../components/BackToHomeButton";
import Image from "next/image";

async function getBookInfo(bookId: string): Promise<BookType>{
    const response = await axios.get(`http://localhost:3001/livros/${bookId}`);
    const bookInfo = response.data;
    return bookInfo;
}

export default async function BookDetails({
    params,
  }: {
    params: Promise<{ id: string }>
  }){
    const { id } = await params;
    const book = await getBookInfo(id);
    
    return(
        <section className={styles.wrapper}>
            <BackToHomeButton innerText="Detalhes do livro" />
            <div className={styles.bookInfoContainer}>
                <Image src={book?.capa} width={300} height={400} alt={`capa do livro ${book?.titulo}`}/>
                <div className={styles.bookInfo_text}>
                    <div id={styles.titleAndAuthor}>
                        <h2>{book?.titulo}</h2>
                        <h3>{book?.autor}</h3>
                    </div>
                    
                    <h4>Sinopse</h4>
                    <p>{book?.sinopse}</p>
                    
                </div>
            </div>
            <button className={styles.accentButton}> 
                <span>R$ {formatPrice(book?.preco)}</span> 
                Adicionar ao carrinho
            </button>     
        </section>
    )
}