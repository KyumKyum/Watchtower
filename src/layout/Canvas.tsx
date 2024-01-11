"use client"

import React, {ReactElement} from "react";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import useMobileCheck from "@/hook/useMobileCheck";
import MHeader from "@/layout/MHeader";
import MFooter from "@/layout/MFooter";
import Sidebar from "@/layout/Sidebar";
import useDrawerStateStore from "@/stores/drawerStateStores";

export default function Canvas({children}: React.PropsWithChildren): ReactElement {
    const {open} = useDrawerStateStore();

    // const opacityTransition = useTransition(open, ({
    //     from: {opacity: 1},
    //     to: {opacity: 0.3},
    // }))

    const isMobile = useMobileCheck();
    return (
        <div className={"flex flex-col w-full"}>
            {isMobile ? <MHeader/>: <Header/>}
            {(isMobile) && <Sidebar open={open}/>}
            <main className={"flex mx-10 w-full`"}>{children}</main>
            {isMobile ? <MFooter/> : <Footer/>}
        </div>
    )
}
