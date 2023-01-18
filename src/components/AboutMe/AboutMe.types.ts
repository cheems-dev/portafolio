// Interfaces and types from component AboutMe
interface Item {
  src: string;
  title: string;
}

// Component Props
export interface AboutMeProps {}

export interface IconsComponentProps extends Item {}

export interface SlideComponentProps extends Item {}

// Styled Component Props
export interface AboutMeStyledProps {
  className: string;
}
