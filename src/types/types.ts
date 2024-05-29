// Set type definitions

// JSON DATA
export interface Program {
  id: number;
  title: string;
  description: string;
  type: "series" | "movie";
  image: string;
  rating: string;
  genre: string;
  year: number;
  language: string;
}



// Fetch
export interface UseFetchDataReturn {
  data: Program[] | null;
  loading: boolean;
  error: string | null;
} 


// context Types
export interface DataContextProps {
  programs: Program[] | null;
  loading: boolean;
  error: string | null;
}

// Navigation
export interface NavItemProps {
  to: string;
  label: string;
}

// Carousel
export interface CarouselProps {
  filter: (program: any) => boolean;
}
export interface CarouselItemProps {
  program: Pick<Program, "id" | "title" | "image">;
  isActive: boolean;
  onMouseEnter: () => void;
}

// Programs
export interface ProgramDetailsProps {
  programId: string;
}