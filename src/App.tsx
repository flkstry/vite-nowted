import Layout from "./modules/layout";
import EmptyDoc from "./modules/main/empty-document";
import Document from "./modules/main/document-container";
import mock from "./seed/mock.json";

export default function App() {
    const data = mock.data[0];
    return (
        <Layout>
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
        </Layout>
    );
}
