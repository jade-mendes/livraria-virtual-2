import styles from './styles.module.css'

export default function HeaderButton(props: {children: React.ReactNode}){
    return(
        <button className={styles.button}>
            {props.children}
        </button>
    )
}