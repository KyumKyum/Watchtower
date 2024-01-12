import React, {ReactElement} from "react";

export default function GuestContainer (): ReactElement {
    return (
        <div className={"flex flex-col w-full h-full"}>
            <div className={"flex flex-row w-full h-full items-center"}>
                <p className={"text-xl"}>{'Developing...'}</p>
            </div>
        </div>
    )
}
