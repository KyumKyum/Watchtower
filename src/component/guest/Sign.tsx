'use client'
import React, {ReactElement, useState} from "react";
import {dateStringBuilder} from "@/logic/utils";
import useTypeWriterAnim from "@/hook/useTypeWriterAnim";
import {hashCompare} from "@/logic/hash";
import deleteSignRequest from "@/fetch/guest/deleteSignRequest";

interface SignProps{
    id: string,
    userName: string,
    pw: string,
    content: string,
    createdAt: string
}

interface ShowSignProps {
    userName: string,
    content: string,
    curDate: string,
    setShowDelete: React.Dispatch<React.SetStateAction<boolean>>
}

interface DeleteSignProps {
    id: string,
    userName: string
    pw: string,
    setShowDelete: React.Dispatch<React.SetStateAction<boolean>>
}

const DeleteSign = ({id, userName, pw, setShowDelete}: DeleteSignProps):ReactElement => {

    const [plainPW, setPlainPW] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const checkPassword = async () => {
        setErrMsg('');
        if(plainPW.length <= 0) setErrMsg('Denied: 비밀번호를 입력해주세요!')
        else if(!await hashCompare(plainPW, pw)){
            setErrMsg('Denied: 비밀번호가 다릅니다!')
        }else{
            setErrMsg('삭제중...');
            const resp = await deleteSignRequest(id);

            if(!resp.successful){
                setErrMsg(`Error: ${resp.error}`);
            }else{
                window.location.reload();
            }
        }
    }

    const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlainPW(event.target.value);
    }

    return (
        <div className={"flex flex-col justify-between h-32 border-red-400 border-2 hover:animate-pulse"}>
            <div className={"flex flex-row items-center px-2 h-8 border-red-400 border-b-2"}>
                <div className={"flex flex-1"}>
                    <div className={"flex flex-row w-full justify-center items-center"}>
                        <p className={"text-sm font-neodgm text-red-400"}>{`guest_name@${userName}`}</p>
                    </div>
                </div>
                <button
                    className={"flex flex-row justify-center items-center w-5 h-5 border-red-400 border-2"}
                    onClick={() => {setShowDelete(false)}}
                >
                    <p className={"text-sm font-neodgm text-center text-red-400"}>{'X'}</p>
                </button>
            </div>
            <div className={"flex flex-row w-full px-2"}>
                <p className={"text-sm text-center w-full font-neodgm text-red-400"}>{'삭제하시겠습니까?'}</p>
            </div>
            <div className={"flex flex-row justify-center w-full px-2"}>
                <input className={"flex w-1/2 text-xs font-neodgm text-red-500 border-b-2 border-red-400 bg-transparent caret-green-500 outline-0 placeholder-red-400 text-center"}
                       type={'password'}
                       maxLength={20}
                       required={true}
                       placeholder={'비밀번호를 입력해주세요'}
                       value={plainPW}
                       onChange={handlePasswordInput}
                />
            </div>
            <div className={"flex flex-row justify-between w-full px-2"}>
                <p className={"text-xs font-neodgm text-red-500"}>{errMsg}</p>
                <button
                    className={"text-xs font-neodgm text-red-400"}
                    onClick={checkPassword}
                >{'DELETE'}</button>
            </div>
        </div>
    )
}

const ShowSign = ({userName, content, curDate, setShowDelete}:ShowSignProps): ReactElement => {
    return (
        <div className={"flex flex-col justify-between h-32 border-green-500 border-2 hover:animate-pulse"}>
            <div className={"flex flex-row items-center px-2 h-8 border-green-500 border-b-2"}>
                <div className={"flex flex-1"}>
                    <div className={"flex flex-row w-full justify-center items-center"}>
                        <p className={"text-sm font-neodgm text-green-500"}>{`guest_name@${userName}`}</p>
                    </div>
                </div>
                <button
                    className={"flex flex-row justify-center items-center w-5 h-5 border-green-500 border-2"}
                    onClick={() => {setShowDelete(true)}}
                >
                    <p className={"text-sm font-neodgm text-center text-green-500"}>{'X'}</p>
                </button>
            </div>
            <div className={"flex flex-row w-full px-2"}>
                <p className={"text-sm font-neodgm text-green-500"}>{useTypeWriterAnim(content,50)}</p>
            </div>
            <div className={"flex flex-row justify-end w-full px-2"}>
                <p className={"text-xs font-neodgm text-green-500"}>{curDate}</p>
            </div>
        </div>
    )
}

const Sign = ({id, userName, pw, content, createdAt}: SignProps):ReactElement => {
    const [curDate] = useState(dateStringBuilder(new Date(createdAt)));
    const [showDelete, setShowDelete] = useState(false)

    return (
        showDelete
            ? (<DeleteSign id={id} userName={userName} pw={pw} setShowDelete={setShowDelete}/>)
            : (<ShowSign userName={userName} content={content} curDate={curDate} setShowDelete={setShowDelete}/>)
    );
}

export default Sign;
