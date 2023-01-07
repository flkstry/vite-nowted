export default function FolderNavigation({
    item,
}: {
    item: { link: string; label: string; icon?: string }[];
}) {
    const activeLink = "/makan";
    return (
        <div className="my-4">
            <h2 className="text-white/60 font-semibold text-sm py-3 px-6 flex justify-between items-center">
                Folders
                <img src="assets/folder.svg" alt="Folder Icon" />
            </h2>
            <nav className="block space-y-[5px] max-h-[40vh] scrollbar-hide overflow-y-auto">
                {item.map((i) => (
                    <button
                        key={i.link}
                        className={`${
                            activeLink === i.link ? "bg-white/5" : ""
                        } w-full focus:outline-none py-2 px-6 text-white/60 hover:bg-white/20 focus:ring-2 focus:ring-gray-300 font-medium text-base inline-flex justify-start items-center`}
                    >
                        <img
                            alt={i.label}
                            src={
                                activeLink === i.link
                                    ? "assets/folder-active.svg"
                                    : "assets/folder-idle.svg"
                            }
                        />
                        <span className="ml-4 truncate">{i.label}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
}
