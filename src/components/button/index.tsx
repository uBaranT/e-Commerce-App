import "./button.css";

interface ButtonProps {
  label: string;
  variant?: "primary" | "black" | "white";
  size?: "small" | "medium" | "large";
  width?: number;
  maxWidth?: boolean;
  round?: number;
  onClick: () => void;
}

const Button = ({
  label,
  variant = "primary",
  size = "medium",
  width,
  maxWidth = false,
  round = 20,
  onClick,
}: ButtonProps) => (
  <button
    className={`styled-button ${
      maxWidth ? "maxWidth" : ""
    } ${variant}-variant ${size}-size`}
  >
    {label}
  </button>
);

export default Button;
