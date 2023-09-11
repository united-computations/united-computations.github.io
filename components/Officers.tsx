import { ReactNode } from 'react';
import Section from './Section';
import { SiReact, SiNextdotjs, SiVuedotjs, SiNuxtdotjs, SiSvelte, SiTypescript, SiPython, SiJava, SiKotlin, SiRust, SiCsharp } from 'react-icons/si';


// The "Meet our officers" section on the home page.
export default function Officers() {
    return (
        <Section>
            {/* TODO: this header is a bit ugly with the non-flush officer section below it; consider */}
            {/* making font size smaller and/or centering? */}
            <h2 className="font-bold text-4xl mb-6">Meet our officers:</h2>

            <div className="max-w-3xl mx-auto divide-y divide-tertiary/50">
                <OfficerCard name="Vivien Chen" position="Co-president" src="/officers/vivien.png" languages={['java', 'py']}>
                    Vivien Chen is a Python and Scheme enthusiast interested in learning more about AI. She is also a
                    part of GRT. Sometimes she attempts to competitive program.
                </OfficerCard>
                <OfficerCard name="Julia Kang" position="Co-president" src="/officers/julia.png" languages={['react', 'next', 'ts', 'py', 'java']} reverse>
                    Julia Kang is an avid programmer who is interested in web development and machine learning. She has made
                    and maintained several web apps and also has some experience with NLP.
                </OfficerCard>
                <OfficerCard name="Roger Fan" position="Co-vice president" src="/officers/roger.JPG" languages={['react', 'next', 'ts']}>
                    Roger Fan is a competitive mathlete and WATT contributor. He is also the co-vice president of Math
                    Circle and a devout Figma enthusiast.
                </OfficerCard>
                <OfficerCard name="Anthony Ho" position="Co-vice president" src="/officers/anthony.jpg" languages={['java', 'py']} reverse>
                    Anthony Ho is a senior at Gunn High School. He has experience in Java and Python, and is most interested
                    in exploring data science applications across different domains. Anthony has been involved in organizing
                    GunnHacks since freshman year and is excited to bring the best possible hacker experience to this year's
                    iteration. In his free time, he enjoys swimming, playing piano, and traveling.
                </OfficerCard>
                <OfficerCard name="Corbin Platti" position="Secretary" src="/officers/corbin.png" languages={[]}>
                    {/* Corbin Platti is a ___. */}
                </OfficerCard>
                <OfficerCard name="Stella Su" position="Treasurer" src="/officers/stella.png" languages={[]} reverse>
                    {/* Stella Su is a ___. */}
                </OfficerCard>
            </div>
        </Section>
    )
}

type OfficerCardProps = {
    name: string, position: "Co-president" | "Co-vice president" | "Secretary" | "Treasurer",
    src: string, children: ReactNode, languages?: Language[], reverse?: boolean
}
function OfficerCard(props: OfficerCardProps) {
    const { name, position, src, children, languages, reverse } = props;
    return (
        <div className={'flex gap-8 md:gap-10 py-7' + (reverse ? ' flex-row-reverse' : '')}>
            <img src={src} alt={name} className="w-24 h-24 md:w-36 md:h-36 rounded-full object-cover flex-none" />
            <div className="flex-grow py-2.5">
                <h3 className={'text-3xl font-bold mb-1 underline underline-offset-4 decoration-[3px] ' + (position === 'Co-president' ? 'decoration-rose-500' : position === 'Co-vice president' ? 'decoration-orange-500' : position === 'Secretary' ? 'decoration-amber-500' : 'decoration-yellow-500')}>
                    {name}
                </h3>
                <h4 className="text-sm text-secondary mb-2">{position}</h4>
                <p>{children}</p>
                {languages && (
                    <div className="flex gap-2 text-lg mt-3">
                        {languages.map(l => <LanguageIcon key={l} language={l} />)}
                    </div>
                )}
            </div>
        </div>
    )
}

type Language = "react" | "next" | "vue" | "nuxt" | "svelte" | "ts" | "py" | "java" | "kt" | "rs" | "cs";
function LanguageIcon(props: { language: Language }) {
    switch (props.language) {
        case 'react': return <SiReact />;
        case 'next': return <SiNextdotjs />;
        case 'vue': return <SiVuedotjs />;
        case 'nuxt': return <SiNuxtdotjs />;
        case 'svelte': return <SiSvelte />;
        case 'ts': return <SiTypescript />;
        case 'py': return <SiPython />;
        case 'java': return <SiJava />;
        case 'kt': return <SiKotlin />;
        case 'rs': return <SiRust />;
        default: return <SiCsharp />;
    }
}
