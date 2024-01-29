import {ReadSignDto} from "@/types/dto/Sign";

interface RetVal {
    successful: boolean,
    error: string|null,
    data: any
}

interface SignList {
    ok: boolean,
    data: ReadSignDto[]
}
