import Head from 'next/head';
import Nav from '../components/Nav';
import QuickLink from '../components/QuickLink';

export default function Links() {
    return (
        <div>
            <Head>
                <title>United Computations • Quick Links</title>
                <meta name="description" content="One of the longest-running CS clubs at Gunn!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />

            <div className="flex flex-col pt-20">
                <h1 className='block text-center text-4xl font-extrabold mb-12'>Gunn United Computations</h1>
                <div className="flex flex-col mx-auto gap-4">
                    <QuickLink className='bg-rose-500' to='https://forms.gle/P9KE99RqyHyMwSBAA' title='Mailing List Signup' />
                    <QuickLink className='bg-red-500' to='https://docs.google.com/forms/d/e/1FAIpQLSfHF5w1sZc5pjj1PBjm9udRRgl60IeWxEf4Y0lAXCETPfuN4g/viewform?entry.676984385=United%20Computations' title='Attendance' />
                    <QuickLink className='bg-orange-500' to='https://tinyurl.com/gunnucdiscord' title='Discord Server' />
                    <QuickLink className='bg-amber-500' to='/' title='Our Website' />
                    <QuickLink className='bg-yellow-500' to='https://gunnhacks.com' title='GunnHacks' />
                </div>
            </div>


        </div>)
}
