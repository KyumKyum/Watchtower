import React, {ReactElement} from "react";
import BlogHeader from "@/layout/BlogHeader";

export default function Canvas({children}: React.PropsWithChildren): ReactElement {
    //* Add Global Footer if possible
    return (
        <>
            <BlogHeader/>
            <main className={"flex mx-10"}>{children}</main>
        </>
    )
}
