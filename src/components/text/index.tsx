import React from "react";
import './text.css';
interface TextProps {
  children: React.ReactNode;
  size: "xxs" | "xs" | "s" | "sm" | "m" | "ml" | "l" | "xl" | "xxl";
  color: "primary" | "black" | "white" | "grey";
  bold?: boolean;
}

const Text: React.FC<TextProps> = ({ children, size, color, bold = false }) => {
  const fontFamily = "'Poppins', 'Open Sans', 'Helvetica Neue'";
  const className = `text ${size} ${color} ${bold ? "bold" : ""}`;
  return (
    <span className={className} style={{ fontFamily }}>
      {children}
    </span>
  );
};

export default Text;

