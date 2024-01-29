import React, {ReactElement, useState} from "react";
import useTypeWriterAnim from "@/hook/useTypeWriterAnim";

interface InputSignProps {
    curString: string,
    setCompleteSign: React.Dispatch<React.SetStateAction<string>>,
    setCurState: React.Dispatch<React.SetStateAction<number>>
}

const InputSign = ({curString,setCompleteSign, setCurState}:InputSignProps): ReactElement => {
    const [sign, setSign] = useState(curString);
    const [invalidNumState, setInvalidNumState] = useState(false);

    const handleSignInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const curSign = event.target.value;
        setSign(curSign);
    }

    const checkIfSignValid = () => {
        if(sign.length < 5){
            setInvalidNumState(true);
        }else{
            setInvalidNumState(false);
            setCompleteSign(sign);
            setCurState(1); //* Move to next stage
        }
    }

    return (
        <>
            <div className={"flex flex-col h-56 px-8 py-6 space-y-2"}>
                <p className={"text-lg font-neodgm text-green-500"}>
                    {"~ > "} <span className={"border-r-8 border-green-500"}>{useTypeWriterAnim(
                    "   방명록을 적는 페이지에요! 제 블로그에 오신 모든 분들이 좋은 하루를 보낼 수 있기를 :) ",
                    50)}
                    </span>
                </p>
                <input className={"flex w-full text-lg font-neodgm text-green-500 border-0 bg-transparent caret-green-500 outline-0"}
                       type={'text'}
                       maxLength={200}
                       required={true}
                       value={sign}
                       onChange={handleSignInput}
                />
            </div>
            <div className={"flex flex-row w-full justify-between items-center px-4 "}>
                <div className={"flex flex-row"}>
                    {invalidNumState && <p className={"text-sm font-neodgm text-red-500"}>{'Error: 최소 5자 이상 입력해주세요!'}</p>}
                </div>
                <div className={"flex flex-row space-x-8"}>
                    <button
                        className={"flex flex-row w-20 justify-center items-center h-full bg-transparent"}
                        onClick={checkIfSignValid}
                    >
                        <p className={"text-sm font-neodgm text-green-500"}>{'다음'}</p>
                    </button>
                    <p className={"text-sm font-neodgm text-green-500"}>{`${sign.length} / 200`}</p>
                </div>
            </div>
        </>
    )
}

export default InputSign;
