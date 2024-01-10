import React, {ReactElement} from "react";
import Slogan from "@/component/main/Slogan";
import Image from "next/image";
import AuthorImage from "@/public/images/main.webp";
import Intro from "@/component/main/Intro";

export default function PostContainer (): ReactElement {
    return (
        <div className={"flex flex-col w-full h-full"}>
            <div className={"flex flex-row w-full h-full items-center"}>
                <p className={"text-6xl"}>{'Developing...'}</p>
            </div>
        </div>
    )
}
