import {
    RecentItemNavigation,
    FolderItemNavigation,
    MenuItemNavigation,
} from "../seed/mock";
import type { ReactNode } from "react";
import FolderNavigation from "./navigation/folder-navigation";
import MenuNavigation from "./navigation/menu-navigation";
import RecentDocumentNavigation from "./navigation/recent-document-navigation";
import mock from "../seed/mock.json";
import CardItem from "../components/card";

export default function Layout({ children }: { children: ReactNode }) {
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
                <RecentDocumentNavigation item={RecentItemNavigation} />
                <FolderNavigation item={FolderItemNavigation} />
                <MenuNavigation item={MenuItemNavigation} />
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
                    {mock.data.map((i) => (
                        <li key={i.id}>
                            <CardItem {...i} />
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
