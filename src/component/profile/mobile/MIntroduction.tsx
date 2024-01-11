import React, {ReactElement} from "react";
import MyImage from "../../../../public/static/images/myself.webp";
import Image from "next/image";

export default function MIntroduction(): ReactElement {
    return (
        <div className={"flex flex-col items-center w-full"}>
            <p className={'text-2xl font-bold mb-10'}>
                <span className={"text-emerald-400"}>{'< '}</span>
                {'Hello There! :)'}
                <span className={"text-emerald-400"}>{' />'}</span>
            </p>
            <div className={"flex flex-col justify-start items-center w-full space-y-6"}>
                <div className={"flex flex-col items-center space-y-4"}>
                    <p className={'text-xl font-bold'}>{'Lim Kyu Min (Jay Lim)'}</p>
                    <div className={"flex flex-row items-center content-center justify-center"}>
                        <Image className="object-contain" src={MyImage} alt={'main'} priority={false} placeholder={'blur'}/>
                    </div>
                    <p className={'text-xs mt-3 text-start'}>
                        {'반갑습니다! :) 풀스택 개발자로 '}
                        <br/>{'활동하고 있는 임규민입니다.'}
                        <br/>{'현재에도 다양한 프로젝트와 공부를 통해 뛰어난 개발자가 되기 위해 노력하고 있으며,'}
                        <br/>{'최근에는 TA (Technical Architect)와 블록체인 분야에도 관심을 갖고'}
                        <br/>{'꾸준한 스터디를 하고 있습니다.'}
                    </p>
                    <p className={'w-full text-[10px] font-D2Coding text-start'}>
                        {'#운동하는개발자 #소통과협업 #열정열정열정 #ENFJ'}
                    </p>
                </div>
            </div>
        </div>
    )
}
