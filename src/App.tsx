import Layout from "./modules/layout";
import EmptyDoc from "./modules/main/empty-document";
import Document from "./modules/main/document-container";
import { generateArticle } from "./seed/mock-article";
import { useCallback, useEffect, useState } from "react";
import { FolderItemNavigation } from "./seed/mock";

export default function App() {
    const [data, setData] = useState<
        {
            id: string;
            title: string;
            slug: string;
            category: string;
            short: string;
            long: string;
            date: string;
        }[]
    >([]);

    const generate = useCallback(() => {
        const folderLists = FolderItemNavigation.map((i) => i.label);
        const generatedData = generateArticle(50, folderLists);
        setData(generatedData);
    }, []);

    useEffect(() => {
        generate();
    }, []);

    return (
        <Layout articleLists={data}>
            {data && data.length > 0 ? (
                <Document {...data[Math.floor(Math.random() * 4)]} />
            ) : (
                <EmptyDoc
                    title="Restore “Reflection on the Month of June”"
                    message="Don't want to lose this note? It's not too late! Just click the 'Restore' button and it will be added back to your list. It's that simple."
                    action={
                        <button className="px-7 focus:outline-none text-white mt-8 p-2 bg-purple1 hover:bg-white/20 rounded-md focus:ring-2 focus:ring-gray-300 inline-flex justify-start items-center">
                            Restore
                        </button>
                    }
                    imgSrc="assets/restore-icon.svg"
                />
            )}
        </Layout>
    );
}
