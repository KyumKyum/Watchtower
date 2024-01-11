import React, {ReactElement} from "react";
import ScrollAnimFadeInOutWrapper from "@/wrapper/ScrollAnimFadeInOutWrapper";

const MPortfolioIntro:React.FC = (): ReactElement => {
    return (
        <ScrollAnimFadeInOutWrapper fastRender={true}>
            <div className={"flex flex-col justify-center items-center w-full space-y-4"}>
                <p className={'text-xl font-bold'}>{'Portfolio:'}</p>
                <p className={'text-xs text-center'}>
                    {'지금까지 어떤 프로젝트와'}
                    <br/>{'어떤 업무를 하였는지'}
                    <br/>{'이 포트폴리오 페이지에'}
                    <br/>{'간단하게나마 적어보고자 합니다.'}
                </p>
            </div>
        </ScrollAnimFadeInOutWrapper>
    )
}

export default MPortfolioIntro;
