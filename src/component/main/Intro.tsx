import React, {ReactElement} from "react";
import Link from "next/link";
import MainImage from "@/public/images/photo.webp";
import Image from "next/image";

export default function Intro(): ReactElement {
    return (
        <div className={"flex flex-row justify-end items-center w-full animate__animated animate__fadeInUp animate__delay-1s"}>
            <div className={"flex flex-row w-2/6 items-center content-center justify-center"}>
                <Image className="object-contain w-5/6 h-5/6" src={MainImage} alt={'main'}/>
            </div>
            <div className={"flex flex-col w-4/6 items-end space-y-4"}>
                <p className={'text-6xl font-bold'}>{'Lim Kyu Min (Jay Lim)'}</p>
                <p className={'text-xl'}>{'A Full-Stack Web/App Developer specialized in BE & FE development.'}</p>
                <p className={'text-lg mt-3 text-end'}>{'안녕하세요!'}
                    <br/>{'풀스택 개발자로 활동하고 있는 임규민입니다.'}
                    <br/>{'프론트 개발과 백엔드 서버 / 마이크로 서비스 개발을 전문적으로 하고,'}
                    <br/>{'새로운 기술과 프레임워크, 언어에 대해 학습하는 것을 즐깁니다.'}
                    <br/>{'만약 저에 대해 더 궁금하시다면, 제 '}<Link className={"text-cyan-600"} href={"/profile"}>{'프로필'}</Link> {'에서 더 알아가실 수 있습니다!'}
                    <br/><br/>{'어떤 방법으로든 이 사이트에 오신 여러분들이 좋은 하루를 보낼 수 있기를 :)'}
                </p>
            </div>
        </div>
    )
}
