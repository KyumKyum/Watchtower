import {NextResponse} from "next/server";
import {Resp} from "@/app/api/sign/response/resp";
import {CreateSignDto} from "@/types/dto/Sign";
import createNewSign from "@/app/api/sign/repository/createNewSign";
import defaultErrorHandling from "@/app/api/sign/exception/defaultErrorHandling";
import deleteSign from "@/app/api/sign/repository/deleteSign";

export async function DELETE (
    req: Request,
):Promise<NextResponse<Resp>> {
    //* Sign Route - Create (api/ign/create)
    try{
        const deleteTgt: {
            id: string
        } = await req.json();

        const deleteSignResp = await deleteSign(deleteTgt.id);

        return NextResponse.json({
            ok: deleteSignResp.ok,
            error: deleteSignResp.data,
            data: null
        });
    }catch (error){
        const resp = defaultErrorHandling(error);
        return NextResponse.json({
            ok: false,
            error: resp,
            data: null
        });
    }
}
