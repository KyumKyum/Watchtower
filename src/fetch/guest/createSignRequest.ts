import {CreateSignDto} from "@/types/dto/Sign";
import {RetVal} from "@/fetch/type";

const createSignRequest = async (host:string, createSignDto:CreateSignDto):Promise<RetVal> => {
    try{
        const ret = await fetch(`/api/sign/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(createSignDto)
        });

        const data = await ret.json();
        if(data.ok === true){
            return {
                successful: true,
                error: null,
                data: null
            }
        }else{
            return {
                successful: false,
                error: data.error,
                data:null
            }
        }


    }catch (e){
        const msg = (e instanceof Error) ? e.message : String(e);
        return {
            successful:false,
            error: msg,
            data:null
        }
    }
}

export default createSignRequest;
