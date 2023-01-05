import Head from 'next/head'
import { FiPlus, FiCalendar, FiEdit2, FiTrash, FiClock, FiX } from 'react-icons/fi'


import styles from './styles.module.scss'



export default function Board(){
    return(
       <>

       <Head>
            <title>My Tasks - Board</title>
       </Head>
        <main className={styles.container}>
            <form>
                <input 
                    type="text"
                    placeholder='Digite sua tarefa...'
                />
                <button type='submit'>
                    <FiPlus size={25} color='#17181f' />
                </button>
                
            </form>

            <h1>Voce tem 2 tarefas!</h1>

            <section>
                <article>
                    <p>Aprender a criar projetos usando Next JS e aplicando firebase como back end.</p>
                    <div>
                        <div>
                            <div>
                                <FiCalendar size={20} color="#FFb800" />
                                <time>17 Julho 2022</time>
                            </div>
                            <button>
                                <FiEdit2 size={20} color="#FFF" />
                                <span>Editar</span>
                            </button>
                        </div>

                        <button>
                            <FiTrash size={20} color="#FF3636" />
                            <span>Excluir</span>
                        </button>

                    </div>
                </article>
            </section>
        </main>
       
       </>
    )
}