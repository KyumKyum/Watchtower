import {ReactElement} from "react";
import Canvas from "@/layout/Canvas";
import ProfileContainer from "@/containers/profile/ProfileContainer";
import GuestContainer from "@/containers/guest/GuestContainer";
import PostContainer from "@/containers/post/PostContainer";


const Profile = (): ReactElement => {
    return (
        <PostContainer />
    );
}

export default Profile;
