import {ReactNode} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {FiX} from 'react-icons/fi';
import {VscChromeMinimize, VscChromeRestore, VscChromeClose} from 'react-icons/vsc';


export default function Nav() {
    return (
        <header>
            <div className="text-xs border-b border-secondary/10 text-secondary px-2.5 py-2 flex gap-3.5 items-center">
                <img src="/lambda.png" className="h-4 w-4" alt="Lambda" />
                <span>File</span>
                <span>Edit</span>
                <span>Selection</span>
                <span>View</span>
                <span>Go</span>
                <span>Run</span>
                <span>Terminal</span>
                <span>Help</span>
                <VscChromeMinimize className="ml-auto" />
                <VscChromeRestore />
                <VscChromeClose />
            </div>
            <nav className="flex bg-grape divide-x divide-secondary/10">
                <NavTab href="/">index.tsx</NavTab>
                <NavTab href="/links">links.tsx</NavTab>
            </nav>
        </header>
    )
}

function NavTab(props: {href: string, children: ReactNode}) {
    const {pathname} = useRouter();
    const active = pathname === props.href;

    return (
        <Link href={props.href}>
            <a className={'flex gap-2 items-center px-4 py-2 ' + (!active ? 'text-secondary hover:bg-midnight' : 'bg-midnight')}>
                <span className="pb-0.5">{props.children}</span>
                <FiX className="text-xs" />
            </a>
        </Link>
    )
}
