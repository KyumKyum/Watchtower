import React, {ReactElement} from "react";
import BlogHeader from "@/layout/BlogHeader";

export default function Canvas({children}: React.PropsWithChildren): ReactElement {
    //* Add Global Footer if footer is needed
    return (
        <>
            <BlogHeader/>
            <main className={"flex mx-10"}>{children}</main>
        </>
    )
}
