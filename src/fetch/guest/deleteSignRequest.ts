const deleteSignRequest = async (id: string):Promise<RetVal> => {
    try{
        const ret = await fetch(`/api/sign/delete`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id: id})
        });

        const data = await ret.json();
        if(data.ok === true){
            return {
                successful: true,
                error: null,
                data: null
            }
        }else{
            return {
                successful: false,
                error: data.error,
                data:null
            }
        }


    }catch (e){
        const msg = (e instanceof Error) ? e.message : String(e);
        return {
            successful:false,
            error: msg,
            data:null
        }
    }
}

export default deleteSignRequest;
