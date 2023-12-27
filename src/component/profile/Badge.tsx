import {ReactElement} from "react";
import {SVGItem} from "../../../global";
import Link from "next/link";

interface BadgeProps {
    icon: SVGItem;
    name: string;
    href: string;
}

export default function Badge({icon:Icon, name, href}: BadgeProps):ReactElement {
    return (
        <div className={"flex flex-row mx-5"}>
            <Icon stroke={"white"} fill={"white"} />
            <Link href={href} className={"mx-2"} rel={"noopener noreferrer"} target={"_blank"}>{name}</Link>
        </div>
    )
}
