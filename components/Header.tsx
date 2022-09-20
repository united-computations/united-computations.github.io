import {ReactNode} from 'react';


// The code-editor-inspired header section on the home page.
export default function Header() {
    return (
        <section className="container relative pt-32">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-10">
                United Computations
                <span className="animate-blink">_</span>
            </h1>

            <div className="flex flex-col gap-3 mb-9 mx-auto">
                <CodeText index={1}>
                    United Computations is one of the largest and longest running CS clubs at Gunn.
                </CodeText>
                <CodeText index={2}>
                    Through regular lunch meetings and our annual hackathon, we aim to spread interest in computer science and create a
                    passionate community of programmers.
                </CodeText>
                <CodeText index={3}>
                    Join our community Wednesdays at lunch in N-215 and have fun with us!
                </CodeText>
            </div>

            <div className="flex flex-col md:flex-row justify-center divide-y-2 md:divide-y-0 md:divide-x-2 divide-tertiary mb-12">
                <DivideCard>
                    <p className="text-sm text-secondary">Room:</p>
                    <strong className="text-2xl">N-215</strong>
                </DivideCard>
                <DivideCard>
                    <p className="text-sm text-secondary">Day:</p>
                    <strong className="text-2xl">Wednesday</strong>
                </DivideCard>
                <DivideCard>
                    <p className="text-sm text-secondary">Time:</p>
                    <strong className="text-2xl">Lunch</strong>
                </DivideCard>
            </div>
        </section>
    )
}

function CodeText(props: {index: number, children: ReactNode}) {
    return (
        <p className="text-lg text-center font-mono flex gap-3 items-center justify-center">
            <code className="absolute left-4 text-secondary py-3.5 pr-5 lg:border-r lg:border-gray-600">{props.index}</code>
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
        <div className="flex flex-col py-4 md:py-0 md:px-6 justify-center">
            {props.children}
        </div>
    )
}
