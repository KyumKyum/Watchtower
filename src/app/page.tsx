import React, {ReactElement} from "react";
import Canvas from "@/layout/Canvas";
import MainContainer from "@/containers/main/MainContainer";

//* Add Meta-data if possible

const Home = (): ReactElement => {
  return (
    <Canvas>
        <MainContainer />
    </Canvas>
  )
}

export default Home;
