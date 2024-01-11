
import React, {ReactElement, useCallback, useEffect, useRef} from "react";

import ScrollAnimFadeInOutWrapper from "@/wrapper/ScrollAnimFadeInOutWrapper";
import MDeveloperIntro from "@/component/profile/mobile/MDeveloperIntro";
import MPortfolio from "@/component/profile/mobile/MPortfolio";
import MIntroduction from "@/component/profile/mobile/MIntroduction";
import MTechStack from "@/component/profile/mobile/MTechStack";
import MTechSpecific from "@/component/profile/mobile/MTechSpecific";
import MTMI from "@/component/profile/mobile/MTMI";

const MProfileContainer: React.FC = (): ReactElement => {

    return ( //* Fast Render for Portfolio!
        <div className={"flex flex-col items-center w-full h-full"}>
            <div className={"w-full space-y-6"}>
                {[MIntroduction, MDeveloperIntro, MPortfolio, MTechStack, MTechSpecific, MTMI].map((Component, index) => (
                    Component === MPortfolio ? (
                        <Component key={index}/>
                    ) : (
                        <ScrollAnimFadeInOutWrapper key={index} fastRender={true}>
                            <Component />
                    </ScrollAnimFadeInOutWrapper>)
                ))}
            </div>
        </div>
    )
}

export default MProfileContainer;
