export default function QuickLink(props:{to: string, title: string, className?: string}){
    return (
        <a href={props.to} target="_blank" className={`block px-6 py-4 text-center text-lg text-white rounded-md font-bold ${props.className}`}>
            {props.title}
        </a>
    )
}