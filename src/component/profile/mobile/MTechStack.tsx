import React, {ReactElement} from "react";
import IconScroll from "@/component/profile/IconScroll";
import MStackList from "@/component/profile/mobile/MStackList";

export default function MTechStack(): ReactElement {
    return (
        <div className={"flex flex-row justify-center items-center w-full"}>
            <div className={"flex flex-col items-center w-full"}>
                <p className={'text-xl font-bold text-center'}>{'Introducing'}<br/>{'My Tech-Stack'}</p>
                <div className={"flex flex-row justify-center items-center mt-5"}>
                    <IconScroll animate={'animate-scroll-reverse'}/>
                    <MStackList/>
                    <IconScroll animate={'animate-scroll'}/>
                </div>
            </div>
        </div>
    )
}
