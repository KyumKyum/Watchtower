"use client"

import React, {ReactElement, ReactNode, useEffect, useState} from "react";
import {cls} from "@/logic/utils";
import {MTechBoxSpecific} from "@/component/profile/constants/MTechboxSpecific";

interface TechBoxProps {
    borderColor: string,
    children: React.ReactNode
}
const TechSpecific: React.FC = (): ReactElement => {
    const TechBox:React.FC<TechBoxProps> = ({borderColor, children}: TechBoxProps): ReactElement => {
        return (
            <div className={cls("flex flex-col justify-center items-center m-2 py-4 border-4 rounded-lg space-y-4", borderColor)}>
                {children}
            </div>
        )
    }

    return (
        <div className={"flex flex-col space-y-4 w-full"}>
            {MTechBoxSpecific.map((box,index) => {
                return(
                    <TechBox key={index} borderColor={box.borderColor}>
                        {box.content}
                    </TechBox>
                )
            })}
        </div>
    )
}

export default TechSpecific;
