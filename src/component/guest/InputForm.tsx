import React, {ReactElement, useEffect, useState} from "react";
import InputSign from "@/component/guest/InputSign";
import InputInfo from "@/component/guest/InputInfo";

const InputForm:React.FC = ():ReactElement => {
    const [curState, setCurState] = useState(1); //TODO: Change to 0
    const [completedSign, setCompletedSign] = useState('');
    const [completeUserName, setCompleteUserName] = useState('');
    const [encryptedPassword, setEncryptedPassword] = useState('');

    useEffect(() => {
        if(curState === 2){
            //* Proceed Upload
            console.log(completeUserName);
            console.log(encryptedPassword)
        }
    },[completeUserName, curState, encryptedPassword])


    return (
        <div className={"flex flex-col w-full h-72 border-green-500 border-2"}>
            <div className={"flex flex-row w-full justify-center items-center h-8 border-green-500 border-b-2"}>
                <p className={"text-sm font-D2Coding text-green-500"}>{'Kyumericano@Blog_Watchtower-Guestbook:~'}</p>
            </div>
            {(curState === 0) && <InputSign curString={completedSign} setCurState={setCurState} setCompleteSign={setCompletedSign}/>}
            {(curState === 1) && <InputInfo setCurState={setCurState} setCompletedUsername={setCompleteUserName} setEncryptedPassword={setEncryptedPassword}/>}
            {(curState === 2) &&
                <div className={"flex flex-row w-full h-full justify-center items-center animate-bounce"}>
                    <p className={"text-2xl text-green-500 font-neodgm"}>{"방명록 접수중... 끄적끄적... 로딩 중..."}</p>
                </div>}
        </div>
    );
}

export default InputForm;
