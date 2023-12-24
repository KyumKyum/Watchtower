import React, {ReactElement} from "react";
import Canvas from "@/layout/Canvas";
import MainContainer from "@/containers/main/container";

//* Add Meta-data if possible

const Home = (): ReactElement => {
  return (
    <Canvas>
        <MainContainer />
    </Canvas>
  )
}

export default Home;
