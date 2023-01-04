import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/styles.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Board App - Organize your tasks</title>
        </Head>
        <h1 className={styles.title}>Hello World</h1>
      </div>
    </>
  )
}
