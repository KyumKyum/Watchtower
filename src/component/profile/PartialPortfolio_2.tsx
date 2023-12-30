import React, {ReactElement} from "react";
import Image from "next/image";
import Toy1 from '../../public/images/saveyourmoney.jpeg'
import Toy2 from '../../public/images/whatstheweather.jpeg'
import Toy3 from '../../public/images/rabbit2.jpeg'
import Toy4 from '../../public/images/rabbit1.jpeg'
import ScrollAnimFadeInOutWrapper from "@/wrapper/ScrollAnimFadeInOutWrapper";

const PartialPortfolio_2: React.FC = (): ReactElement => {
    return (
        <div className={"flex flex-col justify-center items-center w-full space-y-8"}>
            <ScrollAnimFadeInOutWrapper fastRender={true}>
                <div className={"flex flex-col justify-center items-center w-full space-y-4"}>
                    <p className={'text-4xl font-bold'}>{'2020: 성장하는 개발자'}</p>
                    <p className={'text-lg text-center'}>{'2020년, 개발자로서의 진로를 잡은 저는'}
                        <br/>{'다양한 프로젝트를 진행하며 개발 실력과 경험을 쌓기 시작했습니다.'}</p>
                </div>
            </ScrollAnimFadeInOutWrapper>
            <ScrollAnimFadeInOutWrapper fastRender={false}>
                <div className={"flex flex-row w-full items-start my-4"}>
                    <div className={"flex flex-col w-4/6 space-y-2"}>
                        <p className={'text-2xl text-start font-bold'}>{'Toy Projects - Android Applications'}</p>
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
                    </div>
                    <div className={"flex flex-row w-2/6 space-x-4"}>
                        <Image className={"object-contain w-1/2"} src={Toy1} alt={'main'} priority={false}/>
                        <Image className={"object-contain w-1/2"} src={Toy2} alt={'main'} priority={false}/>
                    </div>
                </div>
            </ScrollAnimFadeInOutWrapper>
            <ScrollAnimFadeInOutWrapper fastRender={false}>
                <div className={"flex flex-row w-full items-center my-4 space-x-4"}>
                    <div className={"flex flex-col w-2/6 space-y-4"}>
                        <Image className={"object-contain h-1/2"} src={Toy3} alt={'main'} priority={false}/>
                        <Image className={"object-contain h-1/2"} src={Toy4} alt={'main'} priority={false}/>
                    </div>
                    <div className={"flex flex-col w-4/6 space-y-2"}>
                        <div>
                            <p className={'text-base text-end font-bold text-yellow-300'}>{'[Toy Project #3]: The Rabbit (알파 테스트 명)'}</p>
                            <p className={'text-sm text-end'}>
                               {'다문화 자녀를 위한 한글 교육 애플리케이션으로'}
                                <br/>{'창업에 관심이 있는 3명의 친구들과 함께 개발한 서비스입니다.'}
                            </p>
                        </div>
                        <p className={'text-sm text-end'}>
                            {'서비스의 기획, UX/UI 디자인, 서비스 로직 플로우 등,'}
                            <br/>{'기획, 디자인, 서비스 개발을 각각 맡아'}
                            <br/>{'알파 테스트 까지 진행하였던 프로젝트 입니다.'}
                        </p>
                        <p className={'text-sm text-end'}>
                            {'비록 알파 테스트 이후에 피벗을 하였지만,'}
                            <br/>{'처음으로 개발 리드로서 역할한 의미 있는 프로젝트입니다.'}
                            <br/>{'The Rabbit 이후로 개발자로서 경험하는 \'프로젝트\'에 매력을 느껴,'}
                            <br/>{'이후에도 다양한 프로젝트 시도하게 되는 계기가 되었습니다.'}
                        </p>
                    </div>
                </div>
            </ScrollAnimFadeInOutWrapper>
            <ScrollAnimFadeInOutWrapper fastRender={false}>
                <div className={"flex flex-row w-full items-start my-4"}>
                    <div className={"flex flex-col w-4/6 space-y-2"}>
                        <div>
                            <p className={'text-2xl text-start font-bold'}>{'혼술라이프'}</p>
                            <p className={'text-lg text-start'}>{'혼자서 술마시는 사람들을 위한 커뮤니티 및 공유 플랫폼'}</p>
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
                    </div>
                    <div className={"flex flex-row w-2/6 space-x-4"}>
                        <Image className={"object-contain w-1/2"} src={Toy1} alt={'main'} priority={false}/>
                        <Image className={"object-contain w-1/2"} src={Toy2} alt={'main'} priority={false}/>
                    </div>
                </div>
            </ScrollAnimFadeInOutWrapper>
        </div>
    )
}

export default PartialPortfolio_2;
