export default function EmptyDoc() {
    return (
        <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <div className="w-full max-w-md items-center flex flex-col justify-center space-y-2.5">
                    <img
                        alt="Document Icon"
                        className="w-20 h-20"
                        src="assets/documents.svg"
                    />
                    <h3 className="text-center w-full font-semibold text-2xl">
                        Select a note to view
                    </h3>
                    <p className="text-center w-full text-white/60 font-normal text-base">
                        Choose a note from the list on the left to view its
                        contents, or create a new note to add to your
                        collection.
                    </p>
                </div>
            </div>
        </div>
    );
}
