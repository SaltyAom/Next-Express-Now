import React from 'react'
import Head from "next/head"
import Link from 'next/link'
import NProgress from 'next-nprogress/component'

export default () => {
  return(
    <>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <link rel="icon" href="/static/ShinoX192.png" />
        <link rel="stylesheet" type="text/css" href="/static/hakutaku-material.css" />
        </Head>
        <NProgress />
        <nav>
        <div>
          <Link href="/">
            <a href="/">
              Main
            </a>
          </Link>
        </div>
        <div>
          <h6>
            Hello Next.js
          </h6>
        </div>
        <div>
          <Link href="/contact">
            <a href="/contact">
              Contact
            </a>
          </Link>
        </div>
      </nav>
    </>
  )
}