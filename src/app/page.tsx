"use client"
import React, {ReactElement, useContext} from "react";
import MainContainer from "@/containers/main/MainContainer";
import useMobileCheck from "@/hook/useMobileCheck";
import MainMobileContainer from "@/containers/main/MainMobileContainer";
import {DeviceContext} from "@/context/DeviceContext";

//* Add Meta-data if possible

const Home = (): ReactElement => {
  const isMobile = useMobileCheck();
  const isSSRMobile = useContext(DeviceContext).isSSRMobile;

  return (
      (isSSRMobile || isMobile) ? <MainMobileContainer/> : <MainContainer/>
  )
}

export default Home;
