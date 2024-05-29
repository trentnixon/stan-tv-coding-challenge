import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import { PageWrapper } from "../components/layout/Containers";
import ProgramDetails from "../components/ProgramDetails/ProgramDetails";
import Error from "../components/carousel/Error";

const ProgramPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <PageWrapper>
        <Header />
        <Error />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Header />
      <ProgramDetails programId={id} />
    </PageWrapper>
  );
};

export default ProgramPage;
