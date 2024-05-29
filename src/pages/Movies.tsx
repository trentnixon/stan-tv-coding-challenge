import React from "react";
import Carousel from "../components/carousel/Carousel";
import Header from "../components/layout/Header";
import {  PageWrapper } from "../components/layout/Containers";

const Movies: React.FC = () => {
  return (
    <PageWrapper>
      <Header />
      <Carousel filter={(program) => program.type === "movie"} />
    </PageWrapper>
  );
};

export default Movies;
