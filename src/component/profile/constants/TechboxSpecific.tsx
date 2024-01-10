import React from "react";

export const TechBoxSpecific = [
    {borderColor: "border-rose-600", content:
            <>
                <p className={"text-4xl font-bold"}>{'Frontend/App'}</p>
                <p className={"text-xs text-center"}>
                    {'웹의 경우 React 혹은 Next.js를 선호하며,'}
                    <br/>{'버그와 안정성있는 개발을 위해'}
                    <br/>{'Typescript를 선호하여 개발을 합니다.'}
                </p>
                <p className={"text-xs text-center"}>
                    {'\'보여지는 화면\'이라는 것에 중점을 두어'}
                    <br/>{'SEO, 빠른 렌더링을 우선시하여 개발하고,'}
                    <br/>{'서버적인 요소는 최소화하거나 백엔드로 분리합니다.'}
                </p>
                <p className={"text-xs text-center"}>
                    {'애플리케이션의 경우 React-Native를 선호하며'}
                    <br/>{'기본적으로 Typescript를 사용하여 개발합니다'}
                    <br/>{'필요한 경우 Kotlin, Swift, Objective-C 언어를 사용하여'}
                    <br/>{'플랫폼 네이티브 코드를 작성하며 개발합니다.'}
                </p>
            </>
    },
    {borderColor: "border-blue-600", content:
            <>
                <p className={"text-4xl font-bold"}>{'Backend'}</p>
                <p className={"text-xs text-center"}>
                    {'서버의 경우 Typescript 혹은 Kotlin 언어를 선호하며,'}
                    <br/>{'빠른 속도의 개발이 필요할 때에는 Express 프레임워크를,'}
                    <br/>{'안정적인 서버가 요구되거나 큰 프로젝트에는'}
                    <br/>{'NestJS/Spring Boot 프레임워크를 선호합니다'}
                </p>
                <p className={"text-xs text-center"}>
                    {'서버의 크기가 커질경우 GraphQL을 사용하여'}
                    <br/>{'엔드포인트와 서비스 로직을 단순화하며,'}
                    <br/>{'성능과 속도가 중요한 마이크로 서비스는'}
                    <br/>{'GoLang 언어와 gRPC를 사용하여 목표를 달성합니다.'}
                </p>
                <p className={"text-xs text-center"}>
                    {'Database의 경우 ORM을 선호하며'}
                    <br/>{'복잡한 쿼리가 요구될 때에만 제한적으로'}
                    <br/>{'보안 문제가 발생하지 않는 방향으로'}
                    <br/>{'raw query를 사용합니다.'}
                </p>
            </>
    },
    {borderColor: "border-purple-600", content:
            <>
                <p className={"text-4xl font-bold"}>{'Principle'}</p>
                <div>
                    <p className={"text-lg text-center"}>
                        {'모든 정답은 Docs에 있다'}
                    </p>
                    <p className={"text-xs text-center"}>
                        {'새로운 프레임워크와 언어를 사용할 때'}
                        <br/>{'우선적으로 Docs를 정독하여'}
                        <br/>{'해당 프레임워크/언어의 철학과 의도를 파악한 후,'}
                        <br/>{'최대한 그에 맞추어 개발을 진행합니다.'}
                    </p>
                </div>
                <div>
                    <p className={"text-lg text-center"}>
                        {'절대로 사용자를 신뢰하지 않는다'}
                    </p>
                    <p className={"text-xs text-center"}>
                        {'모든 시스템의 로직과 프로세스를 개발할 때'}
                        <br/>{'가능한 모든 입력값들에 대해 핸들링을 할 수 있는지,'}
                        <br/>{'보안상의 취약점이나 우회 방법은 없는지,'}
                        <br/>{'항상 고민하고 에러 핸들링을 합니다.'}
                    </p>
                </div>
                <div>
                    <p className={"text-lg text-center"}>
                        {'성능과 유연성, 그리고 확장성'}
                    </p>
                    <p className={"text-xs text-center"}>
                        {'서비스 구조를 설계할 때 성능을 우선적으로 고려하고,'}
                        <br/>{'유연하게 구조를 확장할 수 있는 구조로 설계합니다.'}
                        <br/>{'그러기에 Monolithic한 구조보다는'}
                        <br/>{'여러개의 Microservices들로 이루어진 구조를 선호하며,'}
                        <br/>{'이를 바탕으로 서비스 구조를 구상하고 설계, 개발합니다.'}
                    </p>
                </div>
            </>
    },
]
