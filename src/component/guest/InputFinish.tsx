import React, {ReactElement, useEffect, useState} from "react";
import useInterval from "@/hook/useInterval";

const InputFinish = ():ReactElement => {
    const [count, setCount] = useState(3);

    useInterval(() => {
        setCount(cur => cur - 1);
    }, (count > 0) ? 1000 : null);

    useEffect(() => {
        if(count <= 0){
            window.location.reload();
        }
    },[count])

    return (
        <div className={"flex flex-row w-full h-full justify-center items-center animate-bounce"}>
            <p className={"text-2xl text-green-500 text-center font-neodgm"}>
                {"방명록을 저장했습니다!! 감사합니당 :)"}
                <br/>{`${count}초 후 자동으로 새로고침됩니다!!`}
            </p>
        </div>
    )
}

export default InputFinish;
