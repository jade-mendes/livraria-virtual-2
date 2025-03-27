import { ChevronLeft } from "@deemlol/next-icons";
import styles from './styles.module.css'
import Link from "next/link";

interface ButtonProps {
    innerText : string 
}

export default function BackToHomeButton({ innerText } : ButtonProps){
    return (
        <Link href='/home'>
            <div className={styles.buttonContainer}>
                <ChevronLeft />
                <h4>{innerText}</h4>
            </div>
        </Link>
    )
}