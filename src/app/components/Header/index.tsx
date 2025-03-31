import styles from './styles.module.css'
import logo from "../../../../public/assets/logo.svg"
import Link from 'next/link'
import Image from 'next/image'
import NavBar from '../NavBar'

export default function Header(){
    return(
        <header className={styles.header}>
            <Link href="/home">
                <Image 
                    src={logo}
                    alt="Logo da livraria"
                    width={50}
                    height={50}/>
            </Link>
            <NavBar/>
        </header>
    )
}