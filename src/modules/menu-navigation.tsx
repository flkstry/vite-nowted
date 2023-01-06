export default function MenuNavigation({
    item,
}: {
    item: { link: string; label: string; icon?: string }[];
}) {
    const activeLink = "/makan";
    return (
        <div className="my-4">
            <h2 className="text-white/60 font-semibold text-sm py-3 px-6 flex items-center">
                More
            </h2>
            <nav className="block space-y-[5px]">
                {item.map((i) => (
                    <button
                        className={`${
                            activeLink === i.link ? "bg-white/5" : ""
                        } w-full focus:outline-none py-2 px-6 text-white hover:bg-white/20 focus:ring-2 focus:ring-gray-300 font-medium text-base inline-flex justify-start items-center`}
                    >
                        <img alt={i.label} src={i.icon} />
                        <span className="ml-4 truncate">{i.label}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
}
