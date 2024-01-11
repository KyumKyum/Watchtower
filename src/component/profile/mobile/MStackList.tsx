import React, {ReactElement} from "react";

const StackList: React.FC = (): ReactElement => {
    return (
        <div className={"w-3/4"}>
            <div className={"mt-5"}>
                <p className={"text-lg text-center"}>{'Favorite Language:'}</p>
                <p className={"text-sm text-center"}>{'Typescript, Kotlin, Golang'}</p>
            </div>
            <div className={"mt-5 space-y-4"}>
                <p className={"text-xs text-center"}>{'프로젝트의 성격과'}<br/>{'요구되는 서비스마다'}<br/>{'필요한 언어와 기술 스택은'}<br/>{'서로 다릅니다.'}</p>
                <p className={"text-xs text-center"}>{'지금까지 경험한 많은 '}<br/>{'프로젝트와 활동들을 통해,'}<br/>{'상황에 필요한 기술 스택에'}<br/>{'맞추어 개발할 수 있는 역량을'}<br/>{'갖추었습니다.'}</p>
            </div>
        </div>
    );
}

export default StackList;
