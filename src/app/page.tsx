"use client"
import React, {ReactElement} from "react";
import MainContainer from "@/containers/main/MainContainer";
import useMobileCheck from "@/hook/useMobileCheck";
import MainMobileContainer from "@/containers/main/MainMobileContainer";

//* Add Meta-data if possible

const Home = (): ReactElement => {
  const isMobile = useMobileCheck();

  return (
      isMobile ? <MainMobileContainer/> : <MainContainer/>
  )
}

export default Home;
