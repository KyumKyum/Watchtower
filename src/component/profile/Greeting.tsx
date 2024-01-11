import {ReactElement} from "react";
import Jump from '../../../public/static/images/jump.webp'
import Image from "next/image";
import Badge from "@/component/profile/Badge";

import IG from '../../../public/static/svg/IG.svg'
import Github from '../../../public/static/svg/github.svg'
import Gmail from '../../../public/static/svg/gmail.svg'

export default function Greeting(): ReactElement {
    return (
        <div className={"flex flex-col w-full items-center"}>
            <Image className={"object-contain w-48 h-48"} src={Jump} alt={"jump"}/>
            <p className={"font-rocky text-5xl m-20"}>{'Lim  Kyu  Min'}</p>
            <p className={"font-mariburi font-bold text-xl"}>{'A full-stack developer who loves workout, always eager to learn new things.'}</p>
            <div className={"flex flex-row justify-center items-center my-4"}>
                <Badge icon={IG} name={'@kyumerican0'} href={'https://www.instagram.com/kyumerican0/'}/>
                <Badge icon={Github} name={'KyumKyum'} href={'https://github.com/KyumKyum'}/>
                <Badge icon={Gmail} name={'mycheesepasta@gmail.com'} href={'mailto:mycheesepasta@gmail.com'}/>
            </div>
        </div>
    );
}
