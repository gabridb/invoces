import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Free invoice generator</title>
        <meta name="description" content="Free invoice generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className="text-center mt-5">
        <h1 className="display-2">
          Free invoice generator
        </h1>

        <p className="mt-3">
          Create invoices easily and for free
        </p>

        <Link href="/form"><Button className="mt-3">Create Invoice</Button></Link>
  
      </Container>
    </div>
  )
}
