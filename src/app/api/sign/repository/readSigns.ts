import defaultErrorHandling from "@/app/api/sign/exception/defaultErrorHandling";
import {Resp} from "@/app/api/sign/response/resp";
import prisma from "@/lib/prisma";

const readSigns = async ():Promise<Resp> => {
    try{
        const fetchedSigns = await prisma.sign.findMany({
            orderBy: {
                createdAt: 'desc'
            },
        });
        //TODO: Need to modify the return value based on the condition
        return {
            ok: true,
            error: null,
            data: fetchedSigns
        };
    }catch (error: unknown) {
        const errMsg = defaultErrorHandling(error);

        return {
            ok: false,
            error: errMsg,
            data: null
        };
    }
}

export default readSigns;
