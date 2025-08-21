import {ReactNode} from "react";

interface BannerProps {
    children: ReactNode;
}

export default function Banner({ children }: BannerProps){
    return(
        <div className="h-52 bg-blue-500 flex items-center justify-center">
            <h1 className="text-5xl text-white">{children}</h1>
        </div>
    )
}