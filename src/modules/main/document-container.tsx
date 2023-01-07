import Select from "../../components/select";
import { TextSize, TextType } from "../../seed/mock";

interface Props {
    title: string;
    date: string;
    category: string;
    long: string;
}

export default function Document(props: Props) {
    const formatedDate = new Date(props.date).toLocaleDateString("en-US");
    return (
        <div className="relative w-full h-full max-w-2xl mx-auto">
            <div className="absolute w-12 h-12 top-2 right-2 bg-black1">
                <button className="p-1 text-white hover:bg-white/20 focus:ring-4 focus:outline-none focus:ring-white/30 rounded-full inline-flex justify-center items-center">
                    <img alt="3 Dot's Button" src="assets/3dots.svg" />
                </button>
            </div>
            <div className="flex flex-col gap-y-8">
                <h2 className="text-3xl font-semibold">{props.title}</h2>
                <div className="pb-3">
                    <div className="flex flex-row pb-3 gap-x-5">
                        <img
                            alt="Calendar Icon"
                            src="assets/calendar-icon.svg"
                        />
                        <span className="sm:w-24 w-full text-white/60">
                            Date
                        </span>
                        <span>{formatedDate}</span>
                    </div>
                    <hr className="w-full border-t-2 border-white/10" />
                    <div className="flex flex-row pt-3 gap-x-5">
                        <img alt="Folder Icon" src="assets/folder-idle.svg" />
                        <span className="sm:w-24 w-full text-white/60">
                            Folder
                        </span>
                        <span>{props.category}</span>
                    </div>
                </div>
                <div className="py-2 border-y-2 border-white/10 gap-x-8 flex items-center">
                    <Select items={TextType} defaultValue="p" />
                    <Select items={TextSize} defaultValue="16" width={48} />
                    <div className="flex items-center gap-x-2">
                        <button
                            aria-label="Bold"
                            className="p-1 text-white hover:bg-white/20 focus:ring-2 focus:outline-none focus:ring-white/30 rounded-lg inline-flex justify-center items-center"
                        >
                            <img src="assets/bold.svg" alt="bold" />
                        </button>
                        <button
                            aria-label="Italic"
                            className="p-1 text-white hover:bg-white/20 focus:ring-2 focus:outline-none focus:ring-white/30 rounded-lg inline-flex justify-center items-center"
                        >
                            <img src="assets/italic.svg" alt="italic" />
                        </button>
                        <button
                            aria-label="Underlined"
                            className="p-1 text-white hover:bg-white/20 focus:ring-2 focus:outline-none focus:ring-white/30 rounded-lg inline-flex justify-center items-center"
                        >
                            <img src="assets/underlined.svg" alt="underlined" />
                        </button>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <button
                            aria-label="Insert Image"
                            className="p-1 text-white hover:bg-white/20 focus:ring-2 focus:outline-none focus:ring-white/30 rounded-lg inline-flex justify-center items-center"
                        >
                            <img
                                src="assets/insert-image.svg"
                                alt="insert image"
                            />
                        </button>
                        <button
                            aria-label="Insert Link"
                            className="p-1 text-white hover:bg-white/20 focus:ring-2 focus:outline-none focus:ring-white/30 rounded-lg inline-flex justify-center items-center"
                        >
                            <img
                                src="assets/insert-link.svg"
                                alt="insert link"
                            />
                        </button>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <button
                            aria-label="Insert Table"
                            className="p-1 text-white hover:bg-white/20 focus:ring-2 focus:outline-none focus:ring-white/30 rounded-lg inline-flex justify-center items-center"
                        >
                            <img
                                src="assets/insert-table.svg"
                                alt="insert table"
                            />
                        </button>
                    </div>
                </div>
                <div className="pb-8">
                    {props.long.split("\n").map((i) => (
                        <p className="text-base font-normal mb-6 text-white leading-7">
                            {i}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
