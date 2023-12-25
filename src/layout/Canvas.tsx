import React, {ReactElement} from "react";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

export default function Canvas({children}: React.PropsWithChildren): ReactElement {
    //* Add Global Footer if footer is needed
    return (
        <div className={"flex flex-col w-full"}>
            <Header/>
            <main className={"flex mx-10 w-full`"}>{children}</main>
            <Footer/>
        </div>
    )
}
