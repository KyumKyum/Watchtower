import {NextResponse} from "next/server";
import defaultErrorHandling from "@/app/api/sign/exception/defaultErrorHandling";
import {Resp} from "@/app/api/sign/response/resp";
import readSigns from "@/app/api/sign/repository/readSigns";
import {SignDto} from "@/types/dto/Sign";
import {NextApiRequest} from "next";

export async function GET (
    req: NextApiRequest,
):Promise<NextResponse<Resp>>{
    try {
        if(!req.url){
            return NextResponse.json({
                ok: false,
                error: 'URL Param Not Provided',
                data: null
            });
        }
        const url = new URL(req.url);
        const lastId = url.searchParams.get('lastId');

        const fetchResp = await readSigns(lastId);

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
