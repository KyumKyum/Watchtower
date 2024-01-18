import defaultPrismaException from "@/exception/defaultPrismaException";
import {isValid} from "@/logic/utils";

const defaultErrorHandling = (e:unknown): string => {
    if (e instanceof Error) {
        const resp = defaultPrismaException(e)
        const message = isValid(resp) ? resp :  e.message;
        return `FATAL ERROR: ${message}`
    }else{
        const stringified = String(e);
        return `UNKNOWN FATAL ERROR: ${stringified}`
    }
}

export default defaultErrorHandling;
