import React, {ReactElement} from "react";
import Greeting from "@/component/main/Greeting";

export default function MainContainer (): ReactElement {
    return (
        <div className={"flex flex-col w-full h-full"}>
            <div className={"flex flex-row w-full h-full items-center animate__animated animate__fadeInUp"}>
                <Greeting/>
            </div>
        </div>
    )
}
