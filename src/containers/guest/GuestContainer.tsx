'use client'

import React, {ReactElement, useContext, useEffect, useState} from "react";
import InputForm from "@/component/guest/InputForm";
import {ReadSignDto, SignDto} from "@/types/dto/Sign";
import SignComponent from "@/component/guest/SignComponent";
import useFetchSignList from "@/fetch/guest/fetchSigns";

interface GuestContainerProps {
    signList: ReadSignDto[]
}

export default function GuestContainer () {
    const [loading, setLoading] = useState(true);
    const [siteKey, setSiteKey] = useState('');

    useEffect(() => {
        if(loading && siteKey.length <= 0){
            const url = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;

            if(typeof url === 'string'){
                setSiteKey(url);
                setLoading(false);
            }
        }
    }, [loading, siteKey.length])

    return (
        <div className={"flex flex-col items-center w-full h-full m-14"}>
            <div className={"w-full"}>
                <InputForm siteKey={siteKey}/>
                <br/>
                <SignComponent/>
            </div>
        </div>
    )
}

