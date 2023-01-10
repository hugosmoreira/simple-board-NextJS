import Head from 'next/head'
import { FiPlus, FiCalendar, FiEdit2, FiTrash, FiClock, FiX } from 'react-icons/fi'
import { SupportButton } from '../../components/SupportButton'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import styles from './styles.module.scss'
import { useState, FormEvent } from 'react'
import firebase from '../../services/firebaseConnection'


type TaskList = {
    id: string;
    created: string | Date;
    createdFormated?: string;
    tarefa: string;
    userId: string;
    nome: string;
  }
  
  interface BoardProps{
    user:{
      id: string;
      nome: string;
      vip: boolean;
      lastDonate: string | Date;
    }
    data: string;
  }


export default function Board({ user}: BoardProps){

    const [input, setInput] = useState('');
   

    async function handleAddTask(e: FormEvent) {
        e.preventDefault();
        if(input === ''){
            alert('Preencha alguma tarefa!')
            return;
        }

        await firebase.firestore().collection('tarefas')
        .add({
            created: new Date(),
            tarefa: input,
            // userId: user.id,
            // nome: user.nome
        })
        .then((doc) => {
            console.log('Cadastrado com sucesso')
        })
        .catch((err)=> {
            console.log('Erro ao cadastrar')
        })
        
    }



    return(
       <>

       <Head>
            <title>My Tasks - Board</title>
       </Head>
        <main className={styles.container}>
            <form onSubmit={handleAddTask}>
                <input 
                    type="text"
                    placeholder='Digite sua tarefa...'
                    value={input}
                    onChange={ (e) => setInput(e.target.value) }
                />
                <button type='submit'>
                    <FiPlus size={25} color='#17181f' />
                </button>
                
            </form>

            <h1>Voce tem 2 tarefas!</h1>

            <section>
            <article className={styles.taskList}>
                
                <p>Aprender a criar projetos usando NextJS</p>
              
                <div className={styles.actions}>
                <div>
                    <div>
                    <FiCalendar size={20} color="#FFB800"/>
                    <time>17 de Julho de 2022</time>
                    </div>
                
                    <button >
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

        <div className={styles.vipContainer}>
            <h3>Obrigado por apoiar esse projeto.</h3>
            <div>
                <FiClock size={28} color="#FFF" />
                <time>
                    Última doação foi a 3 dias
                </time>
            </div>
        </div>
        <SupportButton />
       </>
    )
}


export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req });
  
    if(!session?.id){
      //Se o user nao tiver logado vamos redirecionar.
      return{
        redirect:{
          destination: '/',
          permanent: false
        }
      }
    }
  
    // const tasks = await firebase.firestore().collection('tarefas')
    // .where('userId', '==', session?.id)
    // .orderBy('created', 'asc').get();
  
    // const data = JSON.stringify(tasks.docs.map( u => {
    //   return {
    //     id: u.id,
    //     createdFormated: format(u.data().created.toDate(), 'dd MMMM yyyy'),
    //     ...u.data(),
    //   }
    // }))
  
    const user = {
    //   nome: session?.user.name,
      id: session?.id,
      vip: session?.vip,
      lastDonate: session?.lastDonate
    }
  
  
    return{
      props:{
        // user,
        // data
      }
    }
  
  }
  