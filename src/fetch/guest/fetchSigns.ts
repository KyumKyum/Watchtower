import defaultErrorHandling from "@/app/api/sign/exception/defaultErrorHandling";
import {fetchURLBuilder} from "@/logic/utils";
import {useInfiniteQuery} from "@tanstack/react-query";
import {SignList} from "@/fetch/type";

const useFetchSignList = () => {
    return useInfiniteQuery<SignList>({
        getNextPageParam: (lastPage: SignList, allPages: Array<SignList>): string | undefined => {
            return (lastPage.data.length > 0) ?  lastPage.data[lastPage.data.length - 1].id : undefined;
        },
        queryKey: ['sign'],
        queryFn: ({pageParam = ""}) => fetchSigns(pageParam),
        initialPageParam: ''
    })

}

const fetchSigns = async (pageParam: unknown):Promise<SignList>=> {
    try{
        //* TODO: Need to change url based on production mode.

        const lastId: string = (typeof pageParam === 'string') ? pageParam : '';
        //headers().get("host")

        const resp = await fetch(`/api/sign/read?lastId=${lastId}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache",
            },
            cache: 'no-store'
        });

        const parsedData = await resp.json();

        if(!parsedData.ok){
            console.log(parsedData.error);
            //TODO: Need to add error handling mech
            //alert(`ERROR! ${parsedData.error}`);
            return {
                ok: false,
                data: []
            };
        }else{
            return {
                ok: true,
                data: parsedData.data
            };
        }
    }catch (error: unknown) {
        const errMsg = defaultErrorHandling(error);
        console.log(errMsg);
        //TODO: Need to add error handling mech
        //alert(`ERROR! ${errMsg}`);
        return {
            ok: false,
            data: []
        };
    }
}

export default useFetchSignList;
