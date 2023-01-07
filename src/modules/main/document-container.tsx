import Select from "../../components/select";
import { TextSize, TextType } from "../../seed/navigation";

export default function Document() {
    return (
        <div className="relative w-full h-full">
            <div className="absolute w-12 h-12 top-2 right-2">
                <button className="p-1 text-white hover:bg-white/20 focus:ring-4 focus:outline-none focus:ring-white/30 rounded-full inline-flex justify-center items-center">
                    <img alt="3 Dot's Button" src="assets/3dots.svg" />
                </button>
            </div>
            <div className="flex flex-col gap-y-8">
                <h2 className="text-3xl font-semibold">
                    Reflection on the Month of June
                </h2>
                <div className="pb-3">
                    <div className="flex flex-row pb-3 gap-x-5">
                        <img
                            alt="Calendar Icon"
                            src="assets/calendar-icon.svg"
                        />
                        <span className="sm:w-24 w-full text-white/60">
                            Date
                        </span>
                        <span>21/06/2022</span>
                    </div>
                    <hr className="w-full border-t-2 border-white/10" />
                    <div className="flex flex-row pt-3 gap-x-5">
                        <img alt="Folder Icon" src="assets/folder-idle.svg" />
                        <span className="sm:w-24 w-full text-white/60">
                            Folder
                        </span>
                        <span>Personal</span>
                    </div>
                </div>
                <div className="py-2 border-y-2 border-white/10 gap-x-8 flex items-center">
                    <Select items={TextType} defaultValue="p" />
                    <Select items={TextSize} defaultValue="16" width={48} />
                </div>
            </div>
        </div>
    );
}
