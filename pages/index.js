import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Team galaxy!" />
        <p className="description">
         "we strive to make GOOD os's."
        </p>
      </main>

      <Footer />
    </div>
  )
}
