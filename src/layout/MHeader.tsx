import React, {ReactElement} from "react";
import Link from "next/link";
import HBG from '../../public/static/svg/hbg.svg';
import useDrawerStateStore from "@/stores/drawerStateStores";

export default function MHeader(): ReactElement {
    const {open, setOpen} = useDrawerStateStore();
    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <header>
            <div className={"fixed top-3 left-3"} onClick={() => handleClick()}>
                <HBG className={"fill-white stroke-white min-h-[40px] min-w-[40px]"}/>
            </div>
            <div className="h-32 flex flex-col justify-center items-center pr-5 pl-5">
                <div className="flex items-center">
                    <Link className="text-sm p-6 font-rocky" href={"/"}>{`Kyum's Watchtower`}</Link>
                </div>
            </div>
        </header>
    );
}
