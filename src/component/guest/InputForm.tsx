import React, {ReactElement, useState} from "react";
import useTypeWriterAnim from "@/hook/useTypeWriterAnim";
import InputSign from "@/component/guest/InputSign";
import InputInfo from "@/component/guest/InputInfo";

const InputForm:React.FC = ():ReactElement => {
    const [curState, setCurState] = useState(0); //TODO: Change to 0
    const [completedSign, setCompletedSign] = useState('');


    return (
        <div className={"flex flex-col w-full h-72 border-green-500 border-2"}>
            <div className={"flex flex-row w-full justify-center items-center h-8 border-green-500 border-b-2"}>
                <p className={"text-sm font-D2Coding text-green-500"}>{'Kyumericano@Blog_Watchtower-Guestbook:~'}</p>
            </div>
            {(curState === 0) && <InputSign curString={completedSign} setCurState={setCurState} setCompleteSign={setCompletedSign}/>}
            {(curState === 1) && <InputInfo setCurState={setCurState}/>}
        </div>
    );
}

export default InputForm;
