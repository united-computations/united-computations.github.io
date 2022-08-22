import {ReactNode} from 'react';


// A reusable `Section` component which wraps a container around its children.
export default function Section(props: {children: ReactNode, secondary?: boolean}) {
    return (
        <section className={'py-16' + (props.secondary ? ' dark:bg-dark' : '')}>
            <div className="container">
                {props.children}
            </div>
        </section>
    )
}
