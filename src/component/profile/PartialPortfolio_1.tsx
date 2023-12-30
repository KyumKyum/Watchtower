import React, {ReactElement} from "react";
import Image from "next/image";
import Character from "@/public/images/character.png";
import ScrollAnimFadeInOutWrapper from "@/wrapper/ScrollAnimFadeInOutWrapper";

const PartialPortfolio_1: React.FC = (): ReactElement => {
    return (
        <div className={"flex flex-col justify-center items-center w-full space-y-10"}>
            <ScrollAnimFadeInOutWrapper fastRender={true}>
                <div className={"flex flex-col justify-center items-center w-full space-y-4"}>
                    <p className={'text-4xl font-bold'}>{'2019: 병아리 개발자'}</p>
                    <p className={'text-lg text-center'}>{'2019년 봄, 한양대학교 정보시스템학과로 입학한 저는'}<br/>{'선배들과 함께한 프로젝트를 통해 개발자의 꿈을 키우기 시작했습니다.'}</p>
                </div>
            </ScrollAnimFadeInOutWrapper>
            <ScrollAnimFadeInOutWrapper fastRender={false}>
                <div className={"flex flex-col w-full items-start my-4 space-y-2"}>
                    <div>
                        <p className={'text-2xl text-start font-bold'}>{'한슐랭 가이드'}</p>
                        <p className={'text-lg text-start'}>{'한양대학교 새내기들을 위한 맛집 추천 위젯'}</p>
                    </div>
                    <p className={'text-sm text-start'}>
                        {'if~else~와 printf()로 검은색 터미널 창에 텍스트만 찍던 제가'}
                        <br/>{'처음으로 \'서비스 다운 서비스\'를 개발할 수 있었던 프로젝트입니다.'}
                    </p>
                    <p className={'text-sm text-start'}>
                        {'비록 API없이 오직 Python, PyQt3 프론트엔드 위젯으로만 개발이 된 해커톤 프로젝트이고,'}
                        <br/>{'팀원 대부분이 Git과 같은 협업 툴에 익숙하지 못해 구글 드라이브를 사용하여 협업을 하였지만,'}
                        <br/>{'처음으로 코딩이 아닌 \'개발\'을 경험했던 순간이었고,'}
                        <br/>{'개발은 혼자서가 아닌, \'협업\'을 통해서 이루어지는 것을 깨달은 첫 프로젝트였습니다.'}
                    </p>
                </div>
            </ScrollAnimFadeInOutWrapper>
            <ScrollAnimFadeInOutWrapper fastRender={false}>
                <div className={"flex flex-row w-full items-center my-4"}>
                    <div className={"flex flex-row w-2/6"}>
                        <Image className="object-contain " src={Character} alt={'main'} priority={false}/>
                    </div>
                    <div className={"flex flex-col w-4/6 space-y-2"}>
                        <div>
                            <p className={'text-2xl text-end font-bold'}>{'전투적 다이어트!'}</p>
                            <p className={'text-lg text-end'}>{'고열량의 음식을 피하는 탄막 슈팅 게임'}</p>
                        </div>
                        <p className={'text-sm text-end'}>
                            {'Unity 게임 엔진과 C# 언어를 활용하여 개발한'}
                            <br/>{'총 3개의 레벨로 구성된 탄막 슈팅 게임입니다.'}
                        </p>
                        <p className={'text-sm text-end'}>
                            {'해당 프로젝트에서 저는'}
                            <br/>{'\'케릭터 무브먼트 & 공격\'와 \'데미지 로직\'개발을 담당하였습니다.'}
                            <br/>{'당시 실력으로는 구현하기 어려운 기능들이었지만,'}
                            <br/>{'구글링과 유튜브 튜토리얼을 따라하며 결국에는 원하는 기능을 구현해 냈을 때'}
                            <br/>{'그 성취감을 잊을 수 없습니다.'}
                            <br/>{'제가 개발에 재미를 붙이는 시초가 된 유의미한 프로젝트이며,'}
                            <br/>{'처음으로 Git을 잘 활용하여 협업을 진행했다는 데에 의미를 두고 있습니다.'}
                        </p>
                        <p className={'text-sm text-end'}>
                            {'아무리 찾아도 당시 발표 자료를 촬영한 영상이 없어'}
                            <br/>{'해당 게임에서 사용된 캐릭터 스프라이트 아쉬운대로 올렸습니다.'}
                        </p>
                    </div>
                </div>
            </ScrollAnimFadeInOutWrapper>
        </div>
    )
}

export default PartialPortfolio_1;
