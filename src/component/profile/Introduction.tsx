import React, {ReactElement} from "react";
import MyImage from "../../../public/static/images/myself.webp";
import Image from "next/image";

export default function Introduction(): ReactElement {
    return (
        <div className={"flex flex-col items-center w-full"}>
            <p className={'text-8xl font-bold my-14'}>
                <span className={"text-emerald-400"}>{'< '}</span>
                {'Hello There! :)'}
                <span className={"text-emerald-400"}>{' />'}</span>
            </p>
            <div className={"flex flex-row justify-start items-center w-full"}>
                <div className={"flex flex-col w-4/6 items-start space-y-10"}>
                    <p className={'text-4xl font-bold'}>{'Lim Kyu Min (Jay Lim)'}</p>
                    <p className={'text-lg mt-3 text-start'}>
                        {'반갑습니다! :) 풀스택 개발자로 활동하고 있는 임규민입니다.'}
                        <br/>{'현재에도 다양한 프로젝트와 공부를 통해 뛰어난 개발자가 되기 위해 노력하고 있으며,'}
                        <br/>{'최근에는 TA (Technical Architect)와 블록체인 분야에도 관심을 갖고'}
                        <br/>{'꾸준한 스터디를 하고 있습니다.'}
                    </p>
                    <p className={'text-sm font-D2Coding text-start'}>
                        {'#운동하는개발자 #소통과협업 #열정열정열정 #ENFJ'}
                    </p>
                </div>
                <div className={"flex flex-row w-2/6 items-center content-center justify-center"}>
                    <Image className="object-contain " src={MyImage} alt={'main'} priority={false} placeholder={'blur'}/>
                </div>
            </div>
        </div>
    )
}
