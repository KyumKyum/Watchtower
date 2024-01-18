import prisma from "@/lib/prisma";
import {CreateSignDto} from "@/types/dto/Sign";
import {Resp} from "@/app/api/sign/response/resp";
import {isValid} from "@/logic/utils";
import defaultErrorHandling from "@/app/api/sign/exception/defaultErrorHandling";

const createNewSign = async (newSign: CreateSignDto):Promise<Resp> => {
    try{
        const resp = await prisma.sign.create({
            data: {
                guestName: newSign.guestName,
                password: newSign.password,
                content: newSign.content,
            }
        });

        if(isValid(resp)){
            return {
                ok: true,
                error: null
            };
        }else{
            return {
                ok:false,
                error: 'ERROR: Invalid value for resp.'
            }
        }
    }catch (error) {
        const errMsg = defaultErrorHandling(error);
        return {
            ok: false,
            error: errMsg
        }
    }
}

export default createNewSign;
