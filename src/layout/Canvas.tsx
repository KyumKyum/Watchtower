import React, {ReactElement} from "react";
import BlogHeader from "@/layout/BlogHeader";

export default function Canvas({children}: React.PropsWithChildren): ReactElement {
    //* Add Global Footer if footer is needed
    return (
        <div className={"flex flex-col w-full"}>
            <BlogHeader/>
            <main className={"flex mx-10 w-full`"}>{children}</main>
        </div>
    )
}
