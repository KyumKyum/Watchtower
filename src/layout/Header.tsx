import React, {ReactElement} from "react";
import Link from "next/link";

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
                        <li className="text-xl p-6">Posts</li>
                        <li className="text-xl p-6">Guestbook</li>
                        <li className="text-xl p-6">Contact</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
