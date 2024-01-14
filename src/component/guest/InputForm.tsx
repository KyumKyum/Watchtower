import React, {ReactElement, useState} from "react";
import useTypeWriterAnim from "@/hook/useTypeWriterAnim";

const InputForm:React.FC = ():ReactElement => {
    const [sign, setSign] = useState('');
    const [num, setNum] = useState(0);

    const handleSignInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const curSign = event.target.value;
        setSign(curSign);
        setNum(curSign.length);
    }

    return (
        <div className={"flex flex-col w-full h-72 border-green-500 border-2"}>
            <div className={"flex flex-row w-full justify-center items-center h-8 border-green-500 border-b-2"}>
                <p className={"text-sm font-D2Coding text-green-500"}>{'Kyumericano@Blog_Watchtower-Guestbook:~'}</p>
            </div>
            <div className={"flex flex-col h-56 px-8 py-6 space-y-2"}>
                <p className={"text-lg font-D2Coding text-green-500"}>
                    {"~ > "} <span className={"border-r-8 border-green-500"}>{useTypeWriterAnim(
                        "   방명록을 적는 페이지에요! 제 블로그에 오신 모든 분들이 좋은 하루가 보낼 수 있기를 :) ",
                        100)}
                    </span>
                </p>
                <input className={"flex w-full text-lg font-D2Coding text-green-500 border-0 bg-transparent caret-green-500 outline-0"}
                       type={'text'}
                       maxLength={200}
                       required={true}
                       value={sign}
                       onChange={handleSignInput}
                />
            </div>
            <div className={"flex flex-row w-full justify-end items-center px-4 space-x-8"}>
                <button className={"flex flex-row justify-center items-center h-full bg-transparent"}>
                    <p className={"text-sm font-D2Coding text-green-500"}>{'방명록 남기기'}</p>
                </button>
                <p className={"text-sm font-D2Coding text-green-500"}>{`${num} / 200`}</p>
            </div>
        </div>
    );
}

export default InputForm;
