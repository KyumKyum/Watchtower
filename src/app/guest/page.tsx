'use client'
import {ReactElement, useState} from "react";
import GuestContainer from "@/containers/guest/GuestContainer";
import {ReadSignDto, SignDto} from "@/types/dto/Sign";
import fetchSigns from "@/fetch/guest/fetchSigns";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";


const Profile = (): ReactElement => {

    const [client] = useState(new QueryClient());

    return (
        <QueryClientProvider client={client}>
            <GuestContainer/>
        </QueryClientProvider>
    );
}

export default Profile;
