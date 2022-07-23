import Head from 'next/head';
import {ReactNode} from 'react';


export default function Home() {
    return (
        <div className="pt-36">
            <Head>
                <title>United Computations</title>
                <meta name="description" content="One of the longest-running CS clubs at Gunn!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="container">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-10">
                    United Computations
                    <span className="animate-blink">_</span>
                </h1>

                <div className="flex flex-col gap-3 mb-9 mx-auto">
                    <CodeText>
                        United Computations is one of the largest and longest running CS clubs at Gunn.
                    </CodeText>
                    <CodeText>
                        Through regular lunch meetings, ___, we aim to spread interest in computer science and create a
                        passionate community of programmers.
                    </CodeText>
                    <CodeText>
                        Join our community Wednesdays at lunch in N-215 and ___.
                    </CodeText>
                </div>

                <div className="flex justify-center divide-x-2 divide-gray-400/30 mb-12">
                    <DivideCard>
                        <p className="text-sm text-gray-300/40">Room:</p>
                        <strong className="text-2xl">N-215</strong>
                    </DivideCard>
                    <DivideCard>
                        <p className="text-sm text-gray-300/40">Day:</p>
                        <strong className="text-2xl">Wednesday</strong>
                    </DivideCard>
                    <DivideCard>
                        <p className="text-sm text-gray-300/40">Time:</p>
                        <strong className="text-2xl">Lunch</strong>
                    </DivideCard>
                </div>
            </header>

            <section className="dark:bg-zinc-800 py-12">
                <div className="container">
                    <h2 className="font-bold text-4xl mb-6">GunnHacks</h2>

                    <section className="flex gap-2">
                        <GunnHacksCard name="8.0" href="https://www.gunnhacks.com/">
                            February 5-6, 2022
                        </GunnHacksCard>
                        <GunnHacksCard name="7.0" href="https://7.0.gunnhacks.com/">
                            February 12-14, 2021
                        </GunnHacksCard>
                        <GunnHacksCard name="6.0" href="https://6.0.gunnhacks.com/">
                            Cancelled
                        </GunnHacksCard>
                        {/*
                        <GunnHacksCard name="5.0" href="https://5.0.gunnhacks.com/">
                            ...
                        </GunnHacksCard>
                        */}
                        <GunnHacksCard name="4.0" href="https://4.0.gunnhacks.com/">
                            October 27-28, 2017
                        </GunnHacksCard>
                        <GunnHacksCard name="3.0" href="https://3.0.gunnhacks.com/">
                            November 11-12, 2016
                        </GunnHacksCard>
                        <GunnHacksCard name="2.0" href="https://2.0.gunnhacks.com/">
                            March 25-26, 2016
                        </GunnHacksCard>
                        <GunnHacksCard name="1.0" href="https://1.0.gunnhacks.com/">
                            March 14-15, 2015
                        </GunnHacksCard>
                    </section>
                </div>
            </section>
        </div>
    )
}

function CodeText(props: {children: ReactNode}) {
    return (
        <p className="text-lg text-center font-mono flex gap-3 items-center justify-center">
            <code className="hidden md:block text-gray-300/40">
                {'<'}<span className="text-[#7ee787]">p</span>{'>'}
            </code>
            <span className="opacity-70">{props.children}</span>
            <code className="hidden md:block text-gray-300/40">
                {'<'}/<span className="text-[#7ee787]">p</span>{'>'}
            </code>
        </p>
    )
}

function DivideCard(props: {children: ReactNode}) {
    return (
        <div className="flex flex-col px-6 justify-center">
            {props.children}
        </div>
    )
}

function GunnHacksCard(props: {name: string, href: string, children: ReactNode}) {
    return (
        <a className="flex" href={props.href} target="_blank" rel="noopener noreferrer">
            <div className="rounded-md p-5 bg-zinc-900 shadow-lg">
                <h5 className="font-mono font-medium mb-1">{props.name}</h5>
                <p className="text-sm text-gray-300/40">{props.children}</p>
            </div>
        </a>
    )
}
