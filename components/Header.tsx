import {ReactNode} from 'react';


// The code-editor-inspired header section on the home page.
export default function Header() {
    return (
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
