"use client"

import {ReactElement, useContext} from "react";
import Canvas from "@/layout/Canvas";
import ProfileContainer from "@/containers/profile/ProfileContainer";
import useMobileCheck from "@/hook/useMobileCheck";
import MProfileContainer from "@/containers/profile/MProfileContainer";
import {DeviceContext} from "@/context/DeviceContext";


const Profile = (): ReactElement => {

    const isMobile = useMobileCheck();
    const isSSRMobile = useContext(DeviceContext).isSSRMobile;

    return (
        (isSSRMobile || isMobile) ? <MProfileContainer/> : <ProfileContainer />
    );
}

export default Profile;
