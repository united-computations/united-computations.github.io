import Head from 'next/head';
import Nav from '../components/Nav';
import Header from '../components/Header';
import GunnHacks from '../components/GunnHacks';
import Officers from '../components/Officers';
import Footer from '../components/Footer';


export default function Home() {
    return (
        <div>
            <Head>
                <title>United Computations</title>
                <meta name="description" content="One of the longest-running CS clubs at Gunn!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />

            <Header />
            <GunnHacks />
            <Officers />

            <Footer />
        </div>
    )
}
