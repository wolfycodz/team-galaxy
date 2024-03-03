import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title title="Team galaxy </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Team galaxy!" />
        <p className="description">
         "we strive to make a better os."
    <Link href="orbit-os.netlify.com">
      <a>Orbit OS beta</a>
    </Link>
        </p>
      </main>

      <Footer />
    </div>
  )
}
