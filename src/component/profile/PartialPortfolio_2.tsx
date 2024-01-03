import React, {ReactElement} from "react";
import Image from "next/image";
import Toy1 from '../../public/images/saveyourmoney.jpeg'
import Toy2 from '../../public/images/whatstheweather.jpeg'
import Toy3 from '../../public/images/rabbit2.jpeg'
import Toy4 from '../../public/images/rabbit1.jpeg'
import Logo from '../../public/images/honsool_logo.png'
import Mento from '../../public/images/mento.jpeg'
import ScrollAnimFadeInOutWrapper from "@/wrapper/ScrollAnimFadeInOutWrapper";
import Link from "next/link";

const PartialPortfolio_2: React.FC = (): ReactElement => {
    return (
        <div className={"flex flex-col justify-center items-stretch w-full space-y-2"}>
            <ScrollAnimFadeInOutWrapper fastRender={true}>
                <div className={"flex flex-col justify-center items-center w-full space-y-4"}>
                    <p className={'text-4xl font-bold'}>{'2020: 성장하는 개발자'}</p>
                    <p className={'text-lg text-center'}>{'2020년, 개발자로서의 진로를 잡은 저는'}
                        <br/>{'다양한 프로젝트를 진행하며 개발 실력과 경험을 쌓기 시작했습니다.'}</p>
                </div>
            </ScrollAnimFadeInOutWrapper>
            <ScrollAnimFadeInOutWrapper fastRender={false}>
                <div className={"flex flex-row w-full my-4 items-center"}>
                    <div className={"flex flex-col w-4/6 space-y-2"}>
                        <div>
                            <p className={'text-2xl text-start font-bold'}>{'Toy Projects - Android Applications'}</p>
                            <p className={'text-lg text-start'}>{'개발 공부를 위한 다양한 프로젝트'}</p>
                        </div>
                        <p className={'text-sm text-start'}>
                            {'먼저 안드로이드 애플리케이션 개발에 관심이 생긴 저는,'}
                            <br/>{'Java 언어를 비록한 앱 개발 스택에 익숙해지기 위해'}
                            <br/>{'다양한 목적의 애플리케이션을 개발했습니다.'}
                        </p>
                        <div>
                            <p className={'text-base text-start font-bold text-green-500'}>{'[Toy Project #1]: Save Your Money!'}</p>
                            <p className={'text-sm text-start'}>
                                {'간단한 용돈기입장 앱이며,'}
                                <br/>{'Firebase Storage와 같은 클라우드를 처음 사용해본 프로젝트입니다.'}
                            </p>
                        </div>
                        <div>
                            <p className={'text-base text-start font-bold text-purple-300'}>{'[Toy Project #2]: What\'s the Weather?'}</p>
                            <p className={'text-sm text-start'}>
                                {'Weather API를 사용하여 날씨 정보를 불러오는 간단한 서비스입니다.'}
                                <br/>{'REST API 통신 프로토콜을 공부하기 위해 만든 프로젝트입니다.'}
                            </p>
                        </div>
                        <div>
                            <p className={'text-base text-start font-bold text-yellow-300'}>{'[Toy Project #3]: The Rabbit'}</p>
                            <p className={'text-sm text-start'}>
                                {'다문화 자녀를 위한 한글 교육 애플리케이션으로'}
                                <br/>{'창업에 관심이 있는 3명의 친구들과 함께 개발한 프로젝트입니다.'}
                                <br/>{'해당 프로젝트에서 개발을 맡아, 기획된 내용과 디자인을'}
                                <br/>{'실제 애플리케이션으로 개발하는 업무를 맡았습니다.'}
                            </p>
                        </div>
                    </div>
                    <div className={"flex flex-col justify-center items-center w-2/6 space-y-2"}>
                        <div className={"flex flex-row w-full"}>
                            <Image className={"object-contain w-2/5"} src={Toy1} alt={'main'} priority={false}/>
                            <Image className={"object-contain w-2/5"} src={Toy2} alt={'main'} priority={false}/>
                        </div>
                        <div className={"flex flex-col justify-center w-full"}>
                            <Image className={"object-contain w-4/5"} src={Toy3} alt={'main'} priority={false}/>
                            <Image className={"object-contain w-4/5"} src={Toy4} alt={'main'} priority={false}/>
                        </div>
                    </div>
                </div>
            </ScrollAnimFadeInOutWrapper>
            <ScrollAnimFadeInOutWrapper fastRender={false}>
                <div className={"flex flex-row w-full items-center my-4 space-x-4"}>
                    <div className={"flex flex-col justify-center w-2/6"}>
                        <Image className={"object-contain"} src={Mento} alt={'main'} priority={false}/>
                    </div>
                    <div className={"flex flex-col w-4/6 space-y-2"}>
                        <div>
                            <p className={'text-2xl text-end font-bold'}>{'FORIF: 안드로이드 개발 멘토'}</p>
                            <p className={'text-lg text-end'}>{'프로그래밍 중앙 동아리에서의 개발 멘토 활동'}</p>
                        </div>
                        <p className={'text-sm text-end'}>
                            {'가르치는 것을 좋아하는 성격의 저는'}
                            <br/>{'배운 지식을 바탕으로 비전공자, 혹은 개발이 처음인 학생들을 대상으로'}
                            <br/>{'FORIF 프로그래밍 중앙동아리에서 동아리 부회장이자'}
                            <br/>{'JAVA 안드로이드 앱 개발을 가르치는 멘토 활동을 1년간 했습니다.'}
                        </p>
                        <p className={'text-sm text-end'}>
                            {'멘토 활동을 통해 더욱 다양한 프로젝트와 해커톤을 경험하였고,'}
                            <br/>{'저 역시 개발자로서 더 성장할 수 있게되는'}
                            <br/>{'유익한 경험을 할 수 있게 되었습니다.'}
                        </p>
                    </div>
                </div>
            </ScrollAnimFadeInOutWrapper>
            <ScrollAnimFadeInOutWrapper fastRender={false}>
                <div className={"flex flex-row w-full items-center my-4"}>
                    <div className={"flex flex-col w-4/6 space-y-2"}>
                        <div>
                            <p className={'text-2xl text-start font-bold'}>{'혼술라이프'}</p>
                            <p className={'text-lg text-start'}>{'혼자서 술마시는 사람들을 위한 커뮤니티 및 공유 플랫폼'}</p>
                        </div>
                        <p className={'text-sm text-start'}>
                            {'저를 개발자의 길로 이끌어준 멘토 개발자 선배와 함께'}
                            <br/>{'해커톤 프로젝트에서 개발한 앱서비스입니다.'}
                            <br/>{'해당 프로젝트에서 데이터베이스를 포함한 서버 개발을 맡았습니다'}
                        </p>
                        <div>
                            <p className={'text-sm text-start'}>
                                {'커뮤니티 기능을 비롯한 사진 업로드 기능, 랭킹 기능, SNS 소셜 로그인 기능 등'}
                                <br/>{'일반적인 앱 서비스에서 많이 사용되는 기능을 개발을 하는 경험을 하였습니다.'}
                            </p>
                            <p className={'text-sm text-start'}>
                                {'시연 영상은 '}<Link href={'https://www.youtube.com/watch?v=WgFu_LUoCO8'} className={"text-cyan-600"}>{'이 링크에서'}</Link>{' 확인할 수 있습니다.'}
                            </p>
                        </div>
                    </div>
                    <div className={"flex flex-row w-2/6 space-x-4"}>
                        <Image className={"object-contain"} src={Logo} alt={'main'} priority={false}/>
                    </div>
                </div>
            </ScrollAnimFadeInOutWrapper>
        </div>
    )
}

export default PartialPortfolio_2;
