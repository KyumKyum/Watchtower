import {ReadSignDto} from "@/types/dto/Sign";

export interface RetVal {
    successful: boolean,
    error: string|null,
    data: any
}

export interface SignList {
    ok: boolean,
    data: ReadSignDto[]
}
