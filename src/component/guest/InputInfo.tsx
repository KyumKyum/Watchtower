import React, {ReactElement, useState} from "react";
import useTypeWriterAnim from "@/hook/useTypeWriterAnim";

interface InputInfoProps {
    setCurState: React.Dispatch<React.SetStateAction<number>>
}

const InputInfo = ({setCurState}:InputInfoProps): ReactElement => {
    const [num, setNum] = useState(0);
    const [invalidNicknameState, setInvalidNicknameState] = useState(false);
    const [invalidPasswordState, setInvalidPasswordState] = useState(false);


    return (
        <>
            <div className={"flex flex-col h-56 px-8 py-6 space-y-2"}>
                <p className={"text-lg font-neodgm text-green-500"}>
                    {"~ > "} <span className={"border-r-8 border-green-500"}>{useTypeWriterAnim(
                    "   감사한 방명록을 남기고 가시는 여러분이 누구인지 살짝쿵 알려줄래요? :D ",
                    100)}
                    </span>
                </p>
                <div className={"flex flex-row space-x-4"}>
                    <p className={"text-lg font-neodgm text-green-500"}>{'닉네임: '}</p>
                    <input className={"flex flex-1 text-lg font-neodgm text-green-500 border-0 bg-transparent caret-green-500 outline-0"}
                           type={'text'}
                           maxLength={20}
                           required={true}
                    />
                </div>
                <div className={"flex flex-row space-x-4"}>
                    <p className={"text-lg font-neodgm text-green-500"}>{'비밀번호 (최대 20자!): '}</p>
                    <input className={"flex flex-1 text-lg font-neodgm text-green-500 border-0 bg-transparent caret-green-500 outline-0"}
                           type={'password'}
                           maxLength={20}
                           required={true}
                    />
                </div>
            </div>
            <div className={"flex flex-row w-full justify-between items-center px-4 "}>
                <div className={"flex flex-row"}>
                    {invalidNicknameState && <p className={"text-sm font-neodgm text-red-500"}>{'Error: 닉네임은 1자 이상 입력해야해요!'}</p>}
                    {invalidPasswordState && <p className={"text-sm font-neodgm text-red-500"}>{'Error: 비밀번호는 4자 이상이어야해요!'}</p>}
                </div>
                <div className={"flex flex-row space-x-8"}>
                    <button
                        className={"flex flex-row justify-center items-center h-full bg-transparent"}
                        onClick={() => setCurState(0)}
                    >
                        <p className={"text-sm font-neodgm text-green-500"}>{'뒤로가기'}</p>
                    </button>
                    <button
                        className={"flex flex-row justify-center items-center h-full bg-transparent"}
                        // onClick={checkIfSignValid}
                    >
                        <p className={"text-sm font-neodgm text-green-500"}>{'방명록 남기기'}</p>
                    </button>
                    <p className={"text-sm font-neodgm text-green-500"}>{`${num} / 200`}</p>
                </div>
            </div>
        </>
    )
}

export default InputInfo;
