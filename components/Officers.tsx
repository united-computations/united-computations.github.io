import {ReactNode} from 'react';
import Section from './Section';


// The "Meet our officers" section on the home page.
export default function Officers() {
    return (
        <Section>
            {/* TODO: this header is a bit ugly with the non-flush officer section below it; consider */}
            {/* making font size smaller and/or centering? */}
            <h2 className="font-bold text-4xl mb-6">Meet our officers:</h2>

            <div className="max-w-3xl mx-auto divide-y divide-tertiary">
                <OfficerCard name="Saumya Singhal" position="Co-president" src="/officers/saumya.png">
                    ...
                </OfficerCard>
                <OfficerCard name="Alec Petridis" position="Co-president" src="/officers/alec.png" reverse>
                    ...
                </OfficerCard>
                <OfficerCard name="Kevin Yu" position="Co-vice-president" src="/officers/kevin.png">
                    ...
                </OfficerCard>
                <OfficerCard name="Roger Fan" position="Co-vice-president" src="/officers/roger.JPG" reverse>
                    ...
                </OfficerCard>
                <OfficerCard name="Anthony Ho" position="Secretary" src="">
                    ...
                </OfficerCard>
                <OfficerCard name="Vivien Chen" position="Co-vice-president" src="" reverse>
                    ...
                </OfficerCard>
            </div>
        </Section>
    )
}

function OfficerCard(props: {name: string, position: string, src: string, children: ReactNode, reverse?: boolean}) {
    return (
        <div className={'flex gap-10 py-6' + (props.reverse ? ' flex-row-reverse' : '')}>
            <img src={props.src} alt={props.name} className="w-36 h-36 rounded-full object-cover" />
            <div className="flex-grow">
                <h3 className="text-lg font-medium">{props.name}</h3>
                <h4 className="text-sm text-secondary mb-2">{props.position}</h4>
                <p>{props.children}</p>
            </div>
        </div>
    )
}
