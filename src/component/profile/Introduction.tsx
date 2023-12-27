import React, {ReactElement} from "react";
import Link from "next/link";
import MyImage from "@/public/images/myself.png";
import Image from "next/image";

export default function Introduction(): ReactElement {
    return (
        <div className={"flex flex-row justify-start items-center w-full"}>
            <div className={"flex flex-col w-4/6 items-start"}>
                <p className={'text-6xl font-bold'}>{'Hello There!'}</p>
                <p className={'text-lg mt-3 text-start'}>
                    {'반갑습니다! :)'}
                    <br/>{'제 이름은 임규민이고, 여러 공부와 프로젝트를 진행하며 개발자로서의 꿈을 키우고 있습니다.'}
                    <br/><br/>{'저를 지칭하는 표현은 여러가지가 있겠지만,'}
                    <br/>{'\'운동하는 개발자\'만큼 저를 잘 표현하면서도 마음에 드는 표현은 드문 것 같습니다.'}
                    <br/>{'\'개발자\', 그리고 \'운동\'이라는 두 가지 키워드를 사용하여'}
                    <br/>{'저라는 사람을 조금 더 자세히 설명하고자 합니다.'}
                </p>
            </div>
            <div className={"flex flex-row w-2/6 items-center content-center justify-center"}>
                <Image className="object-contain " src={MyImage} alt={'main'} priority={false}/>
            </div>
        </div>
    )
}
