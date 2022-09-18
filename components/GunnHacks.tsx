import {ReactNode, useState, useEffect, Fragment} from 'react';
import {Transition} from '@headlessui/react';
import Section from './Section';


// The GunnHacks section on the home page, including both the scrollable website links and about text.
export default function GunnHacks() {
    const [imageIndex, setImageIndex] = useState(0);
    const images = [
        '/ghacks/ghacks-1.png', '/ghacks/ghacks-2.png', '/ghacks/ghacks-3.png'
    ];

    // Transition the image slideshow every 8 seconds
    useEffect(() => {
        const id = setInterval(
            () => setImageIndex((imageIndex) => (imageIndex + 1) % images.length),
            6 * 1000
        );
        return () => clearInterval(id);
    }, []);

    return (
        <>
            <section className="flex gap-3 px-20 py-8 dark:bg-grape overflow-x-auto snap-x scrollbar-thin">
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

            <Section secondary>
                <div className="flex gap-10">
                    <div className="relative rounded shadow-xl overflow-hidden w-[28rem] h-[19rem] flex-none">
                        {images.map((src, i) => (
                            <SlideshowImage src={src} show={imageIndex === i} key={src} />
                        ))}
                    </div>
                    <div>
                        <h2 className="font-bold text-4xl mb-4 underline underline-offset-4 decoration-4 decoration-red-500">
                            GunnHacks
                        </h2>
                        <p className="mb-6">
                            Make, Build, Create & Learn at Gunn's annual hackathon, GunnHacks, organized by United Computations!
                            Every year, hundreds of students across the bay create projects, attend workshops, participate
                            in activities, and compete for prizes our in-person, 24-hour hackathon.
                        </p>
                        <div className="flex gap-4">
                            <GradientButton href="https://www.gunnhacks.com">
                                Go to website
                            </GradientButton>
                            {/* TODO
                            <GradientButton href="...">
                                Register for organizer
                            </GradientButton>
                            */}
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

function GradientButton(props: {href: string, children: ReactNode}) {
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className="block py-2 px-4 rounded-md font-medium bg-gradient-to-br from-rose-500 via-red-500 to-pink-500 shadow-md hover:shadow-lg !shadow-red-700 transition-shadow duration-200 focus:outline-none focus-visible:ring-[3px] focus-visible:ring-[0xFF7DADD9]">
            {props.children}
        </a>
    )
}

function GunnHacksCard(props: {name: string, href: string, children: ReactNode}) {
    return (
        <a className="snap-center flex-none rounded-md bg-midnight shadow-lg overflow-hidden border dark:border-tertiary dark:hover:border-secondary transition duration-200 focus:outline-none focus-visible:ring-[3px] focus-visible:ring-[0xFF7DADD9]" href={props.href} target="_blank" rel="noopener noreferrer">
            <img src={`/ghacks/${props.name}.png`} alt={props.name} className="w-72 h-44 object-cover" />
            <div className="px-5 py-4 flex gap-3 items-center">
                <h5 className="font-mono font-medium">{props.name}</h5>
                <p className="text-sm text-secondary">{props.children}</p>
            </div>
        </a>
    )
}

// https://github.com/ky28059/GRTWebsite2.0/blob/main/components/Slideshow.tsx
function SlideshowImage(props: {src: string, show: boolean}) {
    return (
        <Transition
            as={Fragment}
            show={props.show}
            leave="transition-opacity duration-500 z-10"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <img
                src={props.src}
                alt="GunnHacks"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
        </Transition>
    )
}
