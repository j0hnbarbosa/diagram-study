import Head from 'next/head'
import LinkToPages from '../components/LinkToPages'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          <li>
            <LinkToPages 
              header='React Diagram'
              linkpage='react-diagram-page'
              linkDocumentation='https://projectstorm.gitbook.io/react-diagrams/'
            />
          </li>
          <li>
            <LinkToPages 
              header='React Flow'
              linkpage='react-flow-page'
              linkPageCustom='react-flow-custom-page'
              linkDocumentation='https://reactflow.dev/docs/introduction/'
            />
          </li>
        </ul>
      </main>

    </div>
  )
}
