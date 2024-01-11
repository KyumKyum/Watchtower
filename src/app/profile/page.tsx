"use client"

import {ReactElement} from "react";
import Canvas from "@/layout/Canvas";
import ProfileContainer from "@/containers/profile/ProfileContainer";
import useMobileCheck from "@/hook/useMobileCheck";
import MProfileContainer from "@/containers/profile/MProfileContainer";


const Profile = (): ReactElement => {

    const isMobile = useMobileCheck();

    return (
        isMobile ? <MProfileContainer/> : <ProfileContainer />
    );
}

export default Profile;
