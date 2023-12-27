import {ReactElement} from "react";
import Greeting from "@/component/profile/Greeting";


export default function ProfileContainer(): ReactElement {
    return (
        <div className={"flex flex-col w-full h-full"}>
            <div className={"animate__animated animate__slideInUp"}>
                <Greeting/>
            </div>
        </div>
    )
}
