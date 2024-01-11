import React, {ReactElement} from "react";
import MGreeting from "@/component/main/MGreeting";

export default function MainMobileContainer (): ReactElement {
    return (
        <div className={"flex flex-col w-full h-full"}>
            <div className={"flex flex-row w-full h-full items-center animate__animated animate__fadeInUp"}>
                <MGreeting/>
            </div>
        </div>
    )
}
