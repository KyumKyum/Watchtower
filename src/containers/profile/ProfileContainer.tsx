
import React, {ReactElement, useCallback, useEffect, useRef} from "react";
import Greeting from "@/component/profile/Greeting";
import Introduction from "@/component/profile/Introduction";
import ScrollAnimFadeInOutWrapper from "@/wrapper/ScrollAnimFadeInOutWrapper";
import DeveloperIntro from "@/component/profile/DeveloperIntro";
import FEIntro from "@/component/profile/FEIntro";
import TechStack from "@/component/profile/TechStack";

const ProfileContainer: React.FC = (): ReactElement => {

    return (
        <div className={"flex flex-col items-center w-full h-full"}>
            <div className={"w-3/4 space-y-20"}>
                {[Greeting, Introduction, DeveloperIntro, TechStack ,FEIntro].map((Component, index) => (
                    <ScrollAnimFadeInOutWrapper key={index}>
                        <Component />
                    </ScrollAnimFadeInOutWrapper>
                ))}
            </div>
        </div>
    )
}

export default ProfileContainer;
