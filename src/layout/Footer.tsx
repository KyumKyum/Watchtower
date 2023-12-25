import React, {ReactElement} from "react";

export default function Footer(): ReactElement {
    return (
        <footer>
            <div className={"flex w-full"}>
                <div className={"flex flex-row  justify-center items-center w-full h-20 m-3"}>
                    <p className={'text-lg font-mariburi'}>{'For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.  -  2 Timothy 1:7'}</p>
                </div>
            </div>
        </footer>
    )
}
