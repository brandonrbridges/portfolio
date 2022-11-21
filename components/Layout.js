// Next
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div className='relative'>
      <Head>
        <title>Brandon Bridges | Portfolio</title>
      </Head>

      {children}
    </div>
  )
}

export default Layout
