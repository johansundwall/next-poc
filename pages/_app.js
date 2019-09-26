import React from 'react'
import App from 'next/app'
import Nav from '../components/nav'
import Head from 'next/head'
import withRedux from 'lib/withRedux'
import { Provider } from 'react-redux'

class Layout extends React.Component {
  render () {
    const { children } = this.props
    return <div className='layout'>{children}</div>
  }
}

class Warehouse extends App {
  render () {
    const { Component, pageProps, reduxStore} = this.props
    return (
      <Provider store={reduxStore}>
        <Layout>
            <Head>
              <title>{Component.name}</title>
            </Head>
          <Nav />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  }
}

export default withRedux(Warehouse)
