import Head from 'next/head'
import Homepage from '../components/Homepage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Developer || Faboade Oluwatosin</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <Homepage />
      </div>
    </>
  )
}
