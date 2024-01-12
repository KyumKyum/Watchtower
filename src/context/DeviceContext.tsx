import {createContext, useContext} from "react";

interface DeviceContextProps{
    isSSRMobile: boolean
}
export const DeviceContext = createContext<DeviceContextProps>({isSSRMobile:false});
