import React, {ReactElement} from "react";
import Dev from '../../../../public/static/svg/developer.svg'

export default function MDeveloperIntro(): ReactElement {
    return (
        <div className={"flex flex-col justify-center items-center w-full animate__animated animate__fadeInUp"}>
            <div className={"flex flex-col items-center space-y-4"}>
                <p className={'text-xl font-bold text-center'}>{'I \'m a Developer/Architect!'}</p>
                <div className={"flex flex-row w-1/3 items-center content-center justify-center"}>
                    <Dev className={"stroke-white fill-white"}/>
                </div>
                <p className={'text-base text-center'}>{'\'당신의 아이디어를 설계하고, 현실로 만들어 드립니다!\''}</p>
                <p className={'text-xs text-end'}>
                    {'제가 어떤 개발자인지 이야기를 할때 항상 이야기하는 캐치프레이즈입니다.'}
                    <br/>{'코딩이 재밌어 시작하게 된 개발은 저를 개발자의 세계로 이끌었고,'}
                    <br/>{'다양한 프로젝트와 스타트업 테크리드를 경험하며 실력을 쌓아올렸습니다.'}
                </p>
                <p className={'text-xs text-end'}>
                    {'지금도 개발이라는 업무를 \'일\'보다는 \'즐거운 창작 활동\'으로 생각하며 일하고 있습니다.'}
                </p>
                <p className={'w-full text-[10px] font-D2Coding text-end'}>
                    {'#풀스택개발자 #아키텍쳐설계 #스타트업 #테크리드 #창업 #블록체인'}
                </p>
            </div>
        </div>
    )
}
