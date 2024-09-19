import { ReactNode } from 'react';
import Section from './Section';
import { SiReact, SiNextdotjs, SiVuedotjs, SiNuxtdotjs, SiSvelte, SiTypescript, SiPython, SiJava, SiKotlin, SiRust, SiCsharp, SiCplusplus, SiC} from 'react-icons/si';


// The "Meet our officers" section on the home page.
export default function Officers() {
    return (
        <Section>
            {/* TODO: this header is a bit ugly with the non-flush officer section below it; consider */}
            {/* making font size smaller and/or centering? */}
            <h2 className="font-bold text-4xl mb-6">Meet our officers:</h2>

            <div className="max-w-3xl mx-auto divide-y divide-tertiary/50">
                <OfficerCard name="Stella Su" position="President" src="/officers/stella.png" languages={['py', 'java', 'cplusplus']}>
                    Stella Su is an avid programmer interested in artificial intelligence and computational biology. She has 
                    had some experience with using Computer Vision and Natural Language Processing(NLP) models.
                </OfficerCard>
                <OfficerCard name="Daniel Kou" position="Vice president" src="/officers/daniel.png" languages={['java', 'py', 'clang', 'cplusplus', ]}>
                    Daniel Kou is a C++ and Python enthusiast who is interested in data science, robotics control, and AI. 
                    He does FRC and competitive programming/physics/math. 
                </OfficerCard>
                <OfficerCard name="Hannah Mei" position="Secretary" src="/officers/hannah.jpg" languages={['java', 'py']}>
                    Hannah Mei is a junior at Gunn High School with experience in java, scheme, and a bit of python. She is 
                    most interested in learning more about web development
                </OfficerCard>
                <OfficerCard name="Mary Yu" position="Treasurer" src="/officers/mary.png" languages={[]} reverse>
                    {/* Stella Su is a ___. */}
                </OfficerCard>
            </div>
        </Section>
    )
}

type OfficerCardProps = {
    name: string, position: "Co-president" | "President" | "Co-vice president" | "Vice President" | "Secretary" | "Treasurer",
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

type Language = "react" | "next" | "vue" | "nuxt" | "svelte" | "ts" | "py" | "java" | "kt" | "rs" | "cs" | "cplusplus" | "clang";
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
        case 'cplusplus': return <SiCplusplus />;
        case 'clang': return <SiC />;
        default: return <SiCsharp />;
    }
}
