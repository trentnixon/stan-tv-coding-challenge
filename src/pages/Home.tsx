import React, { useEffect } from "react";
import Header from "../components/layout/Header";
import Carousel from "../components/carousel/Carousel";
import { PageWrapper } from "../components/layout/Containers";

const Home: React.FC = () => {
  useEffect(() => {
    localStorage.setItem("homeVisited", "true");
  }, []);

  return (
    <PageWrapper>
      <Header />
      <Carousel filter={() => true} />
    </PageWrapper>
  );
};

export default Home;
