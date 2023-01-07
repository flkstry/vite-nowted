import type { ReactNode } from "react";

interface Props {
    imgSrc: string;
    title: string;
    message: string;
    action: ReactNode;
}

export default function EmptyDoc(props: Props) {
    return (
        <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <div className="w-full max-w-2xl items-center flex flex-col justify-center space-y-2.5">
                    <img
                        alt="alert icon"
                        className="w-20 h-20"
                        src={props.imgSrc}
                    />
                    <h3 className="text-center w-full font-semibold text-2xl">
                        {props.title}
                    </h3>
                    <p className="text-center pb-4 w-full text-white/60 font-normal text-base">
                        {props.message}
                    </p>
                    {props.action}
                </div>
            </div>
        </div>
    );
}
