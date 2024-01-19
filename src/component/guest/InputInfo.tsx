import React, {ReactElement, useEffect, useRef, useState} from "react";
import useTypeWriterAnim from "@/hook/useTypeWriterAnim";
import {hashCompare, hashValue} from "@/logic/hash";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface InputInfoProps {
    setCurState: React.Dispatch<React.SetStateAction<number>>,
    setCompletedUsername: React.Dispatch<React.SetStateAction<string>>,
    setEncryptedPassword: React.Dispatch<React.SetStateAction<string>>,
    siteKey: string
}

const InputInfo = ({setCurState, setCompletedUsername, setEncryptedPassword, siteKey}:InputInfoProps): ReactElement => {
    const [username, setUsername] = useState('');
    const [plainPassword, setPlainPassword] = useState('');
    const [invalidNicknameState, setInvalidNicknameState] = useState(false);
    const [invalidPasswordState, setInvalidPasswordState] = useState(false);
    const [invalidUser, setInvalidUser] = useState(false);
    const [verified, setVerified] = useState(false);

    const captchaRef:React.MutableRefObject<HCaptcha|null> = useRef(null);

    const onLoad = () => {
        if(captchaRef.current){
            captchaRef.current.execute();
        }
    }

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        const curUsername = event.target.value;
        setUsername(curUsername);
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const curPlainPassword = event.target.value;
        setPlainPassword(curPlainPassword);
    }

    const validateInput = () => {
        //*Initialize
        setInvalidNicknameState(false);
        setInvalidPasswordState(false);
        setInvalidUser(false);
        if(username.length < 1){
            setInvalidNicknameState(true);
        }else if(plainPassword.length < 4){
            setInvalidPasswordState(true);
        }else if(!verified){
            setInvalidUser(true);
        }else{
            //* Push Data
            setCompletedUsername(username);
            setEncryptedPassword(hashValue(plainPassword,10));
            setCurState(2);
        }
    }


    return (
        <>
            <div className={"flex flex-col h-56 px-8 py-6 space-y-2"}>
                <p className={"text-lg font-neodgm text-green-500"}>
                    {"~ > "} <span className={"border-r-8 border-green-500"}>{useTypeWriterAnim(
                    "   방명록을 남기고 가시는 감사한 여러분이 누구인지 알려줄래요? :D ",
                    100)}
                    </span>
                </p>
                <div className={"flex flex-row space-x-4"}>
                    <p className={"text-lg font-neodgm text-green-500"}>{'닉네임: '}</p>
                    <input className={"flex flex-1 text-lg font-neodgm text-green-500 border-0 bg-transparent caret-green-500 outline-0"}
                           type={'text'}
                           maxLength={20}
                           required={true}
                           value={username}
                           onChange={handleUsername}
                    />
                </div>
                <div className={"flex flex-row space-x-4"}>
                    <p className={"text-lg font-neodgm text-green-500"}>{'비밀번호 (최대 20자!): '}</p>
                    <input className={"flex flex-1 text-lg font-neodgm text-green-500 border-0 bg-transparent caret-green-500 outline-0"}
                           type={'password'}
                           maxLength={20}
                           required={true}
                           value={plainPassword}
                           onChange={handlePassword}
                    />
                </div>
                <div className={"flex flex-row "}>
                    <form>
                        <HCaptcha
                            sitekey={siteKey}
                            onVerify={(token, ekey) => {
                                if(token.length > 0 && ekey.length){
                                    setVerified(true);
                                }
                            }}
                            ref={captchaRef}
                        />
                    </form>
                </div>
            </div>
            <div className={"flex flex-row w-full justify-between items-center px-4 "}>
                <div className={"flex flex-row"}>
                    {invalidNicknameState && <p className={"text-sm font-neodgm text-red-500"}>{'Error: 닉네임은 1자 이상 입력해야해요!'}</p>}
                    {invalidPasswordState && <p className={"text-sm font-neodgm text-red-500"}>{'Error: 비밀번호는 4자 이상이어야해요!'}</p>}
                    {invalidUser && <p className={"text-sm font-neodgm text-red-500"}>{'Error: Captcha를 진행해주세요!'}</p>}
                </div>
                <div className={"flex flex-row space-x-8"}>
                    <button
                        className={"flex flex-row w-20 justify-center items-center h-full bg-transparent"}
                        onClick={() => setCurState(0)}
                    >
                        <p className={"text-sm font-neodgm text-green-500"}>{'뒤로가기'}</p>
                    </button>
                    <button
                        className={"flex flex-row w-24 justify-center items-center h-full bg-transparent"}
                        onClick={validateInput}
                    >
                        <p className={"text-sm font-neodgm text-green-500"}>{'방명록 남기기'}</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default InputInfo;
