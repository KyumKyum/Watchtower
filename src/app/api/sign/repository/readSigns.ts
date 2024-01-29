import defaultErrorHandling from "@/app/api/sign/exception/defaultErrorHandling";
import {Resp} from "@/app/api/sign/response/resp";
import prisma from "@/lib/prisma";

const readSigns = async (lastId: string | string[] | null):Promise<Resp> => {
    try{
        const fetchedSigns = await prisma.sign.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            take: 6,
            skip: lastId ? 1 : 0,
            ...(lastId && {cursor: {id: lastId as string}})
        });

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
