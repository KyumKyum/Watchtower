import {ReadSignDto, SignDto} from "@/types/dto/Sign";
import defaultErrorHandling from "@/app/api/sign/exception/defaultErrorHandling";

const fetchAllSigns = async (): Promise<ReadSignDto[]> => {
    try{
        //* TODO: Need to change url based on production mode.
        const resp = await fetch('http://localhost:16253/api/sign/read', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache",
            },
            cache: 'no-store'
        });

        const parsedData = await resp.json();

        if(!parsedData.ok){
            console.log(parsedData.error);
            //TODO: Need to add error handling mech
            //alert(`ERROR! ${parsedData.error}`);
            return [];
        }else{
            return parsedData.data;
        }
    }catch (error: unknown) {
        const errMsg = defaultErrorHandling(error);
        console.log(errMsg);
        //TODO: Need to add error handling mech
        //alert(`ERROR! ${errMsg}`);
        return [];
    }
}

export default fetchAllSigns;
