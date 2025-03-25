import styles from './styles.module.css'
import logo from "../../../../public/assets/logo.svg"
import Link from 'next/link'
import Image from 'next/image'

export default function Header(){
    return(
        <header className={styles.header}>
            <Link href="/">
                <Image 
                    src={logo}
                    alt="Logo da livraria"
                    width={50}
                    height={50}/>
            </Link>
        </header>
    )
}