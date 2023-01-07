import styles from './styles.module.scss'
import Link from 'next/link'

export function SupportButton() {
    return(
        <div className={styles.doanteContainer}>
           <Link href="/donate">
                <button>Apoiar</button>
           </Link>
        </div>
    )
}