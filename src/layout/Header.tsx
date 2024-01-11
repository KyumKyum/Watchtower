import React, {ReactElement} from "react";
import Link from "next/link";
import {getURL} from "@/logic/utils";

export default function Header(): ReactElement {
    return (
        <header>
            <div className="h-32 flex flex-row justify-between pr-5 pl-5">
                <div className="flex items-center">
                    <Link className="text-xl p-6 font-rocky" href={"/"}>{`Kyum's Watchtower`}</Link>
                </div>
                <div className={"flex items-center"}>
                    <ul className="flex list-none">
                        <Link href={"/profile"} className="text-xl p-6">Profile</Link>
                        <Link href={"/post"} className="text-xl p-6">Posts</Link>
                        <Link href={"/guest"} className="text-xl p-6">Guestbook</Link>
                        <Link href={'mailto:mycheesepasta@gmail.com'} className={"text-xl p-6"} rel={"noopener noreferrer"} target={"_blank"}>Contact</Link>
                    </ul>
                </div>
            </div>
        </header>
    );
}
