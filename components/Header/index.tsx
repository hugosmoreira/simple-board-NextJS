import styles from './styles.module.scss'
import Link from 'next/link'
import { SignInButton } from '../SignInButton'

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/">
                    <img src="./images/logo.svg" alt="Logo" />
                </Link>
                <nav>
                    <Link href="/" id="link">
                        Home
                    </Link>
                    <Link href="/board" id="link">
                        My Board
                    </Link>
                </nav>


                <SignInButton />
            </div>
        </header>
    )
}