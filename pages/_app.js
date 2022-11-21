// Components
import Layout from '@/components/Layout'

// Styles
import '../styles/main.scss'

// Modules
import { Analytics } from '@vercel/analytics/react'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  )
}

export default App
