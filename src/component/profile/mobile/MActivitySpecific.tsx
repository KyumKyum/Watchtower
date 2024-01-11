import React, {ReactElement} from "react";
import ScrollAnimFadeInOutWrapper from "@/wrapper/ScrollAnimFadeInOutWrapper";
import Image from "next/image";
import Mento from "../../../../public/static/images/mento.webp";
import First_Internship from "../../../../public/static/images/sellernote.webp";
import Zkrypto from "../../../../public/static/images/zkrypto.webp"


const MActivitySpecific: React.FC = (): ReactElement => {
    return (
        <div className={"flex flex-col justify-center items-stretch w-full space-y-2"}>
            <ScrollAnimFadeInOutWrapper fastRender={false}>
                <div className={"flex flex-col justify-center items-center w-full space-y-2"}>
                    <p className={'text-xl font-bold text-center'}>{'Introducing My Activities:'}</p>
                    <p className={'text-xs text-center'}>
                        {'정말 감사한 기회가 통해 다양한 분야에서 더욱 뛰어난 개발자로 성장할 수 있는'}
                        <br/>{'여러 경험을 하였습니다.'}
                    </p>
                    <p className={'text-xs text-center'}>
                        {'제가 경험한 소중한 활동들을'}
                        <br/>{'이 포트폴리오에 녹여내보고자 합니다.'}
                    </p>
                </div>
            </ScrollAnimFadeInOutWrapper>
            <ScrollAnimFadeInOutWrapper fastRender={false}>
                <div className={"flex flex-row w-full items-center my-4 space-x-4"}>
                    <div className={"flex flex-col space-y-2"}>
                        <div className={"flex flex-col items-center space-y-2"}>
                            <p className={'text-xl text-center font-bold'}>{'FORIF:'}<br/>{'안드로이드 개발 멘토'}</p>
                            <div className={"flex flex-col justify-center"}>
                                <Image className={"object-contain"} src={Mento} alt={'main'} priority={false} placeholder={'blur'}/>
                            </div>
                            <p className={'text-sm text-center'}>{'프로그래밍 중앙 동아리에서의'}<br/>{'개발 멘토 활동'}</p>
                        </div>
                        <p className={'text-xs text-start'}>
                            {'가르치는 것을 좋아하는 성격의 저는'}
                            <br/>{'배운 지식을 바탕으로 비전공자,'}
                            <br/>{'혹은 개발이 처음인 학생들을 대상으로'}
                            <br/>{'FORIF 프로그래밍 중앙동아리에서'}
                            <br/>{'동아리 부회장이자 JAVA 안드로이드 '}
                            <br/>{'앱 개발을 가르치는 멘토 활동을 1년간 했습니다.'}
                        </p>
                        <p className={'text-xs text-start'}>
                            {'멘토 활동을 통해'}
                            <br/>{'다양한 프로젝트와 해커톤을 경험하였고,'}
                            <br/>{'저 역시 개발자로서 더 성장할 수 있게되는'}
                            <br/>{'유익한 경험을 할 수 있게 되었습니다.'}
                        </p>
                    </div>
                </div>
            </ScrollAnimFadeInOutWrapper>
            <ScrollAnimFadeInOutWrapper fastRender={false}>
                <div className={"flex flex-row w-full items-center my-4"}>
                    <div className={"flex flex-col items-end my-4 space-y-2"}>
                        <div className={"flex flex-col items-center space-y-2"}>
                            <p className={'text-xl text-center font-bold'}>{'Sellernote:'}<br/>{'백엔드 개발자 인턴십'}</p>
                            <div className={"flex flex-row space-x-4"}>
                                <Image className={"object-contain"} src={First_Internship} alt={'main'} priority={false} placeholder={'blur'}/>
                            </div>
                            <p className={'text-sm text-end'}>{'실무지식을 배울 수 있었던 순간'}</p>
                        </div>
                        <p className={'text-xs text-end'}>
                            {'저는 \'(주) 셀러노트(쉽다)\'에서'}
                            <br/>{'백엔드 개발자로 인턴십을 진행하였습니다.'}
                        </p>
                        <p className={'text-xs text-end'}>
                            {'친절하신 회사 분들과'}
                            <br/>{'많은 것을 가르쳐주셨던 CTO님 덕분에'}
                            <br/>{'실무를 포함한 많은 개발 지식을'}
                            <br/>{'쌓을 수 있었습니다.'}
                        </p>
                        <p className={'text-xs text-end'}>
                            {'해당 인턴십 기간 동안 다음 2가지의 업무를 맡았습니다.'}
                        </p>
                        <p className={'text-xs text-end'}>
                            {'1. GoLang와 Dialogflow를 활용한'}
                            <br/>{'챗봇 서비스 개발'}
                            <br/>{'2. 사내 메일 서비스 도입에 관한'}
                            <br/>{'Typescript 기반 간단한 PoC'}
                        </p>
                        <p className={'text-xs text-end'}>
                            {'해당 인턴십으로 실제 사람들이 사용하는'}
                            <br/>{'서비스를 개발하는 경험을 했으며,'}
                            <br/>{'현장에서 개발 업무가 어떻게 이루어지는지'}
                            <br/>{'배울 수 있는 순간이었습니다.'}
                        </p>
                    </div>
                </div>
            </ScrollAnimFadeInOutWrapper>
            <ScrollAnimFadeInOutWrapper fastRender={false}>
                <div className={"flex flex-row w-full items-center my-4 space-x-4"}>
                    <div className={"flex flex-col space-y-2"}>
                        <div className={"flex flex-col items-center space-y-2"}>
                            <p className={'text-xl text-start font-bold'}>{'Zkrypto (SnP Lab)'}</p>
                            <div className={"flex flex-col justify-center"}>
                                <Image className={"object-contain"} src={Zkrypto} alt={'main'} priority={false} placeholder={'blur'}/>
                            </div>
                            <p className={'text-sm text-start'}>{'학부 연구생으로서'}<br/>{'진행한 연구 활동들'}</p>
                        </div>
                        <p className={'text-xs text-start'}>
                            {'동기의 추천을 통해 영지식증명 (ZKP) 기술 기반 블록체인 응용 서비스 회사인'}
                            <br/>{'지크립토 산하 SnP 연구실에 학부 연구생으로 들어가 연구 활동을 하였습니다.'}
                        </p>
                        <p className={'text-xs text-start'}>
                            {'블록체인 기슬 개발 사업 및 연구 프로젝트에 참여하여,'}
                            <br/>{'블록체인 데이터 암호화 기반의 프라이버시 보호 기술을 연구하고,'}
                            <br/>{'블록체인 노드와 클라우드 환경을 활용한 아키텍쳐 방법론을 연구 및 설계하여'}
                            <br/>{'이에 대한 PoC를 진행하는 활동을 하였습니다.'}
                        </p>
                        <p className={'text-xs text-start'}>
                            {'웹/앱 개발자였던 제가 블록체인 분야에도'}
                            <br/>{'식견을 넓히게 되는 좋은 기회였으며,'}
                            <br/>{'좋으신 교수님과 연구원님들의'}
                            <br/>{'가르침과 다양한 지원하에'}
                            <br/>{'마음껏 공부하고 연구할 수 있었기에 즐거웠던 활동이었습니다.'}
                        </p>
                    </div>
                </div>
            </ScrollAnimFadeInOutWrapper>
        </div>
    )
}

export default MActivitySpecific;
