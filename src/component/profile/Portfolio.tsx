import React, {ReactElement} from "react";
import Greeting from "@/component/profile/Greeting";
import Introduction from "@/component/profile/Introduction";
import DeveloperIntro from "@/component/profile/DeveloperIntro";
import TechStack from "@/component/profile/TechStack";
import FEIntro from "@/component/profile/FEIntro";
import ScrollAnimFadeInOutWrapper from "@/wrapper/ScrollAnimFadeInOutWrapper";
import PartialPortfolio_1 from "@/component/profile/PartialPortfolio_1";
import PartialPortfolio_2 from "@/component/profile/PartialPortfolio_2";

const Portfolio:React.FC = (): ReactElement => {
    return (
        <div className={"flex flex-row w-full"}>
            <div className={"flex flex-col items-center w-1/6 overflow-hidden"}>
                <div className={"flex flex-col w-full items-center animate-scroll"}>
                    <p className={'flex text-7xl my-14 font-D2Coding'} style={{display:'inline-block', writingMode:'vertical-rl'}}>{'P O R T F O L I O'}</p>
                    <p className={'flex text-7xl my-14 font-D2Coding'} style={{display:'inline-block', writingMode:'vertical-rl'}}>{'P O R T F O L I O'}</p>
                    <p className={'flex text-7xl my-14 font-D2Coding'} style={{display:'inline-block', writingMode:'vertical-rl'}}>{'P O R T F O L I O'}</p>
                </div>
            </div>
            <div className={"flex flex-col w-5/6 space-y-16"}>
                {[PartialPortfolio_1, PartialPortfolio_2].map((Component, index) => (
                    <ScrollAnimFadeInOutWrapper key={index} fastRender={true}>
                        <Component />
                    </ScrollAnimFadeInOutWrapper>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;
