import Banner  from "../app/components/Banner";
import BookList from "./components/BookList/BookList";
import './globals.css'

export default function Home(){
    return(
        <>
            <Banner/>
            <BookList/>
        </>
    )
}