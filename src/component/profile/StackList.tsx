import React, {ReactElement} from "react";

const StackList: React.FC = (): ReactElement => {
    return (
        <div className={"w-3/4"}>
            <div className={"mt-5"}>
                <p className={"text-2xl text-center"}>{'Favorite Language:'}</p>
                <p className={"text-lg text-center"}>{'Javascript, Typescript, Kotlin, Golang'}</p>
            </div>
            <div className={"mt-5"}>
                <p className={"text-xl text-center"}>{'프로젝트의 성격과 요구되는 서비스마다'}</p>
                <p className={"text-xl text-center"}>{'필요한 언어와 기술 스택은 서로 다릅니다.'}</p>
                <p className={"text-xl text-center"}>{'풀스택 개발자, 그리고 테크니컬 아키텍트의 시선으로 경험한 많은 프로젝트를 통해,'}</p>
                <p className={"text-xl text-center"}>{'상황에 필요한 기술 스택에 맞추어 개발할 수 있는 역량을 갖추었습니다.'}</p>
            </div>
        </div>
    );
}

export default StackList;
