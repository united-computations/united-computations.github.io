import {ReactNode} from 'react';
import Section from './Section';


// The GunnHacks section on the home page, including both the scrollable website links and about text.
export default function GunnHacks() {
    return (
        <>
            <section className="flex gap-3 px-20 py-8 dark:bg-[rgb(27,_26,_31)] overflow-x-auto snap-x">
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
                <h2 className="font-bold text-4xl mb-4">GunnHacks</h2>
                <p>
                    Every year, ___.
                </p>
            </Section>
        </>
    )
}

function GunnHacksCard(props: {name: string, href: string, children: ReactNode}) {
    return (
        <a className="snap-center flex-none rounded-md bg-midnight shadow-lg overflow-hidden border dark:border-tertiary dark:hover:border-secondary transition duration-200" href={props.href} target="_blank" rel="noopener noreferrer">
            <img src={`/gunnhacks/${props.name}.png`} alt={props.name} className="w-72 h-44 object-cover" />
            <div className="px-5 py-4 flex gap-3 items-center">
                <h5 className="font-mono font-medium">{props.name}</h5>
                <p className="text-sm text-secondary">{props.children}</p>
            </div>
        </a>
    )
}
