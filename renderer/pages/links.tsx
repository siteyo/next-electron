import Link from 'next/link'
import Layout from '../components/Layout'

const LinksPage = () => (
  <Layout title="Links">
    <h1>Links</h1>
    <p>
      <Link href="/">Home</Link>
    </p>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
)

export default LinksPage
