interface Props {
    link: string;
    icon: string;
    label: string;
    activeLink?: boolean;
    activeLinkStyle?: string;
    activeLinkIcon?: string;
}

export default function NavigationItem(props: Props) {
    const activeLinkStyle = props.activeLinkStyle
        ? props.activeLinkStyle
        : "bg-white/5 text-white/80";

    const activeLinkIcon = props.activeLinkIcon
        ? props.activeLinkIcon
        : props.icon;

    return (
        <button
            key={props.link}
            className={`${
                props.activeLink ? activeLinkStyle : "text-white/60"
            } w-full focus:outline-none py-2 px-6 hover:bg-white/20 focus:ring-2 focus:ring-gray-300 font-medium text-base inline-flex justify-start items-center`}
        >
            <img
                alt={props.label}
                src={props.activeLink ? activeLinkIcon : "assets/documents.svg"}
            />
            <span className="ml-4 truncate">{props.label}</span>
        </button>
    );
}
