"use client"

import React, {ReactElement} from "react";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import useMobileCheck from "@/hook/useMobileCheck";
import MHeader from "@/layout/MHeader";
import MFooter from "@/layout/MFooter";
import Sidebar from "@/layout/Sidebar";
import useDrawerStateStore from "@/stores/drawerStateStores";
import {DeviceContext} from "@/context/DeviceContext";
import {cls} from "@/logic/utils";

interface CanvasProps {
    children: React.ReactNode,
    isSSRMobile: boolean
}

export default function Canvas({children, isSSRMobile}: CanvasProps): ReactElement {
    const {open, setOpen} = useDrawerStateStore();

    // const opacityTransition = useTransition(open, ({
    //     from: {opacity: 1},
    //     to: {opacity: 0.3},
    // }))

    const isMobile = useMobileCheck();

    return (
        <>
            <div className={cls("flex flex-col w-full",  open ? "opacity-40" : "")}
                 onClick={() => {
                    if(open) setOpen(!open)
                }
            }>
                {(isSSRMobile || isMobile) ? <MHeader/>: <Header/>}
                <DeviceContext.Provider value={{isSSRMobile}}>
                    <main className={"flex mx-10"}>{children}</main>
                </DeviceContext.Provider>
                {(isSSRMobile || isMobile) ? <MFooter/> : <Footer/>}
            </div>
            {(isSSRMobile || isMobile) && <Sidebar open={open}/>}
        </>
    )
}
