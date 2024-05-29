import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import Skeleton from "./Skeleton";
import CarouselItem from "./CarouselItem";
import { CarouselWrapper } from "../layout/Containers";
import Error from "./Error";
import NoPrograms from "./NoPrograms";
import { CarouselProps } from "../../types/types";


const Carousel: React.FC<CarouselProps> = ({ filter }) => {
  const { programs, loading, error } = useData();
  const [startIndex, setStartIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!programs) return;

      if (event.key === "ArrowRight") {
        setStartIndex((prevIndex) => (prevIndex + 1) % programs.length);
        setActiveIndex((prevIndex) => (prevIndex + 1) % programs.length);
      } else if (event.key === "ArrowLeft") {
        setStartIndex(
          (prevIndex) => (prevIndex - 1 + programs.length) % programs.length
        );
        setActiveIndex(
          (prevIndex) => (prevIndex - 1 + programs.length) % programs.length
        );
      } else if (event.key === "Enter") {
        navigate(`/program/${programs[activeIndex].id}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [programs, activeIndex, navigate]);

  if (loading) {
    return <Skeleton />;
  }

  if (error) {
    return <Error />;
  }

  if (!programs) {
    return <NoPrograms />;
  }

  const filteredPrograms = programs.filter(filter);
  const visiblePrograms = [];
  for (let i = 0; i < 6; i++) {
    visiblePrograms.push(
      filteredPrograms[(startIndex + i) % filteredPrograms.length]
    );
  }

  return (
    <CarouselWrapper>
      {visiblePrograms.map((program, index) => (
        <CarouselItem
          key={program.id}
          program={program}
          isActive={
            (startIndex + index) % filteredPrograms.length === activeIndex
          }
          onMouseEnter={() =>
            setActiveIndex((startIndex + index) % filteredPrograms.length)
          }
        />
      ))}
    </CarouselWrapper>
  );
};

export default Carousel;
