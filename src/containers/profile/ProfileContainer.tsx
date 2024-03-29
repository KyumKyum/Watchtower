
import React, {ReactElement, useCallback, useEffect, useRef} from "react";
import Greeting from "@/component/main/Greeting";
import Introduction from "@/component/profile/Introduction";
import ScrollAnimFadeInOutWrapper from "@/wrapper/ScrollAnimFadeInOutWrapper";
import DeveloperIntro from "@/component/profile/DeveloperIntro";
import TechStack from "@/component/profile/TechStack";
import Portfolio from "@/component/profile/Portfolio";
import TechSpecific from "@/component/profile/TechSpecific";
import TMI from "@/component/profile/TMI";

const ProfileContainer: React.FC = (): ReactElement => {

    return ( //* Fast Render for Portfolio!
        <div className={"flex flex-col items-center w-full h-full"}>
            <div className={"w-3/4 space-y-20"}>
                {[Introduction, DeveloperIntro, Portfolio, TechStack, TechSpecific, TMI].map((Component, index) => (
                    Component === Portfolio ? (
                        <Component key={index}/>
                    ) : (
                        <ScrollAnimFadeInOutWrapper key={index} fastRender={false}>
                            <Component />
                    </ScrollAnimFadeInOutWrapper>)
                ))}
            </div>
        </div>
    )
}

export default ProfileContainer;
