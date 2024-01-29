'use client'

import React, {ReactElement, useEffect, useRef} from "react";
import {ReadSignDto, SignDto} from "@/types/dto/Sign";
import {arrayOf} from "prop-types";
import Sign from "@/component/guest/Sign";
import ScrollAnimFadeInOutWrapper from "@/wrapper/ScrollAnimFadeInOutWrapper";
import useFetchSignList from "@/fetch/guest/fetchSigns";

interface LoadingComponentProps{
    fetch: () => void
}

const LoadingComponent = ({fetch}:LoadingComponentProps) => {
    const loadingDiv = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    fetch();
                }
            },
            {threshold: 1} //* Execute if fully scrolled
        );

        if(loadingDiv.current){
            observer.observe(loadingDiv.current);
        }

        return () => observer.disconnect();
    },[])

    return (
        <div>
            <p className={"flex text-xl font-neodgm text-green-500 animate-pulse"} ref={loadingDiv}>{'Loading......'}</p>
        </div>
    )
}

const SignComponent: React.FC = (): ReactElement => {
    const {data, hasNextPage, fetchNextPage} = useFetchSignList();

    const loadNextSign = () => {
        if(hasNextPage){
            fetchNextPage();
        }
    }
    const renderSignList = () => {
        const renderList:ReactElement[] = [];
        if(data && data.pages){
            const signList = data.pages.reduce<ReadSignDto[]>((prev, {data}) => {
                if(data) prev.push(...data);
                return prev;
            },[])

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
        }

        return renderList;
    }

    return (
        <div className={"flex flex-col items-center space-y-4 w-full h-72 overflow-y-scroll p-4"}>
            <div className={"grid grid-cols-3 gap-x-2 gap-y-5 w-full"}>
                {renderSignList()}
            </div>
            {hasNextPage && <LoadingComponent fetch={loadNextSign}/>}
        </div>
    )
}

export default SignComponent;
