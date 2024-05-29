import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { H1, P, Small } from "../common/Text";
import Error from "../carousel/Error";
import NoPrograms from "../carousel/NoPrograms";
import {
  DetailsWrapper,
  ProgramContentWrapper,
  ProgramImage,
  ProgramImageWrapper,
  ProgramInfo,
} from "../layout/Program";
import ProgramSkeleton from "./Skeleton";

interface ProgramDetailsProps {
  programId: string;
}

const ProgramDetails: React.FC<ProgramDetailsProps> = ({ programId }) => {
  const { programs, loading, error } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Backspace") {
        navigate("/");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);



  if (loading) {
    return <ProgramSkeleton />;
  }

  if (error) {
    return <Error />;
  }

  const program = programs?.find((p) => p.id === Number(programId));

  if (!program) {
    return <NoPrograms />;
  }

  return (
    <ProgramContentWrapper>
      <ProgramImageWrapper>
        <ProgramImage src={program.image} alt={program.title} />
      </ProgramImageWrapper>
      <DetailsWrapper>
        <H1>{program.title}</H1>
        <ProgramInfo>
          <Small>{program.rating}</Small> | <Small>{program.year}</Small> |
          <Small>{program.genre}</Small> | <Small>{program.language}</Small>
        </ProgramInfo>
        <P>{program.description}</P>
      </DetailsWrapper>
    </ProgramContentWrapper>
  );
};

export default ProgramDetails;
