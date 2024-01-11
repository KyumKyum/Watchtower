import React, {ReactElement} from "react";
import {motion} from "framer-motion";
import {hidden} from "next/dist/lib/picocolors";
import Link from "next/link";
import useDrawerStateStore from "@/stores/drawerStateStores";

interface OpenState {
    open:boolean
}
const Sidebar = ({open}:OpenState):ReactElement => {
    const {setOpen} = useDrawerStateStore();

    return (
        <motion.div initial={false} className={"z-10"} animate={open? "open": "closed"} variants={{
            open: {
                opacity: 1,
            },
            closed: {
                opacity: 0,
            },
        }}
        transition={{
            ease: "easeInOut"
        }}>
            <div className={"absolute inset-y-0 right-0 top-0 h-full w-64 bg-black"}>
                <div className={"flex flex-col w-full h-80 items-center my-6"}>
                    <Link className="text-sm p-6 font-rocky" href={"/"} onClick={() => {setOpen(false)}}>{`Kyum's Watchtower`}</Link>
                    <ul className="flex flex-col list-none">
                        <Link href={"/profile"} className="text-xl py-4" onClick={() => {setOpen(false)}}>Profile</Link>
                        <Link href={"/post"} className="text-xl py-4" onClick={() => {setOpen(false)}}>Posts</Link>
                        <Link href={"/guest"} className="text-xl py-4" onClick={() => {setOpen(false)}}>Guestbook</Link>
                        <Link href={'mailto:mycheesepasta@gmail.com'} className={"text-xl py-4"} rel={"noopener noreferrer"} target={"_blank"}>Contact</Link>
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default Sidebar;

