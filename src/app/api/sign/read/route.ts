import {NextResponse} from "next/server";
import defaultErrorHandling from "@/app/api/sign/exception/defaultErrorHandling";
import {Resp} from "@/app/api/sign/response/resp";
import readSigns from "@/app/api/sign/repository/readSigns";
import {SignDto} from "@/types/dto/Sign";

export async function GET (
    req: Request,
):Promise<NextResponse<Resp>>{
    try {
        const fetchResp = await readSigns();

        if(!fetchResp.ok){
            return NextResponse.json({
                ok: false,
                error: fetchResp.error,
                data: fetchResp.data
            });
        }

        const signData: SignDto[] = fetchResp.data;

        return NextResponse.json({
            ok: true,
            error: null,
            data: signData
        });
    }catch (error: unknown){
        const errMsg = defaultErrorHandling(error);
        return NextResponse.json({
            ok: false,
            error: errMsg,
            data: null
        });
    }
}
