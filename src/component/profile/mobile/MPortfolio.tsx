'use client'

import React, {JSX, ReactElement, useEffect, useRef, useState} from "react";
import MPortfolioIntro from "@/component/profile/mobile/MPortfolioIntro";
import MProjectSpecific from "@/component/profile/mobile/MProjectSpecific";
import MActivitySpecific from "@/component/profile/mobile/MActivitySpecific";

const loop = Array.from({ length: 30 }, (_, index) => (
    <p key={index} className={'flex text-2xl my-14 font-D2Coding'} style={{ display: 'inline-block', writingMode: 'vertical-rl' }}>
        {'P O R T F O L I O'}
    </p>
));

const MPortfolio:React.FC = (): ReactElement => {
    const [portfolioHeight, setPortfolioHeight] = useState<undefined|number>(undefined);
    const portfolioDivRef:React.MutableRefObject<null|HTMLDivElement> = useRef(null);

    useEffect(() => {
        setPortfolioHeight(portfolioDivRef.current?.getBoundingClientRect().height);
    },[])
    return (
        <div className={"flex flex-row w-full"}>
            {portfolioHeight != undefined &&
                <div className={"flex flex-col w-1/6 overflow-hidden"} style={{height: portfolioHeight}}>
                    <div className={"flex flex-col w-full items-center animate-scroll"}>
                        {loop}
                    </div>
                </div>
            }
            <div ref={portfolioDivRef} className={"flex flex-col w-5/6 h-min space-y-8"}>
                <MPortfolioIntro/>
                <MProjectSpecific/>
                <MActivitySpecific/>
            </div>
        </div>
    )
}

export default MPortfolio;
