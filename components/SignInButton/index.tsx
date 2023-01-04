import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
 




export function SignInButton() {

    const session = false;


    return session ? (
        <button
        type='button'
        className={styles.signInButton}>
            <img src="" alt="" />
            Ola
            <FiX color='#737380' className={styles.closeIcon}/>
            SignIn with github
        </button>
    ) : (
        <button
        type='button'
        className={styles.signInButton}>
            <FaGithub 
                color='#FFB800'
                />
            SignIn with github
        </button>
    )
    
}