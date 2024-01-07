'use client'

import React, {JSX, ReactElement, useEffect, useRef, useState} from "react";
import ProjectSpecific from "@/component/profile/ProjectSpecific";
import PortfolioIntro from "@/component/profile/PortfolioIntro";
import ActivitySpecific from "@/component/profile/ActivitySpecific";

const loop = Array.from({ length: 7 }, (_, index) => (
    <p key={index} className={'flex text-7xl my-14 font-D2Coding'} style={{ display: 'inline-block', writingMode: 'vertical-rl' }}>
        {'P O R T F O L I O'}
    </p>
));

const Portfolio:React.FC = (): ReactElement => {
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
            <div ref={portfolioDivRef} className={"flex flex-col w-5/6 h-min space-y-16"}>
                <PortfolioIntro/>
                <ProjectSpecific/>
                <ActivitySpecific/>
            </div>
        </div>
    )
}

export default Portfolio;
