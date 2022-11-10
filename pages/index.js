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
        <Header title="Hi. I'm Oleg Somin." />
        <p className="description">
          I'm experienced e-commerce consultant, designer and web-producer. Founder and Jedi Grand Master at ITLine company. Open networker. Happy father and lovely husband :) Originally I'm from Moscow, Russia but I moved to Vilnius, Lithuania in 2013 to take a deep breath of freedom, creativity and fresh air.
        </p>
      </main>

      <Footer />
    </div>
  )
}
