import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/styles.module.scss'
import { GetStaticProps } from 'next'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Head>
          <title>Board App - Organize your tasks</title>
        </Head>
          <main className={styles.contentContainer}>
              <img src="/images/board-user.svg" alt="Board Tool" />
              <section className={styles.callToAction}>
                <h1>A too for your day plan and organize your day</h1>
                <p>
                  <span>100% Gratuita</span>
                  e online.
                </p>
              </section>

              <div className={styles.donaters}>
                <img src="https://sujeitoprogramador.com/steve.png" alt="" />
              </div>
          </main>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  // const donaters = await firebase.firestore().collection('users').get();

  // const data = JSON.stringify(donaters.docs.map( u => {
  //   return{
  //     id: u.id,
  //     ...u.data(),
  //   }
  // }))

  return{
    props: {
      //data
    },
    revalidate: 60 * 60 // Atualiza a cada 60 minutos.
  }

}