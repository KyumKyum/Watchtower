import React, {ReactElement} from "react";


export default function PostContainer (): ReactElement {
    return (
        <div className={"flex flex-col w-full h-full"}>
            <div className={"flex flex-row w-full h-full items-center"}>
                <p className={"text-6xl"}>{'Developing...'}</p>
            </div>
        </div>
    )
}
