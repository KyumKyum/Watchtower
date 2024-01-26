import React, {ReactElement} from "react";
import {ReadSignDto, SignDto} from "@/types/dto/Sign";
import {arrayOf} from "prop-types";
import Sign from "@/component/guest/Sign";
import ScrollAnimFadeInOutWrapper from "@/wrapper/ScrollAnimFadeInOutWrapper";

interface SignComponentProps{
    signList: ReadSignDto[]
}

const SignComponent: React.FC<SignComponentProps> = ({signList}:SignComponentProps): ReactElement => {

    const renderList:ReactElement[] = [];

    for(const sign of signList){
        renderList.push(
            <ScrollAnimFadeInOutWrapper key={sign.id} fastRender={false}>
                <Sign
                    id = {sign.id}
                    userName={sign.guestName}
                    pw={sign.password}
                    content={sign.content}
                    createdAt={sign.createdAt}
                />
            </ScrollAnimFadeInOutWrapper>);
    }

    return (
        <div className={"flex w-full h-80 overflow-y-scroll p-4"}>
            <div className={"grid grid-cols-3 gap-x-2 gap-y-5 w-full"}>
                {renderList}
            </div>
        </div>
    )
}

export default SignComponent;
