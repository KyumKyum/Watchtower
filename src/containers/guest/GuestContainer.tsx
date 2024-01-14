import React, {ReactElement} from "react";
import InputForm from "@/component/guest/InputForm";
import ScrollAnimFadeInOutWrapper from "@/wrapper/ScrollAnimFadeInOutWrapper";

export default function GuestContainer (): ReactElement {
    return (
        <div className={"flex flex-col items-center w-full h-full m-14"}>
            <div className={"w-full"}>
                <ScrollAnimFadeInOutWrapper fastRender={false}>
                    <InputForm/>
                </ScrollAnimFadeInOutWrapper>
            </div>
        </div>
    )
}
