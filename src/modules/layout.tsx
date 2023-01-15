import {
    RecentItemNavigation,
    FolderItemNavigation,
    MenuItemNavigation,
} from "../seed/mock";
import type { ReactNode } from "react";
import CardItem from "../components/card";
import NavigationItem from "../components/nav-item";

export default function Layout({
    children,
    articleLists,
}: {
    children: ReactNode;
    articleLists: {
        id: string;
        title: string;
        slug: string;
        category: string;
        short: string;
        long: string;
        date: string;
    }[];
}) {
    const NewRecentItemNavigation = RecentItemNavigation.map((i) =>
        i.link === "/makan"
            ? {
                  ...i,
                  activeLink: true,
              }
            : { ...i }
    );

    const NewFolderItemNavigation = FolderItemNavigation.map((i) =>
        i.link === "/makan"
            ? {
                  ...i,
                  activeLink: true,
              }
            : { ...i }
    );

    const NewMenuItemNavigation = MenuItemNavigation.map((i) =>
        i.link === "/makan"
            ? {
                  ...i,
                  activeLink: true,
              }
            : {
                  ...i,
              }
    );

    return (
        <main className="w-screen h-screen flex overflow-hidden bg-black1 text-white">
            <aside className="w-[300px] h-screen" aria-label="Sidebar">
                <div className="flex py-8 items-center justify-between px-3">
                    <h1 className="px-3">
                        <img alt="Nowted Logo" src="assets/nowted-logo.svg" />
                    </h1>
                    <button className="focus:outline-none p-2 hover:bg-white/20 rounded-md focus:ring-2 focus:ring-gray-300 inline-flex justify-start items-center">
                        <img alt="Search Button" src="assets/search-icon.svg" />
                    </button>
                </div>
                <div className="px-5">
                    <button
                        type="button"
                        className="w-full text-white leading-10 bg-white/5 hover:bg-white/20 focus:ring-4 focus:outline-none focus:ring-white/30 font-semibold rounded-md gap-x-2 text-base text-center inline-flex justify-center items-center"
                    >
                        <img alt="Plus Icon" src="assets/plus-icon.svg" /> New
                        Note
                    </button>
                </div>
                <div className="my-4">
                    <h2 className="text-white/60 font-semibold text-sm py-3 px-6">
                        Recent
                    </h2>
                    <nav className="block space-y-[5px]">
                        {NewRecentItemNavigation.map((i) => (
                            <NavigationItem
                                {...i}
                                key={i.link}
                                icon="assets/documents.svg"
                                activeLinkStyle="bg-purple1"
                            />
                        ))}
                    </nav>
                </div>
                <div className="my-4">
                    <h2 className="text-white/60 font-semibold text-sm py-3 px-6 flex justify-between items-center">
                        Folders
                        <img src="assets/folder.svg" alt="Folder Icon" />
                    </h2>
                    <nav className="block space-y-[5px]">
                        {NewFolderItemNavigation.map((i) => (
                            <NavigationItem
                                {...i}
                                key={i.link}
                                icon="assets/folder-idle.svg"
                                activeLinkIcon="assets/folder-active.svg"
                            />
                        ))}
                    </nav>
                </div>
                <div className="my-4">
                    <h2 className="text-white/60 font-semibold text-sm py-3 px-6">
                        More
                    </h2>
                    <nav className="block space-y-[5px]">
                        {NewMenuItemNavigation.map((i) => (
                            <NavigationItem {...i} key={i.link} />
                        ))}
                    </nav>
                </div>
            </aside>
            <aside
                className="bg-black2 w-[350px] h-screen"
                aria-label="Sidebar"
            >
                <div className="flex py-8 items-center justify-between px-3">
                    <h1 className="px-2 text-2xl font-semibold text-white">
                        Personal
                    </h1>
                </div>
                <ul className="px-5 space-y-4 h-[calc(100vh-112px)] scrollbar-hide overflow-y-scroll">
                    {articleLists.map((i) => (
                        <li key={i.id}>
                            <CardItem {...i} key={i.id} />
                        </li>
                    ))}
                </ul>
            </aside>
            <section className="p-14 w-full min-h-screen overflow-y-auto scrollbar-hide">
                {children}
            </section>
        </main>
    );
}
