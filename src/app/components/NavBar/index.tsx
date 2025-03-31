import { User, ShoppingCart } from "@deemlol/next-icons";
import HeaderButton from "../HeaderButton";
import Link from "next/link";
import styles from './styles.module.css'

export default function NavBar(){
    return(
        <nav className={styles.navBar}>
            <Link href="#">
                <HeaderButton>
                    <User color="#090937"/>
                </HeaderButton>
            </Link>
                
            <Link href="#">
                <HeaderButton>
                    <ShoppingCart color="#090937"/>
                </HeaderButton>
            </Link>  
        </nav>
    )
}