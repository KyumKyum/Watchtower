import React, {ReactElement} from "react";
import Slogan from "@/component/main/Slogan";
import Image from "next/image";
import AuthorImage from '../../public/images/main.jpeg'

export default function MainContainer (): ReactElement {
    return (
        <div className={"flex flex-col w-full h-full"}>
            <div className={"flex flex-row w-full h-full items-center"}>
                <div className={"h-3/4 w-1/2"}>
                    <Slogan/>
                </div>
                <div className={"flex justify-center items-center h-3/4 w-1/2 animate__animated animate__fadeInUp"}>
                    <Image className="object-cover w-4/5 h-4/5" src={AuthorImage} alt={'main'}/>
                </div>
            </div>
            <div className={"flex flex-row justify-end h-20 m-10 animate__animated animate__fadeInUp animate__delay-1s"}>
                <p className={'text-7xl font-bold'}>{'Lim Kyu Min (Jay Lim)'}</p>
            </div>

        </div>
    )
}
