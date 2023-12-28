import React, {ReactElement} from "react";
import IconScroll from "@/component/profile/IconScroll";
import StackList from "@/component/profile/StackList";

export default function TechStack(): ReactElement {
    return (
        <div className={"flex flex-row justify-center items-center w-full"}>
            <div className={"flex flex-col items-center w-full"}>
                <p className={'text-6xl font-bold'}>{'Introducing My Tech-Stack'}</p>
                <div className={"flex flex-row w-5/6 justify-center items-center mt-5"}>
                    <IconScroll animate={'animate-scroll-reverse'}/>
                    <StackList/>
                    <IconScroll animate={'animate-scroll'}/>
                </div>
            </div>
        </div>
    )
}
