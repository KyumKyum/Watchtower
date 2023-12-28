import React, {ReactElement} from "react";
import Link from "next/link";
import Dev from '../../public/svg/developer.svg'

export default function DeveloperIntro(): ReactElement {
    return (
        <div className={"flex flex-row justify-end items-center w-full animate__animated animate__fadeInUp animate__delay-1s"}>
            <div className={"flex flex-row w-1/6 items-center content-center justify-center"}>
                <Dev className={"stroke-white fill-white"}/>
            </div>
            <div className={"flex flex-col w-5/6 items-end"}>
                <p className={'text-6xl font-bold'}>{'I\'m a Web/App Developer.'}</p>
                <p className={'text-2xl mt-3'}>{'\'당신의 아이디어를 현실로 만들어 드립니다!\''}</p>
                <p className={'text-lg text-end'}>
                    <br/>{'제가 어떤 개발자인지 이야기를 할때 항상 이야기하는 캐치프레이즈입니다.'}
                    <br/>{'저는 다양한 프로젝트, 스타트업의 CTO, 외주 작업 등을 경험하며'}
                    <br/>{'웹/앱의 다양한 분야에서 필요한 다양한 개발 지식과 노하우를 갖췄습니다.'}
                    <br/><br/>{'코딩이 재밌어 시작하게 된 개발은 저를 개발자의 세계로 이끌었고,'}
                    <br/>{'지금도 개발이라는 업무를 \'일\'보다는 \'즐거운 창작 활동\'으로 생각하며 일하고 있습니다.'}
                </p>
            </div>
        </div>
    )
}
