import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
 
import { signIn, signOut, useSession} from 'next-auth/client';



export function SignInButton() {

    const [session] = useSession();



    return session ? (
        <button
        type='button'
        className={styles.signInButton}
        onClick={ () => signOut()}
        >
            <img src="https://sujeitoprogramador.com/steve.png" alt="" />
            Ola
            <FiX color='#737380' className={styles.closeIcon}/>
            
        </button>
    ) : (
        <button
        type='button'
        className={styles.signInButton}
        onClick={ () =>  signIn('github')}
        >
            <FaGithub 
                color='#FFB800'
                />
            SignIn with github
        </button>
    )
    
}