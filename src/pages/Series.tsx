import React from "react";
import Carousel from "../components/carousel/Carousel";
import { PageWrapper } from "../components/layout/Containers";
import Header from "../components/layout/Header";

const Series: React.FC = () => {
  return (
    <PageWrapper>
      <Header />
      <Carousel filter={(program) => program.type === "series"} />
    </PageWrapper>
  );
};

export default Series;
