import React, {ReactElement, useEffect, useState} from "react";
import InputSign from "@/component/guest/InputSign";
import InputInfo from "@/component/guest/InputInfo";
import createSignRequest from "@/fetch/guest/createSignRequest";
import InputFinish from "@/component/guest/InputFinish";

interface InputFormProps{
    siteKey: string
}

const InputForm:React.FC<InputFormProps> = ({siteKey}: InputFormProps):ReactElement => {
    const [curState, setCurState] = useState(0); //TODO: Change to 0
    const [host, setHost] = useState('');
    const [completedSign, setCompletedSign] = useState('');
    const [completeUserName, setCompleteUserName] = useState('');
    const [encryptedPassword, setEncryptedPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('Sample Error Msg');

    useEffect(() => {
        if(curState === 2){
            //* Proceed Upload
            createSignRequest(host,{
                guestName: completeUserName,
                password: encryptedPassword,
                content: completedSign
            }).then(r => {
                if(!r.successful){
                    const msg = (r.error !== null) ? r.error : "Unknown Error!";
                    setErrorMsg(msg);
                    setCurState(3);
                }else{
                    setCurState(4);
                }
            });
        }else if(curState === 4){

        }
    },[completeUserName, completedSign, curState, encryptedPassword])

    useEffect(()=>{
        if(host.length <= 0){
            const envHost = process.env.NEXT_PUBLIC_HOST;
            if(typeof envHost === 'string'){
                setHost(envHost);
            }
        }
    },[host.length])
    return (
        <div className={"flex flex-col w-full h-72 border-green-500 border-2"}>
            <div className={"flex flex-row w-full justify-center items-center h-8 border-green-500 border-b-2"}>
                <p className={"text-sm font-neodgm text-green-500"}>{'Kyumericano@Blog_Watchtower-Guestbook:~'}</p>
            </div>
            {(curState === 0) && <InputSign curString={completedSign} setCurState={setCurState} setCompleteSign={setCompletedSign}/>}
            {(curState === 1) && <InputInfo setCurState={setCurState} setCompletedUsername={setCompleteUserName} setEncryptedPassword={setEncryptedPassword} siteKey={siteKey}/>}
            {(curState === 2) &&
                <div className={"flex flex-row w-full h-full justify-center items-center animate-bounce"}>
                    <p className={"text-2xl text-green-500 font-neodgm"}>{"방명록 접수중... 끄적끄적... 로딩 중..."}</p>
                </div>}
            {(curState === 3) &&
                <div className={"flex flex-row w-full h-full justify-center items-center"}>
                    <p className={"text-2xl text-red-500 text-center font-neodgm"}>
                        {"ERROR! 에러 발생!! :("}
                        <br/>{"만약에 이걸 보시는 여러분이 제 지인이라면,"}
                        <br/>{"아래의 오류 메세지를 저에게 보여주세요!"}
                        <br/><br/>{errorMsg}
                    </p>
                </div>}
            {(curState === 4) && <InputFinish/>}
        </div>
    );
}

export default InputForm;
