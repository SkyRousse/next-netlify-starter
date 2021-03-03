import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { fetchEntries } from '@utils/contentful'
import Product from '@components/Product'

export default function Home({ products }) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Product List:
        </p>
        <div className="products">
          {products.map((p, i) => {
            return <Product key={i} title={p.title} description={p.description}/>
          })}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const products = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      products,
    },
  }
}

