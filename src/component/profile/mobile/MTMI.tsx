import React, {ReactElement} from "react";
import Idea from "../../../../public/static/svg/small_idea.svg";

export default function MTMI(): ReactElement {
    return (
        <div className={"flex flex-col justify-center items-center w-full animate__animated animate__fadeInUp"}>
            <div className={"flex flex-col items-center"}>
                <p className={'text-xl font-bold text-center'}>{'Governing Values'}</p>
                <div className={"flex flex-row w-1/6 h-1/6 items-center content-center justify-center"}>
                    <Idea className={"stroke-white"}/>
                </div>
                <p className={'text-sm mt-3 text-center'}>{'건강한 몸과 건강한 마음,'}<br/>{'그리고 건강한 소통'}</p>
                <div className={"flex flex-col items-start w-full space-y-2"}>
                    <p className={'text-xs text-start'}>
                        <br/>{'저의 가치관입니다.'}
                    </p>
                    <p className={'text-xs text-start'}>
                        {'저는 개발자로서 가장 중요하게 생각하는 덕목이'}
                        <br/>{'\'소통과 협업\'입니다.'}
                        <br/>{'소통과 협업 없이는 큰 프로젝트를 '}
                        <br/>{'성공적으로 끝마칠 수 없습니다.'}
                        <br/>{'기획 팀과 디자인 팀,'}
                        <br/>{'그 외 여러 부서의 헙업을 성공적으로 하기 위해서'}
                        <br/>{'개발자에게 원할한 소통 능력과 협업 능력은 필수입니다.'}
                    </p>
                    <p className={'text-xs text-start'}>
                        <br/>{'지난 다양한 프로젝트에서 이러한 점을 크게 느꼈고, 저 스스로도 이를 달성하기 위해'}
                        <br/>{'협업과 소통 면에서 다양한 노력을 했었습니다.'}
                    </p>
                    <p className={'text-xs text-start'}>
                        {'또한 약간의 TMI이긴 하지만,'}
                        <br/>{'저는 운동을 매우 좋아합니다.'}
                        <br/>{'\'건강한 몸\'이라고 가치관에 적어놓았듯이,'}
                        <br/>{'웨이트 트레이닝과 복싱을 취미로 하며'}
                        <br/>{'이를 통해 스트레스를 해소합니다.'}
                        <br/>{'실제로 매우 좋아하구요!'}
                        <br/>{'덕분에 개발 일로 인해 스트레스가 쌓일 때에도'}
                        <br/>{'잘 관리할 수 있는 것 같습니다. :)'}
                    </p>
                </div>
                </div>
        </div>
    )
}
