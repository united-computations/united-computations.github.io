import {ReactNode} from 'react';
import Section from './Section';


// The "Meet our officers" section on the home page.
export default function Officers() {
    return (
        <Section>
            {/* TODO: this header is a bit ugly with the non-flush officer section below it; consider */}
            {/* making font size smaller and/or centering? */}
            <h2 className="font-bold text-4xl mb-6">Meet our officers:</h2>

            <div className="max-w-3xl mx-auto divide-y divide-tertiary/50">
                <OfficerCard name="Saumya Singhal" position="Co-president" src="/officers/saumya.png">
                    A cantilever is a rigid structural element that extends horizontally and is supported at only one end. Typically it extends from a flat vertical surface such as a wall, to which it must be firmly attached. Like other structural elements, a cantilever can be formed as a beam, plate, truss, or slab.
                </OfficerCard>
                <OfficerCard name="Alec Petridis" position="Co-president" src="/officers/alec.png" reverse>
                    A cantilever is a rigid structural element that extends horizontally and is supported at only one end. Typically it extends from a flat vertical surface such as a wall, to which it must be firmly attached. Like other structural elements, a cantilever can be formed as a beam, plate, truss, or slab.
                </OfficerCard>
                <OfficerCard name="Kevin Yu" position="Co-vice-president" src="/officers/kevin.png">
                    A cantilever is a rigid structural element that extends horizontally and is supported at only one end. Typically it extends from a flat vertical surface such as a wall, to which it must be firmly attached. Like other structural elements, a cantilever can be formed as a beam, plate, truss, or slab.
                </OfficerCard>
                <OfficerCard name="Roger Fan" position="Co-vice-president" src="/officers/roger.JPG" reverse>
                    A cantilever is a rigid structural element that extends horizontally and is supported at only one end. Typically it extends from a flat vertical surface such as a wall, to which it must be firmly attached. Like other structural elements, a cantilever can be formed as a beam, plate, truss, or slab.
                </OfficerCard>
                <OfficerCard name="Anthony Ho" position="Secretary" src="/officers/anthony.jpg">
                    A cantilever is a rigid structural element that extends horizontally and is supported at only one end. Typically it extends from a flat vertical surface such as a wall, to which it must be firmly attached. Like other structural elements, a cantilever can be formed as a beam, plate, truss, or slab.
                </OfficerCard>
                <OfficerCard name="Vivien Chen" position="Treasurer" src="/officers/vivien.png" reverse>
                    A cantilever is a rigid structural element that extends horizontally and is supported at only one end. Typically it extends from a flat vertical surface such as a wall, to which it must be firmly attached. Like other structural elements, a cantilever can be formed as a beam, plate, truss, or slab.
                </OfficerCard>
            </div>
        </Section>
    )
}

type OfficerCardProps = {
    name: string, position: "Co-president" | "Co-vice-president" | "Secretary" | "Treasurer",
    src: string, children: ReactNode, reverse?: boolean
}
function OfficerCard(props: OfficerCardProps) {
    const {name, position, src, children, reverse} = props;
    return (
        <div className={'flex gap-8 md:gap-10 py-7' + (reverse ? ' flex-row-reverse' : '')}>
            <img src={src} alt={name} className="w-24 h-24 md:w-36 md:h-36 rounded-full object-cover flex-none" />
            <div className="flex-grow py-2.5">
                <h3 className={'text-3xl font-bold mb-1 underline underline-offset-4 decoration-[3px] ' + (position === 'Co-president' ? 'decoration-red-500' : position === 'Co-vice-president' ? 'decoration-orange-500' : position === 'Secretary' ? 'decoration-amber-500' : 'decoration-yellow-500')}>
                    {name}
                </h3>
                <h4 className="text-sm text-secondary mb-2">{position}</h4>
                <p>{children}</p>
            </div>
        </div>
    )
}
