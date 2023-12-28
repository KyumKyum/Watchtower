import React, {ReactElement} from "react";

const StackList: React.FC = (): ReactElement => {
    return (
        <div className={"w-3/4"}>
            <div className={"mt-5"}>
                <p className={"text-2xl text-center"}>{'Favorite Language:'}</p>
                <p className={"text-lg text-center"}>{'Javascript, Typescript, Kotlin, Golang'}</p>
            </div>
            <div className={"mt-5"}>
                <p className={"text-2xl text-center"}>{'Favorite Combination'}</p>
                <p className={"text-lg text-center"}>{'Svelte/React and Express for light-weighted web service.'}</p>
                <p className={"text-lg text-center"}>{'NextJS and NestJS/Spring Boot for robust, stable web service.'}</p>
                <p className={"text-lg text-center"}>{'RN with Typescript for Cross-platform Application Service'}</p>
            </div>
        </div>
    );
}

export default StackList;
