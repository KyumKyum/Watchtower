import {ReactElement} from "react";
import GuestContainer from "@/containers/guest/GuestContainer";
import {ReadSignDto, SignDto} from "@/types/dto/Sign";
import fetchAllSigns from "@/fetch/guest/fetchAllSigns";


const Profile = async (): Promise<ReactElement> => {
    //* TODO: Make this component in serverside component
    const signList:ReadSignDto[] = await fetchAllSigns(); // SSR Props

    return (
        <GuestContainer signList={signList} />
    );
}

export default Profile;
