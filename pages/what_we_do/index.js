import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Team galaxy</title>
        <link rel="icon" href="/favicon.png"/>
      </Head>

      <main>
        <Header title="What we do:" />
        <p className="description">
       we make various os versions with our base Orbit OX
       this team is full of lots of great people that i (wolfy) am proud of!
        </p>
      </main>

      <Footer />
    </div>
  )
}