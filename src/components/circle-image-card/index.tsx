import React from "react";
import "./circleimagecard.css";

interface CircleImageCardProps {
  imageSrc: string; // image source..
  title: string; // image title..
}
const CircleImageCard: React.FC<CircleImageCardProps> = ({
  imageSrc,
  title,
}) => {
  return (
    <div className="circle-image-card">
      <div className="circle-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="card-title">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default CircleImageCard;
