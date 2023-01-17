// Interfaces and types from component Button

// Component Props
export interface ButtonProps {
  children: string;
  type?: "outlined" | "contained" | "text";
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  disabled?: boolean;
}

// Styled Component Props
export interface ButtonStyledProps {
  className: string;
}
