export default function CardItem({
    id,
    title,
    date,
    slug,
    short,
}: {
    id: string | number;
    title: string;
    date: string;
    slug: string;
    short: string;
}) {
    const formatedDate = new Date(date).toLocaleDateString("en-US");
    return (
        <button className="block text-white/90 w-full p-5 bg-white/5 rounded-[3px] shadow-md hover:bg-white/20">
            <h5 className="w-full text-left mb-3 text-lg font-semibold tracking-tight">
                {title}
            </h5>
            <div className="text-white/40 font-normal inline-flex items-center justify-start w-full text-left">
                {formatedDate}
                <p className="truncate ml-2 text-white/60">{short}</p>
            </div>
        </button>
    );
}
