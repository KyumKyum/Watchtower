import React, {ReactElement} from "react";
import Slogan from "@/component/main/Slogan";

export default function MainContainer (): ReactElement {
    return (
        <div className={"w-full h-svh"}>
            <div className={"h-3/4 w-1/2"}>
                <Slogan/>
            </div>
        </div>
    )
}
