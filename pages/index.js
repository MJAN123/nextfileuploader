import Link from 'next/link'
import Head from 'next/head';
import styles from  '../styles/Home.module.scss'
export default function Home() {
  return (
    <div className={styles.mainContainer}>
    <Head>
      <link rel="shortcut icon" href="../public/upload.jpeg" />
    </Head>
    <div className={styles.welcome}>
      <h1>
        Welcome Upload Manger
      </h1>
      <Link href="/upload">   
          <button className={styles.btn}>
            Go TO File File Upload
          </button>
        </Link>
    </div>
    </div>
  )
}
