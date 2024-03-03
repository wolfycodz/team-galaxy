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
        <Header title="Welcome to Team galaxy!" />
        <p className="description">
          We strive to make a better os.
          <Link href="https://orbit-os.netlify.com" passHref>
            <a> Orbit OS beta</a>
          </Link>
        </p>
      </main>

      <Footer />
    </div>
  )
}
