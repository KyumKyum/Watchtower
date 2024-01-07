import React, {ReactElement} from "react";
import Image from "next/image";
import Character from "@/public/images/character.webp";
import ScrollAnimFadeInOutWrapper from "@/wrapper/ScrollAnimFadeInOutWrapper";
import Link from "next/link";
import Logo from "@/public/images/honsool_logo.webp";
import Applogo from "@/public/images/Applogo.webp"
import Mohey from "@/public/images/Mohey.webp";
import M_app from "@/public/images/M_App.webp";
import Neosk from "@/public/images/Neosk.webp";
import Holme from "@/public/images/holme.webp";
import LG from "@/public/images/lg.webp";
import SKT from "@/public/images/skt.webp"


const ProjectSpecific: React.FC = (): ReactElement => {
    return (
        <div className={"flex flex-col justify-center items-stretch w-full space-y-2"}>
            <ScrollAnimFadeInOutWrapper fastRender={false}>
                <div className={"flex flex-col justify-center items-center w-full space-y-2"}>
                    <p className={'text-4xl font-bold'}>{'Introducing My Projects:'}</p>
                    <p className={'text-sm text-center'}>
                        {'저는 정말로 프로젝트를 즐거워하고, 즐거워하는만큼 많은 프로젝트를 경험하였습니다.'}
                        <br/>{'경험하였던 프로젝트 중 언급할만한 의미가 있는 일부를 엄선하며 적어보았습니다.'}
                    </p>
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
                                {'시연 영상은 '}<Link href={'https://www.youtube.com/watch?v=WgFu_LUoCO8'} rel={"noopener noreferrer"} target={"_blank"} className={"text-cyan-600"}>{'이 링크에서'}</Link>{' 확인할 수 있습니다.'}
                            </p>
                        </div>
                    </div>
                    <div className={"flex flex-row justify-center w-2/6 space-x-4"}>
                        <Image className={"object-contain"} src={Logo} alt={'main'} priority={false}/>
                    </div>
                </div>
            </ScrollAnimFadeInOutWrapper>
            <ScrollAnimFadeInOutWrapper fastRender={false}>
                <div className={"flex flex-row w-full items-center my-4"}>
                    <div className={"flex flex-row justify-center w-2/6"}>
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
                            <br/>{'동시에 어떻게 해야지 플레이하는 유저가 불편함보다는 재미를 느낄 수 있을까와 같은'}
                            <br/>{'유저 입장에서의 고민을 하며 개발을 진행했었습니다.'}
                        </p>
                        <p className={'text-sm text-end'}>
                            {'아무리 찾아도 당시 발표 자료를 촬영한 영상이 없어'}
                            <br/>{'해당 게임에서 사용된 캐릭터 스프라이트 아쉬운대로 올렸습니다.'}
                        </p>
                    </div>
                </div>
            </ScrollAnimFadeInOutWrapper>
            <ScrollAnimFadeInOutWrapper fastRender={false}>
                <div className={"flex flex-row w-full items-center my-4 space-x-4"}>
                    <div className={"flex flex-col w-4/6 space-y-2"}>
                        <div>
                            <p className={'text-2xl text-start font-bold'}><Link href={'https://www.mohey.io/'} rel={"noopener noreferrer"} target={"_blank"} className={"text-cyan-600"}>{'모헤이 (Mohey)'}</Link> </p>
                            <p className={'text-lg text-start'}>{'관심사 기반 취미 공유 커뮤니티 앱 서비스'}</p>
                        </div>
                        <p className={'text-sm text-start'}>
                            {'저의 첫 창업이자 첫 테크 리드로서 활동한,'}
                            <br/>{'제가 가장 애정하는 프로젝트인 모헤이(Mohey)에 대해서 소개할 수 있어 영광입니다.'}
                        </p>
                        <p className={'text-sm text-start'}>
                            {'모헤이 (Mohey)는 외국인 유학생과 한국인 대학생을 대상으로 하는'}
                            <br/>{'관심사 기반 취미 공유 커뮤니티 앱 서비스입니다.'}
                        </p>
                        <p className={'text-sm text-start'}>
                            {'약 5000명이라는 유의미한 유저 수 뿐만이 아니라,'}
                            <br/>{'"제 27회 한양대학교 벤쳐창업경진대회 학부생 트랙 최우수상 수상",'}
                            <br/>{'"세종대학교 캠퍼스타운 창업아이디어 피팅 대회 우승" 등,'}
                            <br/>{'유의미한 결과물까지 얻어낸 의미있는 프로젝트입니다.'}
                        </p>
                        <p className={'text-sm text-start'}>
                            {'약 1년 이상 진행한 이 프로젝트에서 많은 시행착오를 겪으며'}
                            <br/>{'유저를 위한 서비스를 계획하고, 이에 맞추어 개발을 리드하는 경험을 통해'}
                            <br/>{'저의 부족했던 개발 지식을 채움과 동시에'}
                            <br/>{'한층 더 높은 수준의 개발자로 성장할 수 있었습니다.'}
                        </p>
                        <p className={'text-sm text-start'}>
                            {'PageSpeed Insight와 같은 성능 지표를 기반으로'}
                            <br/>{'더욱 빠른 서비스를 위한 프론트엔드 최적화와 서버 로직 리펙토링을 시도하고'}
                            <br/>{'더욱 많은 포털 검색 노출을 위해 SEO를 진행하는 등,'}
                            <br/>{'이전 프로젝트에서는 신경쓰지 못했던 부분을 생각하며 개발할 수 있었습니다.'}
                        </p>
                        <p className={'text-sm text-start'}>
                            {'또한 빠른 채팅에 관련된 이슈와 서버의 보안 문제,'}
                            <br/>{'이벤트 혹은 특정 시간대에 있는 트래픽 급증을 처리하기 위해'}
                            <br/>{'캐시서버를 동반한 전체적인 서비스 아케텍쳐를 재설계하고 반영하는 경험을 통해'}
                            <br/>{'Technical Architect의 분야에서도 성장할 수 있었습니다.'}
                        </p>
                    </div>
                    <div className={"flex flex-col justify-center items-center w-2/6 space-y-4"}>
                        <Image className={"object-contain"} src={Applogo} alt={'main'} priority={false}/>
                        <Image className={"object-contain"} src={Mohey} alt={'main'} priority={false}/>
                        <Image className={"object-contain"} src={M_app} alt={'main'} priority={false}/>
                    </div>
                </div>
            </ScrollAnimFadeInOutWrapper>
            <ScrollAnimFadeInOutWrapper fastRender={false}>
                <div className={"flex flex-row w-full items-center my-4"}>
                    <div className={"flex flex-row w-2/6 justify-center space-x-4"}>
                        <Image className={"object-contain"} src={Neosk} alt={'main'} priority={false}/>
                    </div>
                    <div className={"flex flex-col w-4/6 items-end my-4 space-y-2"}>
                        <div>
                            <p className={'text-2xl text-end font-bold'}>{'네오스크 (Neosk)'}</p>
                            <p className={'text-lg text-end'}>{'NFC 태깅 주문 결재 서비스'}</p>
                        </div>
                        <p className={'text-sm text-end'}>
                            {'네오스크 (Neosk)는 NFC 암호화 기술을 활용한 서비스로'}
                            <br/>{'현장에서 스마트폰을 사용하여 실시간으로 주문을 할 수 있는 서비스입니다.'}
                            <br/>{'해당 서비스에서 저는 실시간 주문 처리 서버 시스템을 개발하였습니다.'}
                        </p>
                        <p className={'text-sm text-end'}>
                            {'창업 활동 (모헤이)에서, 실시간 채팅 처리 기능을 개발하는 경험을 통해'}
                            <br/>{'실시간 주문 처리 시스템 역시 큰 어려움 없이 개발할 수 있었고,'}
                            <br/>{'실시간 주문 대기열 관리, 승인/거절/취소 요청에 대한 처리 로직을 개발하며'}
                            <br/>{'실시간 서비스 개발에 대한 지식과 트래픽 처리 지식을 쌓았습니다.'}
                        </p>
                    </div>
                </div>
            </ScrollAnimFadeInOutWrapper>
            <ScrollAnimFadeInOutWrapper fastRender={false}>
                <div className={"flex flex-row w-full items-center my-4"}>
                    <div className={"flex flex-col w-4/6 space-y-2"}>
                        <div>
                            <p className={'text-2xl text-start font-bold'}>{'홂 (HOLME)'}</p>
                            <p className={'text-lg text-start'}>{'MATTER 프로토콜 기반 숙박 시설용 스마트홈 설정 마이그레이션 서비스'}</p>
                        </div>
                        <p className={'text-sm text-start'}>
                            {'한양대학교 IC-PBL 프로젝트 형 과목을 수강하며 진행한 프로젝트 입니다.'}
                            <br/>{'LG와 SKT가 제시한 생성형 AI와 Matter 프로토콜이라는 주제로 진행이 되었으며'}
                            <br/>{'저는 이 프로젝트에서 테크 리드로서 아이디어를 구현하기 위한 아키텍쳐를 설계하고,'}
                            <br/>{'데모 수준까지 개발하기 위해 업무 분담해주며 개발을 진행하였습니다.'}
                        </p>
                        <p className={'text-sm text-start'}>
                            {'Holme은 MATTER 프로토콜을 기반으로 개발된 프로젝트이며,'}
                            <br/>{'기존 집의 스마트홈 환경을 어디로든, Holme인증을 받은 장소라면 옮길 수 있는,'}
                            <br/>{'"집을 옮긴다"라는 컨셉을 실체화한 서비스입니다.'}
                            <br/>{'(더 자세한 설명은 '}
                            <Link href={'https://flame-sun-524.notion.site/HOLME-d41cf1a8e87b4c71b638a93c58ca63f2'} rel={"noopener noreferrer"} target={"_blank"} className={"text-cyan-600"}>{'테크 블로그에서'}</Link>
                            {'와 '}
                            <Link href={'https://www.youtube.com/watch?v=R0oxNPwpq6M'} rel={"noopener noreferrer"} target={"_blank"} className={"text-cyan-600"}>{'데모&시연 영상에서'}</Link>
                            {' 확인할 수 있습니다.)'}
                        </p>
                        <p className={'text-sm text-start'}>
                            {'위 프로젝트는 감사하게도 심사위원 분들에게 좋은 평가를 받아'}
                            <br/>{'LG, SKT 양측에서 모두 최우수상을 수상할 수 있었습니다.'}
                        </p>
                    </div>
                    <div className={"flex flex-col items-center w-2/6 space-y-4"}>
                        <Image className={"object-contain"} src={Holme} alt={'main'} priority={false}/>
                        <div className={"flex flex-row justify-center w-full space-x-4"}>
                            <Image className={"object-contain w-3/5"} src={LG} alt={'main'} priority={false}/>
                            <Image className={"object-contain w-3/5"} src={SKT} alt={'main'} priority={false}/>
                        </div>
                    </div>
                </div>
            </ScrollAnimFadeInOutWrapper>
        </div>
    )
}

export default ProjectSpecific;
