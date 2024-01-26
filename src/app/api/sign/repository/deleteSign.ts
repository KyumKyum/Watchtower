import {Resp} from "@/app/api/sign/response/resp";
import defaultErrorHandling from "@/app/api/sign/exception/defaultErrorHandling";
import prisma from "@/lib/prisma";

const deleteSign = async (id: string):Promise<Resp> => {
    try{
        const res = await prisma.sign.delete({
            where: {
                id
            }
        });

        return {
            ok: true,
            error: null,
            data: null
        };

    }catch (error: unknown){
        const errMsg = defaultErrorHandling(error);

        return {
            ok: false,
            error: errMsg,
            data: null
        };
    }
}

export default deleteSign;
