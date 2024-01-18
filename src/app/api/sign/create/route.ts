import {NextApiRequest, NextApiResponse} from "next";
import {NextResponse} from "next/server";
import defaultErrorHandling from "@/app/api/sign/exception/defaultErrorHandling";
import {Resp} from "@/app/api/sign/response/resp";
import {CreateSignDto} from "@/types/dto/Sign";
import createNewSign from "@/app/api/sign/repository/createNewSign";

export async function POST (
    req: Request,
):Promise<NextResponse<Resp>> {
    //* Sign Route - Create (api/ign/create)
    try{
        const newSign: CreateSignDto = await req.json();

        const signCreateResp = await createNewSign(newSign);

        return NextResponse.json({
            ok: signCreateResp.ok,
            error: signCreateResp.error,
        });
    }catch (error){
        const resp = defaultErrorHandling(error);
        return NextResponse.json({
            ok: false,
            error: resp
        });
    }
}
