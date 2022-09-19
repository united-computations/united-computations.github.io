import {ReactNode} from 'react';
import Section from './Section';
import {SiReact, SiNextdotjs, SiVuedotjs, SiNuxtdotjs, SiSvelte, SiTypescript, SiPython, SiJava, SiKotlin, SiRust, SiCsharp} from 'react-icons/si';


// The "Meet our officers" section on the home page.
export default function Officers() {
    return (
        <Section>
            {/* TODO: this header is a bit ugly with the non-flush officer section below it; consider */}
            {/* making font size smaller and/or centering? */}
            <h2 className="font-bold text-4xl mb-6">Meet our officers:</h2>

            <div className="max-w-3xl mx-auto divide-y divide-tertiary/50">
                <OfficerCard name="Saumya Singhal" position="Co-president" src="/officers/saumya.png" languages={['vue', 'nuxt', 'ts']}>
                    Saumya Singhal is an avid Vue developer, math addict, and founder of YMath and Gunn.One. She is also
                    the vice president of Physics Club and Math Circle and the founder and director of the JLS Math
                    Circle.
                </OfficerCard>
                <OfficerCard name="Alec Petridis" position="Co-president" src="/officers/alec.png" languages={['java', 'rs']} reverse>
                    Alec Petridis is an outspoken Rustacean and Antipodean. He enjoys finding exploits, participating in
                    CTFs, and doing deep dives into lower-level systems like kernels and the V8 compiler.
                </OfficerCard>
                <OfficerCard name="Kevin Yu" position="Co-vice president" src="/officers/kevin.png" languages={['react', 'next', 'ts', 'cs', 'kt', 'svelte']}>
                    Kevin Yu is a TypeScript enthusiast and co-founder of WATT. He is also the SEC Tech Commissioner, a
                    member of the GRT controls subgroup, and the GRT webmaster.
                </OfficerCard>
                <OfficerCard name="Roger Fan" position="Co-vice president" src="/officers/roger.JPG" languages={['react', 'next', 'ts']} reverse>
                    Roger Fan is a competitive mathlete and WATT contributor. He is also the co-vice president of Math
                    Circle and a devout Figma enthusiast.
                </OfficerCard>
                <OfficerCard name="Anthony Ho" position="Secretary" src="/officers/anthony.jpg" languages={['java', 'py']}>
                    Anthony Ho ___.
                </OfficerCard>
                <OfficerCard name="Vivien Chen" position="Treasurer" src="/officers/vivien.png" languages={['java', 'py']} reverse>
                    Vivien Chen is a Python and Scheme enthusiast interested in learning more about AI. She is also a
                    rookie in GRT. Sometimes she attempts to competitive program.
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
    const {name, position, src, children, languages, reverse} = props;
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
function LanguageIcon(props: {language: Language}) {
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
