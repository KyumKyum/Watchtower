import 'animate.css'
import {ReactElement} from "react";

export default function Slogan(): ReactElement{
    return (
        <div className={"flex flex-col space-y-10 h-full justify-start p-10"}>
            <p className={"font-D2Coding font-bold text-8xl animate__animated animate__fadeInUp"}>
                {'A Developer'}<br/>
                {'Who Loves Workout.'}
            </p>
            <p className={"font-D2Coding font-bold text-6xl leading-loose animate__animated animate__fadeInUp"}>
                {'운동하는 개발자의'}<br/>
                {'개발/취미 블로그.'}
            </p>
        </div>
    )
}
