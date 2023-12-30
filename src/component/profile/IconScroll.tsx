'use client';

import React, {ReactElement, useEffect, useState} from "react";
import JS from '../../public/svg/js.svg'
import TS from '../../public/svg/ts.svg'
import Kotlin from '../../public/svg/kotlin.svg'
import Golang from '../../public/svg/go.svg'
import RT from '../../public/svg/react.svg'
import Svelte from '../../public/svg/svelte.svg'
import Next from '../../public/svg/nextjs.svg'
import Tailwind from '../../public/svg/tailwind.svg'
import StyledComponent from '../../public/svg/styledcomponent.svg'
import Nest from '../../public/svg/nestjs.svg'
import Exp from '../../public/svg/expressjs.svg'
import SB from '../../public/svg/springboot.svg'
import NodeJS from '../../public/svg/nodejs.svg'
import PR from '../../public/svg/prisma.svg'
import TM from '../../public/svg/typeorm.svg'
import HB from '../../public/svg/hibernate.svg'
import Docker from '../../public/svg/docker.svg'
import GRPC from '../../public/svg/grpc.svg'
import GQL from '../../public/svg/graphql.svg'
import {cls} from "@/logic/utils";

interface IconScrollProps {
    animate: string
}

const IconScroll: React.FC<IconScrollProps> = ({animate}:IconScrollProps):ReactElement => {
    return (
        <div className={"flex flex-col items-center w-24 h-80 overflow-hidden whitespace-nowrap"}>
            <div className={cls("flex flex-col items-center whitespace-nowrap space-y-5 ", animate)}>
                <JS className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
                <Kotlin className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
                <TS className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
                <Golang className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
                <RT className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
                <Svelte className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
                <Next className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
                <Tailwind className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
                <StyledComponent className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
                <Nest className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
                <Exp className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
                <SB className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
                <NodeJS className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
                <PR className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
                <TM className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
                <HB className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
                <Docker className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
                <GQL className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
                <GRPC className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
                <JS className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
                <Kotlin className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
                <TS className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
                <Golang className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
                <RT className={"fill-white stroke-white min-h-[50px] min-w-[50px]"}/>
            </div>
        </div>
    )
}

export default IconScroll;
